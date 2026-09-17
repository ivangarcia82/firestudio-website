// English copy. Typed against the Spanish dictionary, so a missing or
// misnamed key fails the build instead of silently falling back.

import { site } from '../data/site';
import type { Dictionary, NavLink } from './es';

const ids = {
  top: 'top',
  work: 'work',
  services: 'services',
  bilingual: 'bilingual',
  audit: 'audit',
  process: 'process',
  packages: 'packages',
  about: 'about',
  faq: 'faq',
  contact: 'contact',
};

const navLinks: NavLink[] = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'packages', label: 'Packages' },
  { id: 'faq', label: 'FAQ' },
];

export const en: Dictionary = {
  htmlLang: 'en',

  meta: {
    title: 'Fire Studio | Bilingual Shopify Development Studio',
    description:
      'We design, build and optimize Shopify stores in English and Spanish, from Mérida, Mexico. Get a free store audit.',
  },

  ids,

  nav: {
    home: 'Home',
    skipToContent: 'Skip to content',
    menu: 'Menu',
    links: navLinks,
    cta: 'Book a call',
    langSwitchLabel: 'Language',
    langSwitchTo: 'Ver esta página en español',
  },

  hero: {
    eyebrow: 'Shopify studio · Mérida, Mexico',
    title: 'Bilingual Shopify development for Mexico and the United States.',
    lead: 'We design, build and optimize Shopify stores in English and Spanish. You talk straight to the person building your store — no middlemen.',
    ctaPrimary: 'Get your free audit',
    ctaSecondary: 'See our work',
    heatmap: {
      caption: 'Where a sale is won and where it is lost',
      legendLow: 'Cold',
      legendHigh: 'Hot',
      alt: 'Illustrative heat map of a product page: the areas closest to the buy button concentrate the most attention.',
      rows: [
        { label: 'Hero', heat: 5 },
        { label: 'Product page', heat: 4 },
        { label: 'Cart', heat: 3 },
        { label: 'Checkout', heat: 2 },
        { label: 'Post-purchase', heat: 1 },
      ],
    },
  },

  brands: {
    title: "Brands we've worked with",
    names: ['Sandra Weil', 'Sognare', 'Pure Over', 'CEMEX Supply', 'Grupo Salinas'],
  },

  work: {
    title: "Stores we've built",
    note: "Real projects for fashion, home, coffee and industrial brands. No two look alike, and that's on purpose.",
    featuredChip: 'Featured case',
    labelChallenge: 'Challenge',
    labelSolution: 'Solution',
    labelResult: 'Result',
    // Case studies only exist in Spanish for now — say so on the link itself.
    viewCase: 'Case study (in Spanish)',
    viewCaseShort: 'Case study (in Spanish)',
    nextEyebrow: 'Next project',
    nextTitle: 'Yours?',
    nextCta: 'Tell us about your project',
  },

  testimonials: {
    title: 'What clients say',
    note: 'Translated from Spanish.',
    items: [
      {
        quote:
          'They explained everything without jargon, and the price was the one we agreed on from day one. The store has the editorial personality we wanted, and today we update every collection ourselves.',
        name: 'Daniela R.',
        context: 'Sandra Weil · Online store',
      },
      {
        quote:
          "I always talked to Ivan directly. I'd message him on WhatsApp and the person actually building the site answered, not a middleman.",
        name: 'Jorge M.',
        context: 'CEMEX Supply · E-commerce',
      },
      {
        quote:
          'They tested every change to the product page with data before publishing it. We stopped guessing: now we know which version sells more.',
        name: 'Mariana T.',
        context: 'Sognare · CRO',
      },
    ],
  },

  services: {
    title: 'What we do on Shopify',
    items: [
      {
        name: 'Custom Shopify stores',
        body: 'We design and build your own theme: your brand with its own personality, not a template with the logo swapped out.',
        audience: 'For brands that want to look as good as they work.',
        highlight: false,
      },
      {
        name: 'Migration to Shopify',
        body: 'We move catalog, customers and content from WooCommerce, Magento, VTEX, Wix or a hand-built store, keeping URLs and redirects intact.',
        audience: 'For stores that are done fighting their platform.',
        highlight: false,
      },
      {
        name: 'Bilingual and multi-currency stores',
        body: 'One store in English and Spanish, with prices in dollars and pesos and taxes and shipping set up per market.',
        audience: 'For Mexican brands selling into the United States.',
        highlight: true,
      },
      {
        name: 'CRO and A/B testing',
        body: 'We test every change with data before it goes live. The winning version becomes the standard.',
        audience: 'For stores with traffic that want to convert better.',
        highlight: false,
      },
      {
        name: 'Integrations and custom apps',
        body: 'We connect your store to inventory, invoicing, ERP or whatever system your operation already runs on.',
        audience: "For businesses that have outgrown off-the-shelf apps.",
        highlight: false,
      },
      {
        name: 'Speed and maintenance',
        body: 'Performance, updates, backups and continuous improvements so your store does not fall behind.',
        audience: 'For anyone who already has a store and wants to sleep at night.',
        highlight: false,
      },
    ],
    footnote: 'Need a website or a custom application? We build those too.',
  },

  bilingual: {
    eyebrow: 'Mexico and the United States',
    title: 'One store. Two languages. Two markets.',
    lead: 'You do not need two stores to sell on both sides of the border. With Shopify Markets your catalog lives once and each market sees its own version.',
    points: [
      {
        title: 'English and Spanish',
        body: 'Content written for each market, not run through a translate button.',
      },
      {
        title: 'Dollars and pesos',
        body: "Prices and checkout in your customer's own currency.",
      },
      {
        title: 'Shipping and taxes per country',
        body: 'Rules configured per market, so nobody gets a surprise at checkout.',
      },
      {
        title: 'SEO in both languages',
        body: 'Separate URLs and hreflang tags so Google shows each visitor the right version.',
      },
    ],
  },

  audit: {
    eyebrow: 'Free audit',
    title: "We'll tell you what's holding your store back.",
    lead: 'Send us your store link and we will send back a review of what we find: speed, product page, checkout and opportunities to sell in Spanish.',
    form: {
      storeUrl: 'Your store URL',
      storeUrlPlaceholder: 'mystore.com',
      email: 'Your email',
      emailPlaceholder: 'you@email.com',
      revenue: 'Approximate monthly sales',
      revenueOptions: [
        { value: 'sin-ventas', label: 'Not selling yet' },
        { value: '0-50k-mxn', label: 'Under $2,500 USD' },
        { value: '50k-250k-mxn', label: '$2,500 – $12,500 USD' },
        { value: '250k-1m-mxn', label: '$12,500 – $50,000 USD' },
        { value: '1m-mas-mxn', label: 'Over $50,000 USD' },
      ],
      language: 'Preferred language for the audit',
      languageOptions: [
        { value: 'es', label: 'Spanish' },
        { value: 'en', label: 'English' },
      ],
      honeypotLabel: 'Leave this field empty',
      submit: 'Get my audit',
      sending: 'Sending…',
      privacyNote: 'We only use your details to send you the audit.',
      privacyLink: 'Privacy notice',
    },
    errors: {
      storeUrl: 'Enter your store address.',
      email: 'Enter a valid email.',
      revenue: 'Pick a sales range.',
    },
    success: 'Done. We got your store and will send the audit to your email.',
    failure: 'We could not send the form from here. Send us the same details on WhatsApp and we will take it from there.',
    failureCta: 'Send on WhatsApp',
  },

  process: {
    title: 'How we work',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Audit',
        body: 'We review your store: what is holding sales back, what is a quick fix and what needs a redesign.',
      },
      {
        title: 'Strategy and scope',
        body: 'We define what gets built and in what order, with a closed price before we start.',
      },
      {
        title: 'Design',
        body: 'We design the store screen by screen, starting with the ones that sell the most.',
      },
      {
        title: 'Development',
        body: 'We build the Shopify theme and show you progress along the way. No disappearing mid-project.',
      },
      {
        title: 'Launch',
        body: 'We migrate, test and publish. Every account and access is handed over in your name.',
      },
      {
        title: 'Measure and improve',
        body: 'We leave the tracking installed, read the data and keep optimizing what is already live.',
      },
    ],
  },

  packages: {
    eyebrow: 'Packages',
    title: 'Pick where to start.',
    lead: 'Scope adapts to your catalog and your operation. After the audit we send a proposal with a closed price.',
    quoteCta: 'Get a quote',
    popular: 'Most requested',
    items: [
      {
        name: 'Launch',
        summary: 'Your first Shopify store, done right from the start.',
        features: [
          'Custom theme on a solid base',
          'Catalog and collections loaded',
          'Payments and shipping configured',
          'Training so you can run it yourself',
        ],
        popular: false,
      },
      {
        name: 'Growth',
        summary: 'A full redesign for a store that already sells.',
        features: [
          'Your own theme, designed from scratch',
          'Product pages and checkout optimized',
          'Bilingual English / Spanish store',
          'Tracking and analytics connected',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        summary: 'For large operations and complex catalogs.',
        features: [
          'Everything in Growth',
          'Integrations with your systems',
          'A/B testing program',
          'Priority support',
        ],
        popular: false,
      },
    ],
    monthly: {
      name: 'Monthly plan',
      summary: 'Maintenance, improvements and experiments every month, without opening a new project each time.',
      cta: 'Get a quote',
    },
  },

  about: {
    eyebrow: 'About us',
    title: 'When you write to us, the person building your store replies.',
    text: 'Fire Studio is a studio in Mérida, Mexico, led by Ivan, a developer with experience building Shopify stores for fashion brands and custom web projects. No middlemen and no salespeople: the person who understands your business is the same one who designs and codes your store.',
    promises: [
      'Clear prices from the start, with no surprises halfway through.',
      "Your domain is always in your name. It's yours, not ours.",
    ],
    cta: 'Write to us',
    photoAlt: 'The Fire Studio team working on laptops at the studio in Mérida',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'What people almost always ask.',
    items: [
      {
        q: 'Do you work with brands outside Mérida?',
        a: 'Yes. We work remotely with brands across Mexico and the United States. Meetings happen over video and the day-to-day runs on WhatsApp or email.',
      },
      {
        q: 'Can I run the store myself?',
        a: 'Yes, that is the point. We hand over a store with editable sections and show you how to update collections, campaigns and products without depending on us.',
      },
      {
        q: 'Who owns my domain and my store?',
        a: 'You do. The domain is always registered in your name and the Shopify accounts are yours from day one.',
      },
      {
        q: 'Can you migrate my store from another platform?',
        a: 'Yes. We migrate catalog, customers and content from WooCommerce, Magento, VTEX, Wix or a custom store, keeping URLs and redirects in place so you do not lose rankings.',
      },
      {
        q: 'Do you build stores in both English and Spanish?',
        a: 'Yes, it is our specialty: one store with both languages, prices in dollars and pesos, and taxes and shipping configured per market.',
      },
      {
        q: 'How much does a project cost?',
        a: 'It depends on the catalog and the scope. After the audit we send a proposal with a closed price: you know exactly what you get and what it costs before we start.',
      },
    ],
  },

  finalCta: {
    title: 'Ready to sell in two markets?',
    lead: 'Book a call and tell us about your store. No commitment and no salespeople in the middle.',
    cta: 'Book a call',
    mailLead: 'Prefer email? Write to us at',
  },

  footer: {
    tagline: 'Bilingual Shopify development from Mérida, Yucatán.',
    location: 'Mérida, Yucatán, Mexico',
    headingSections: 'Sections',
    headingContact: 'Contact',
    headingSocial: 'Social',
    headingLegal: 'Legal',
    whatsapp: 'WhatsApp',
    blog: 'Blog (in Spanish)',
    privacy: 'Privacy notice',
    terms: 'Terms and conditions',
    rights: 'Fire Studio · Mérida, Yucatán',
  },

  cookies: {
    text: 'We use cookies to measure site traffic and how our campaigns perform.',
    accept: 'Accept',
    reject: 'Reject',
    more: 'Learn more',
  },

  blog: {
    title: 'Blog',
    seeAll: 'See all',
  },

  wa: {
    general: 'Hi, I would like to tell you about my project.',
    schedule: 'Hi, I would like to book a call about my store.',
    quote: 'Hi, I would like a quote for a Shopify project.',
    audit: 'Hi, I would like the free audit for my store.',
    fab: 'Message us on WhatsApp',
  },

  contactEmail: site.email,
};
