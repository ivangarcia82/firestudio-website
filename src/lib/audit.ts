// Shared shape + validation for the free-audit form.
// Imported by both the browser (client-side validation) and `/api/audit`
// (server-side validation), so the two can never drift apart.

export const REVENUE_VALUES = [
  'sin-ventas',
  '0-50k-mxn',
  '50k-250k-mxn',
  '250k-1m-mxn',
  '1m-mas-mxn',
] as const;

export type RevenueValue = (typeof REVENUE_VALUES)[number];

export interface AuditSubmission {
  storeUrl: string;
  email: string;
  revenue: string;
  language: string;
  /** Honeypot. Real visitors never see this field, so it must stay empty. */
  company?: string;
}

export type AuditField = 'storeUrl' | 'email' | 'revenue';

/** The origin recorded on every contact created by this form. */
export const AUDIT_SOURCE = 'web-auditoria';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Accepts `mitienda.com`, `www.mitienda.com` and full URLs. Returns the
 * normalized `https://…` form, or null when it cannot be read as a host.
 */
export function normalizeStoreUrl(raw: string): string | null {
  const value = raw.trim();
  if (!value) return null;

  const withScheme = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  let url: URL;
  try {
    url = new URL(withScheme);
  } catch {
    return null;
  }

  // A bare hostname needs at least one dot and no spaces to be plausible.
  if (!url.hostname.includes('.') || /\s/.test(url.hostname)) return null;
  return url.href;
}

export function isValidEmail(raw: string): boolean {
  return EMAIL_RE.test(raw.trim());
}

export function isValidRevenue(raw: string): raw is RevenueValue {
  return (REVENUE_VALUES as readonly string[]).includes(raw);
}

/** Field-level errors, keyed by field name. Empty object means valid. */
export function validateAudit(data: AuditSubmission): Partial<Record<AuditField, true>> {
  const errors: Partial<Record<AuditField, true>> = {};
  if (!normalizeStoreUrl(data.storeUrl ?? '')) errors.storeUrl = true;
  if (!isValidEmail(data.email ?? '')) errors.email = true;
  if (!isValidRevenue(data.revenue ?? '')) errors.revenue = true;
  return errors;
}
