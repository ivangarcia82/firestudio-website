# Fire Studio — sitio web

Sitio bilingüe de **Fire Studio**, estudio de desarrollo Shopify en Mérida, Yucatán.
Español en `/` e inglés en `/en/`. Construido con **Astro** (v7) y desplegado en Vercel.

## Stack

- [Astro](https://astro.build) — estático, con una sola ruta bajo demanda (`/api/audit`)
- `@astrojs/vercel` (adapter) y `@astrojs/sitemap` (sitemap con alternates de idioma)
- Enrutamiento i18n nativo de Astro: `defaultLocale: 'es'` sin prefijo, `en` con prefijo
- Optimización de imágenes con `astro:assets` (WebP responsivo)
- Tipografía: Archivo variable (eje de ancho: expandida en títulos, condensada en etiquetas)
- Sin framework de UI; el formulario de auditoría es JS vanilla

## Comandos

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala dependencias                                |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`          |
| `npm run build`   | Compila el sitio de producción                      |
| `npm run preview` | Sirve el build localmente para revisarlo            |

Para dejar el servidor de desarrollo en segundo plano: `astro dev --background`
(se administra con `astro dev stop`, `astro dev status` y `astro dev logs`).

## Variables de entorno

Copia `.env.example` a `.env` y replica los valores en Vercel. Ninguna es obligatoria:
cada función se apaga sola si su variable falta.

| Variable                     | Para qué sirve                                             |
| :--------------------------- | :--------------------------------------------------------- |
| `HUBSPOT_PRIVATE_APP_TOKEN`  | `/api/audit` crea o actualiza el contacto en HubSpot. Sin ella, el formulario ofrece enviar los datos por WhatsApp. |
| `PUBLIC_META_PIXEL_ID`       | Carga el Meta Pixel. Vacía, no se carga.                    |
| `PUBLIC_GA4_ID`              | Carga GA4. Vacía, no se carga.                              |

## Estructura

```
src/
├─ assets/               # capturas de cada proyecto + portadas del blog
├─ components/           # Nav, Hero, BrandStrip, Work, Testimonials, Services,
│                        # Bilingual, AuditForm, Process, Packages, About, Faq,
│                        # FinalCta, Blog, Footer, WhatsAppFab, Analytics,
│                        # CookieNotice, LegalArticle
├─ content/blog/         # entradas del blog (Markdown + frontmatter)
├─ data/
│  ├─ projects.ts        # los 6 proyectos, en español
│  ├─ site.ts            # correo, WhatsApp, redes (con los TODO pendientes)
│  └─ pending.ts         # precios y promesas por confirmar — nulos = no se pintan
├─ i18n/
│  ├─ config.mjs         # locales, orígenes por idioma y rutas traducidas
│  ├─ index.ts           # helpers (useTranslations, sectionHref, waHref…)
│  ├─ es.ts / en.ts      # todo el copy; `en` está tipado contra `es`
│  └─ projects.ts        # copy en inglés del portafolio
├─ lib/
│  ├─ audit.ts           # validación compartida cliente/servidor del formulario
│  └─ blog.ts            # orden y formato de fechas
├─ layouts/Layout.astro  # canonical, hreflang, Open Graph, JSON-LD, analítica
├─ styles/global.css     # tokens de diseño y primitivas compartidas
└─ pages/
   ├─ index.astro            # home en español
   ├─ en/index.astro         # home en inglés
   ├─ aviso-de-privacidad.astro · terminos.astro
   ├─ en/privacy.astro · en/terms.astro
   ├─ api/audit.ts           # función serverless del formulario
   ├─ work/[slug].astro      # casos de estudio (solo en español)
   └─ blog/                  # listado y entradas (solo en español)
```

## Idiomas

- El español vive en la raíz y el inglés bajo `/en/`.
- `src/i18n/config.mjs` define las **rutas traducidas** por id (`home`, `privacy`,
  `terms`, `blog`). Una ruta con un solo idioma no lleva alternates de hreflang.
- Cada idioma tiene su **origen propio** en `ORIGINS`, para que el inglés pueda
  mudarse a un dominio genérico sin tocar componentes.
- `en.ts` está tipado con `Dictionary` (derivado de `es.ts`): si falta una clave,
  el build falla en vez de caer en silencio al español.

## Contenido

- **Proyectos** (`src/data/projects.ts`): el copy en inglés está en
  `src/i18n/projects.ts`. Los casos de estudio siguen siendo solo en español y los
  enlaces en inglés lo dicen ("Case study (in Spanish)").
- **Blog** (`src/content/blog/*.md`): solo en español. En `/en/` el enlace dice
  "Blog (in Spanish)".
- **Pendientes de Ivan** (`src/data/pending.ts`): precios de Launch, Growth, Scale
  y del plan mensual, más los tiempos de entrega y el soporte. Mientras estén en
  `null` no se pinta nada; llena el valor y la UI aparece sola.
