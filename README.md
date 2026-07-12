# Fire Studio — sitio web

Sitio de una página para **Fire Studio**, estudio de diseño y desarrollo web en Mérida, Yucatán.
Construido con **Astro** (v7) a partir del diseño de Fire Studio, con los proyectos reales del
portafolio y fotografía de stock.

## Stack

- [Astro](https://astro.build) — sitio estático, componentes `.astro`
- Optimización de imágenes con `astro:assets` (WebP responsivo)
- Fuentes: Bricolage Grotesque · Instrument Sans · Space Mono (Google Fonts)
- Sin dependencias de framework de UI; el formulario de contacto usa JS vanilla

## Comandos

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala dependencias                                |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`          |
| `npm run build`   | Compila el sitio de producción a `./dist/`          |
| `npm run preview` | Sirve el build localmente para revisarlo            |

## Estructura

```
src/
├─ assets/
│  ├─ projects/         # capturas reales de cada tienda + foto del estudio
│  └─ blog/             # portadas de las entradas del blog
├─ components/          # Nav, Hero, Work, Services, Process, Testimonials,
│                       # About, Blog, Contact, Footer, WhatsAppFab
├─ content/blog/        # entradas del blog (Markdown + frontmatter)
├─ content.config.ts    # esquema de la colección de blog (astro:content)
├─ data/
│  ├─ projects.ts       # los 6 proyectos (ivang.mx/work) + caso destacado
│  └─ site.ts           # WhatsApp, email, redes y helper de wa.me
├─ lib/blog.ts          # orden y formato de fechas de las entradas
├─ layouts/Layout.astro # <head>, fuentes, metadatos
├─ styles/global.css    # tokens de diseño y primitivas compartidas
└─ pages/
   ├─ index.astro       # landing
   ├─ work/[slug].astro # página de detalle por proyecto (caso de estudio)
   └─ blog/
      ├─ index.astro    # listado del blog
      └─ [slug].astro   # entrada individual
```

## Páginas generadas

- `/` — landing
- `/work/<slug>` — un caso de estudio por proyecto (reto, solución, resultado, tecnologías,
  enlace al sitio en vivo y proyectos relacionados)
- `/blog` — listado de entradas
- `/blog/<slug>` — cada artículo

## Contenido

- **Proyectos** (`src/data/projects.ts`): Sandra Weil (destacado), Sognare, Pure Over,
  CEMEX Supply, Mi Tienda Socio y Terrakan Residencial — tomados de
  [ivang.mx/work](https://ivang.mx/work). Cada imagen es una **captura real** de la tienda en
  vivo. Para cambiarla, reemplaza el archivo en `src/assets/projects/`.
- **Blog** (`src/content/blog/*.md`): para agregar una entrada, crea un `.md` con el frontmatter
  (`title`, `description`, `category`, `readingTime`, `date`, `cover`, `coverAlt`) y su portada en
  `src/assets/blog/`. Aparece sola en el home, el listado y con su propia página.
- **Datos de contacto** (`src/data/site.ts`): actualiza `whatsappNumber`, `email` y las
  redes sociales en un solo lugar.
