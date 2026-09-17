// POST /api/audit — creates or updates a HubSpot contact from the free-audit
// form. Runs on demand (the rest of the site stays static).
//
// Env: HUBSPOT_PRIVATE_APP_TOKEN (private app token, server-side only).
// When it is missing or HubSpot fails, the endpoint answers with a non-2xx
// status and the form falls back to sending the same data over WhatsApp.

import type { APIRoute } from 'astro';
import {
  AUDIT_SOURCE,
  normalizeStoreUrl,
  validateAudit,
  type AuditSubmission,
} from '../../lib/audit';

export const prerender = false;

const HUBSPOT_API = 'https://api.hubapi.com';

/** Properties that may not exist in a fresh HubSpot portal. */
const CUSTOM_PROPERTIES = ['monthly_sales', 'lead_source'] as const;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function getToken(): string | undefined {
  // Read at request time: on Vercel the value is injected into the running
  // function, not baked into the build.
  return (
    process.env.HUBSPOT_PRIVATE_APP_TOKEN ??
    (import.meta.env.HUBSPOT_PRIVATE_APP_TOKEN as string | undefined)
  );
}

async function hubspot(path: string, token: string, init: RequestInit): Promise<Response> {
  return fetch(`${HUBSPOT_API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      ...(init.headers ?? {}),
    },
  });
}

/** Contact id for an email, or null when HubSpot has never seen it. */
async function findContactId(email: string, token: string): Promise<string | null> {
  const res = await hubspot('/crm/v3/objects/contacts/search', token, {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [
        { filters: [{ propertyName: 'email', operator: 'EQ', value: email }] },
      ],
      properties: ['email'],
      limit: 1,
    }),
  });

  if (!res.ok) throw new Error(`HubSpot search failed: ${res.status}`);
  const body = (await res.json()) as { results?: Array<{ id: string }> };
  return body.results?.[0]?.id ?? null;
}

async function upsertContact(
  properties: Record<string, string>,
  token: string,
): Promise<void> {
  const id = await findContactId(properties.email, token);
  const path = id ? `/crm/v3/objects/contacts/${id}` : '/crm/v3/objects/contacts';
  const method = id ? 'PATCH' : 'POST';

  let res = await hubspot(path, token, { method, body: JSON.stringify({ properties }) });

  // A portal that has not defined our custom properties yet answers 400.
  // Retry with the standard-only subset so the lead is never lost.
  if (res.status === 400) {
    const detail = await res.text();
    if (detail.includes('PROPERTY_DOESNT_EXIST') || detail.includes('propertyName')) {
      const safe = { ...properties };
      for (const key of CUSTOM_PROPERTIES) delete safe[key];
      console.warn(
        `[audit] HubSpot rejected custom properties (${CUSTOM_PROPERTIES.join(', ')}). ` +
          'Create them in the portal to stop losing that data. Retrying without them.',
      );
      res = await hubspot(path, token, { method, body: JSON.stringify({ properties: safe }) });
    } else {
      throw new Error(`HubSpot ${method} failed: 400 ${detail.slice(0, 200)}`);
    }
  }

  if (!res.ok) {
    throw new Error(`HubSpot ${method} failed: ${res.status}`);
  }
}

export const POST: APIRoute = async ({ request }) => {
  let data: AuditSubmission;
  try {
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      data = (await request.json()) as AuditSubmission;
    } else {
      const form = await request.formData();
      data = Object.fromEntries(form) as unknown as AuditSubmission;
    }
  } catch {
    return json({ ok: false, error: 'bad-request' }, 400);
  }

  // Honeypot: answer like a success so bots don't learn anything, but store nothing.
  if (typeof data.company === 'string' && data.company.trim() !== '') {
    return json({ ok: true }, 200);
  }

  const errors = validateAudit(data);
  if (Object.keys(errors).length > 0) {
    return json({ ok: false, errors }, 400);
  }

  const token = getToken();
  if (!token) {
    console.warn('[audit] HUBSPOT_PRIVATE_APP_TOKEN is not set — falling back to WhatsApp.');
    return json({ ok: false, error: 'not-configured' }, 503);
  }

  const storeUrl = normalizeStoreUrl(data.storeUrl)!;
  const email = data.email.trim().toLowerCase();
  const language = data.language === 'en' ? 'en' : 'es';

  const properties: Record<string, string> = {
    email,
    website: storeUrl,
    hs_language: language,
    monthly_sales: data.revenue,
    lead_source: AUDIT_SOURCE,
    message: `Auditoría gratis · tienda: ${storeUrl} · ventas: ${data.revenue} · idioma: ${language} · origen: ${AUDIT_SOURCE}`,
  };

  try {
    await upsertContact(properties, token);
  } catch (error) {
    console.error('[audit] HubSpot request failed:', error);
    return json({ ok: false, error: 'hubspot' }, 502);
  }

  return json({ ok: true }, 200);
};

/** Anything but POST. */
export const ALL: APIRoute = () => json({ ok: false, error: 'method-not-allowed' }, 405);
