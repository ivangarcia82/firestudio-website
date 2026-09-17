// Central site configuration for Fire Studio.

import { SITE_URL } from '../i18n/config.mjs';

export const site = {
  name: 'Fire Studio',

  // TODO(ivan): confirm the real WhatsApp number. `5219991234567` is a
  // placeholder inherited from the old site — do NOT ship it to production.
  // Format: country code + area + number, digits only (e.g. 52 999 ...).
  whatsappNumber: '5219991234567',

  // TODO(ivan): confirm that this inbox is live and that hola@firestudio.mx
  // still forwards to it. The old site published hola@; Ivan asked for contacto@.
  email: 'contacto@firestudio.mx',

  // TODO(ivan): scheduling link (Calendly, Cal.com, Google). While empty, the
  // "Agenda una llamada" button falls back to WhatsApp with a prefilled message.
  bookingUrl: '',

  city: 'Mérida',
  region: 'Yucatán',
  regionCode: 'YU',
  country: 'México',
  countryCode: 'MX',

  instagram: 'https://instagram.com/firestudio.mx',
  tiktok: 'https://tiktok.com/@firestudio.mx',
  facebook: 'https://facebook.com/firestudio.mx',
} as const;

export const siteUrl = SITE_URL;

/** Build a wa.me link with a prefilled message. */
export function waLink(message: string): string {
  const number = site.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const mailHref = `mailto:${site.email}`;

/** Social profiles, for footer links and `sameAs` in structured data. */
export const socialProfiles = [site.instagram, site.tiktok, site.facebook];
