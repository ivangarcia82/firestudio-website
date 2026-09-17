// Everything a component needs to render in a given language.

import { es, type Dictionary, type SectionId } from './es';
import { en } from './en';
import { site, waLink } from '../data/site';
import {
  DEFAULT_LOCALE,
  LOCALES,
  HREFLANG,
  OG_LOCALE,
  ROUTES,
  routePath,
  routeUrl,
  alternatesFor,
  absoluteUrl,
  localeFromPath,
  SITE_URL,
  ORIGINS,
} from './config.mjs';

export type Lang = 'es' | 'en';
export type RouteKey = keyof typeof ROUTES;
export type { Dictionary, SectionId };

export {
  DEFAULT_LOCALE,
  LOCALES,
  HREFLANG,
  OG_LOCALE,
  routePath,
  routeUrl,
  alternatesFor,
  absoluteUrl,
  localeFromPath,
  SITE_URL,
  ORIGINS,
};

const dictionaries: Record<Lang, Dictionary> = { es, en };

/** The copy dictionary for a language. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** The language a URL belongs to. */
export function getLangFromUrl(url: URL): Lang {
  return localeFromPath(url.pathname) as Lang;
}

/** The other language. */
export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

/** Home path for a language (`/` or `/en/`). */
export function homePath(lang: Lang): string {
  return routePath('home', lang) as string;
}

/** Link to a homepage section, e.g. `/#trabajo` or `/en/#services`. */
export function sectionHref(lang: Lang, id: SectionId): string {
  return `${homePath(lang)}#${dictionaries[lang].ids[id]}`;
}

/** Privacy / terms paths in the current language. */
export function privacyPath(lang: Lang): string {
  return routePath('privacy', lang) as string;
}
export function termsPath(lang: Lang): string {
  return routePath('terms', lang) as string;
}

/** The blog is Spanish-only, in both languages. */
export const blogPath = routePath('blog', 'es') as string;

/** Case studies exist in Spanish only for now. */
export function workPath(slug: string): string {
  return `/work/${slug}/`;
}

/** WhatsApp link with a message written in the visitor's language. */
export function waHref(lang: Lang, key: keyof Dictionary['wa'] = 'general'): string {
  return waLink(dictionaries[lang].wa[key]);
}

/**
 * "Book a call" target. Falls back to WhatsApp until Ivan confirms a
 * scheduling link (see the TODO on `site.bookingUrl`).
 */
export function bookingHref(lang: Lang): string {
  return site.bookingUrl || waHref(lang, 'schedule');
}
