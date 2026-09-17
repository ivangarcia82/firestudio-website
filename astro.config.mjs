// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import {
  SITE_URL,
  DEFAULT_LOCALE,
  LOCALES,
  HREFLANG,
  ROUTES,
  routeUrl,
  alternatesFor,
} from './src/i18n/config.mjs';

/**
 * Reverse index of every translated URL → its route key, so the sitemap can
 * pair pages whose slugs differ between languages (`/aviso-de-privacidad/`
 * and `/en/privacy/`), which the integration cannot infer on its own.
 */
const ROUTE_BY_URL = new Map();
for (const key of Object.keys(ROUTES)) {
  for (const locale of LOCALES) {
    const url = routeUrl(key, locale);
    if (url) ROUTE_BY_URL.set(url, key);
  }
}

// https://astro.build/config
export default defineConfig({
  // Absolute URLs for canonicals, hreflang and the sitemap all derive from here.
  site: SITE_URL,

  // Spanish is the default locale and lives at the root (`/`); English is
  // prefixed (`/en/`). See src/i18n/config.mjs for the per-locale origins.
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: [...LOCALES],
    routing: { prefixDefaultLocale: false },
  },

  // Static by default; only `/api/audit` opts out with `prerender = false`.
  adapter: vercel(),

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        // Sitemap emits xhtml:link alternates using these hreflang codes.
        locales: HREFLANG,
      },
      filter: (page) => !page.includes('/api/'),
      serialize(item) {
        const key = ROUTE_BY_URL.get(item.url);
        const alternates = key ? alternatesFor(key) : [];
        if (alternates.length > 0) {
          item.links = alternates.map((alt) => ({ lang: alt.hreflang, url: alt.href }));
        }
        return item;
      },
    }),
  ],
});
