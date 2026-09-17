// English copy for the portfolio. The Spanish original lives in
// `src/data/projects.ts`; case-study detail pages stay Spanish-only, so only
// the fields the English homepage renders are translated here.

import { projects, type Project } from '../data/projects';
import type { Lang } from './index';

interface ProjectCopy {
  tagline: string;
  category: string;
  summary: string;
  alt: string;
  reto: string;
  solucion: string;
  resultado: string;
}

const englishCopy: Record<string, ProjectCopy> = {
  'sandra-weil': {
    tagline: 'Contemporary fashion',
    category: 'Shopify store',
    summary:
      'An editorial store for a Latin American fashion brand that needed to read like a magazine and work like a sales channel.',
    alt: "Screenshot of Sandra Weil's online store showing its editorial seasonal campaign",
    reto:
      'The brand wanted an editorial presence, with high-contrast type, generous white space and full-bleed photography, that still sells and stays easy to update every season.',
    solucion:
      'A custom Shopify theme with editable campaign sections (hero, lookbooks and featured pieces), collections filtered by color and size, full-screen product galleries and high-resolution images optimized for mobile.',
    resultado:
      'After the redesign, the homepage loads noticeably faster, visitors browse more pages per session and the team updates every collection on its own.',
  },
  sognare: {
    tagline: 'Sleep and wellness',
    category: 'E-commerce · CRO',
    summary:
      'A sleep store for mattresses, pillows and bedding, with an A/B testing program: every change is validated with data before it goes live, and the winning variant is now the standard.',
    alt: 'Screenshot of the Sognare store showing its mattress and pillow outlet',
    reto:
      'In a market under heavy promotional pressure, small differences on the product page move a lot of revenue.',
    solucion:
      'A maintainable Shopify theme with reusable product-page blocks, plus an A/B testing program run with Convert using CSS-hidden variants.',
    resultado:
      'The winning product-page variant beat the control and became the new production standard.',
  },
  'pure-over': {
    tagline: 'Glass pour-over coffee',
    category: 'Shopify store',
    summary:
      'A glass pour-over coffee maker with no plastic or paper. A custom theme with a brewing guide, gift kits and a very fast mobile experience for paid traffic campaigns.',
    alt: 'Screenshot of the Pure Over site showing its glass pour-over coffee maker',
    reto:
      'Communicate the promise — pour-over coffee in glass, with no plastic or paper — in seconds, and stay fast on mobile for high-volume campaigns.',
    solucion:
      'A custom Shopify theme with product storytelling sections and a brewing guide, bundles and gift kits, and mobile-first optimization for paid traffic.',
    resultado:
      'A faster, cleaner mobile experience with better conversion and more headroom for seasonal campaigns.',
  },
  'cemex-supply': {
    tagline: 'Industrial e-commerce',
    category: 'E-commerce · Integrations',
    summary:
      'Industrial e-commerce for tires, materials, chemicals and tools with nationwide shipping. A huge catalog with simple search, order tracking and integration with their operating systems.',
    alt: 'Screenshot of the CEMEX Supply platform showing its industrial product catalog',
    reto:
      'Handle a broad, heterogeneous catalog with a simple buying experience and connect the store to the business operating systems.',
    solucion:
      'A Shopify architecture built for large catalogs, with deep categories, order tracking, support pages and custom back-office integrations.',
    resultado:
      'With the new ordering flow, a larger share of purchases completed without support stepping in.',
  },
  'mi-tienda-socio': {
    tagline: 'Promotional store · Grupo Salinas',
    category: 'Shopify store',
    summary:
      "Grupo Salinas' promotional store for its employees. A catalog organized by category, from tech to office supplies and textiles, with campaign blocks that are easy to update.",
    alt: 'Screenshot of the Mi Tienda Socio portal with Grupo Salinas promotional products',
    reto:
      'Organize a large, diverse catalog into navigable categories and hold a consistent brand identity through high-traffic campaigns.',
    solucion:
      'A Shopify theme with clear categories, a homepage of campaign blocks and featured products that are easy to update, and standardized product pages for large promotional catalogs.',
    resultado:
      'The new catalog structure clearly cut the time it takes to find a product.',
  },
  terrakan: {
    tagline: 'Residential development',
    category: 'Website · WordPress',
    summary:
      'A landing page for a residential development that builds trust in seconds and captures qualified leads, with a calculator, forms and direct contact with the sales advisor on WhatsApp.',
    alt: 'Screenshot of the Terrakan Residencial site showing its residential lots hero',
    reto:
      'Sell residential lots by building credibility in the first seconds and capturing qualified leads without friction.',
    solucion:
      'A custom WordPress theme with a high-impact hero, location and development-stage sections, an online calculator and forms wired straight to the sales advisor on WhatsApp.',
    resultado:
      'The landing page builds trust immediately and guides visitors to book a visit or request a quote in very few steps.',
  },
};

/** A project with its text resolved for `lang`. Spanish returns it untouched. */
export function localizedProject(project: Project, lang: Lang): Project {
  if (lang === 'es') return project;
  const copy = englishCopy[project.slug];
  if (!copy) return project;
  return { ...project, ...copy };
}

export function localizedProjects(lang: Lang): Project[] {
  return projects.map((p) => localizedProject(p, lang));
}

export function localizedFeatured(lang: Lang): Project {
  return localizedProject(projects.find((p) => p.featured)!, lang);
}

export function localizedGrid(lang: Lang): Project[] {
  return projects.filter((p) => !p.featured).map((p) => localizedProject(p, lang));
}
