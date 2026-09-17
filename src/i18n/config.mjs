// ============================================================
// Locale, origin and route configuration.
//
// Imported by `astro.config.mjs` (plain ESM, so this file stays .mjs) and by
// components through `src/i18n/index.ts`.
// ============================================================

/** Canonical origin of the site. Everything absolute derives from this. */
export const SITE_URL = 'https://www.firestudio.mx';

export const DEFAULT_LOCALE = 'es';
export const LOCALES = /** @type {const} */ (['es', 'en']);

/** `lang` attribute + hreflang code per locale. */
export const HREFLANG = { es: 'es-MX', en: 'en' };

/** Open Graph locale per locale. */
export const OG_LOCALE = { es: 'es_MX', en: 'en_US' };

/**
 * Origin per locale. Both languages share the domain today, but English is
 * read from its own entry so it can move to a generic domain later without
 * touching a single component.
 */
export const ORIGINS = {
  es: SITE_URL,
  en: SITE_URL,
};

/**
 * Translated routes, keyed by a stable route id. A key with a single locale
 * (e.g. `blog`) exists in that language only and gets no hreflang alternates.
 * Paths are stored with a trailing slash exactly as Astro emits them.
 */
export const ROUTES = {
  home: { es: '/', en: '/en/' },
  privacy: { es: '/aviso-de-privacidad/', en: '/en/privacy/' },
  terms: { es: '/terminos/', en: '/en/terms/' },
  blog: { es: '/blog/' },
};

/** Path of `key` in `lang`, or undefined when that language has no version. */
export function routePath(key, lang) {
  return ROUTES[key]?.[lang];
}

/** Absolute URL for a raw pathname in a given locale. */
export function absoluteUrl(pathname, lang = DEFAULT_LOCALE) {
  const origin = ORIGINS[lang] ?? SITE_URL;
  return new URL(pathname, origin).href;
}

/** Absolute URL of `key` in `lang`, or undefined if untranslated. */
export function routeUrl(key, lang) {
  const path = routePath(key, lang);
  return path === undefined ? undefined : absoluteUrl(path, lang);
}

/**
 * hreflang alternates for a route key: one entry per locale that has the page,
 * plus `x-default` pointing at Spanish. Returns [] for single-language routes
 * so those pages ship no alternates at all.
 */
export function alternatesFor(key) {
  const available = LOCALES.filter((l) => routePath(key, l) !== undefined);
  if (available.length < 2) return [];

  const links = available.map((l) => ({ hreflang: HREFLANG[l], href: routeUrl(key, l) }));
  links.push({ hreflang: 'x-default', href: routeUrl(key, DEFAULT_LOCALE) });
  return links;
}

/** The locale a pathname belongs to. */
export function localeFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}
