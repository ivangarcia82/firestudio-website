// Spanish copy. `en.ts` mirrors this shape exactly — if you add a key here,
// add it there too or the build will fail type-checking.

import { site } from '../data/site';

/**
 * Section anchors, keyed by a stable id. Spanish keeps the anchors the live
 * site already links to (`/#trabajo`, `/#servicios`, …); English gets its own.
 */
const ids = {
  top: 'inicio',
  work: 'trabajo',
  services: 'servicios',
  bilingual: 'bilingue',
  audit: 'auditoria',
  process: 'proceso',
  packages: 'paquetes',
  about: 'nosotros',
  faq: 'preguntas',
  contact: 'contacto',
};

/** Stable ids shared by both languages. */
export type SectionId = keyof typeof ids;

export interface NavLink {
  id: SectionId;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'work', label: 'Trabajo' },
  { id: 'services', label: 'Servicios' },
  { id: 'process', label: 'Proceso' },
  { id: 'packages', label: 'Paquetes' },
  { id: 'faq', label: 'Preguntas' },
];

export const es = {
  htmlLang: 'es-MX',

  meta: {
    title: 'Fire Studio | Agencia Shopify en Mérida, México',
    description:
      'Diseñamos, desarrollamos y optimizamos tiendas Shopify en español e inglés. Estudio en Mérida, Yucatán. Pide tu auditoría gratis.',
  },

  ids,

  nav: {
    home: 'Inicio',
    skipToContent: 'Saltar al contenido',
    menu: 'Menú',
    links: navLinks,
    cta: 'Agenda una llamada',
    langSwitchLabel: 'Idioma',
    langSwitchTo: 'Ver esta página en inglés',
  },

  hero: {
    eyebrow: 'Estudio Shopify · Mérida, Yucatán',
    title: 'Desarrollo Shopify bilingüe para México y Estados Unidos.',
    lead: 'Diseñamos, desarrollamos y optimizamos tiendas Shopify en español e inglés. Hablas directo con quien construye tu tienda, sin intermediarios.',
    ctaPrimary: 'Pide tu auditoría gratis',
    ctaSecondary: 'Ver trabajo',
    heatmap: {
      caption: 'Dónde se pierde y dónde se gana una venta',
      legendLow: 'Frío',
      legendHigh: 'Caliente',
      alt: 'Mapa de calor ilustrativo de una ficha de producto: las zonas cercanas al botón de compra concentran la atención.',
      rows: [
        { label: 'Hero', heat: 5 },
        { label: 'Ficha de producto', heat: 4 },
        { label: 'Carrito', heat: 3 },
        { label: 'Checkout', heat: 2 },
        { label: 'Post-venta', heat: 1 },
      ],
    },
  },

  brands: {
    title: 'Marcas con las que hemos trabajado',
    names: ['Sandra Weil', 'Sognare', 'Pure Over', 'CEMEX Supply', 'Grupo Salinas'],
  },

  work: {
    title: 'Trabajo',
    note: 'Ningún proyecto se parece a otro. Es a propósito.',
    featuredChip: 'Caso destacado',
    labelChallenge: 'Reto',
    labelSolution: 'Solución',
    labelResult: 'Resultado',
    viewCase: 'Ver caso completo',
    viewCaseShort: 'Ver caso',
    nextEyebrow: 'Siguiente proyecto',
    nextTitle: '¿El tuyo?',
    nextCta: 'Cuéntanos tu proyecto',
  },

  testimonials: {
    title: 'Lo que dicen los clientes',
    note: '',
    items: [
      {
        quote:
          'Me explicaron todo sin tecnicismos y el precio fue el que acordamos desde el día uno. La tienda quedó con la personalidad editorial que buscábamos y hoy actualizamos cada colección solos.',
        name: 'Daniela R.',
        context: 'Sandra Weil · Tienda en línea',
      },
      {
        quote:
          'Siempre hablé con Ivan directamente. Le escribía por WhatsApp y me contestaba quien realmente estaba haciendo el sitio, no un intermediario.',
        name: 'Jorge M.',
        context: 'CEMEX Supply · E-commerce',
      },
      {
        quote:
          'Cada cambio en la ficha de producto lo probaron con datos antes de publicarlo. Dejamos de adivinar: ahora sabemos qué versión vende más.',
        name: 'Mariana T.',
        context: 'Sognare · CRO',
      },
    ],
  },

  services: {
    title: 'Qué hacemos en Shopify',
    items: [
      {
        name: 'Tiendas Shopify a la medida',
        body: 'Diseño y desarrollo de un tema propio: tu marca con su propia personalidad, no una plantilla con el logo cambiado.',
        audience: 'Para marcas que quieren verse tan bien como trabajan.',
        highlight: false,
      },
      {
        name: 'Migración a Shopify',
        body: 'Pasamos catálogo, clientes y contenido desde WooCommerce, Magento, VTEX, Wix o una tienda a la medida, cuidando URLs y redirecciones.',
        audience: 'Para quien ya vende y quiere dejar de pelear con su plataforma.',
        highlight: false,
      },
      {
        name: 'Tiendas bilingües y multimoneda',
        body: 'Una sola tienda en español e inglés, con precios en pesos y dólares e impuestos y envíos configurados por mercado.',
        audience: 'Para marcas mexicanas que quieren vender en Estados Unidos.',
        highlight: true,
      },
      {
        name: 'CRO y pruebas A/B',
        body: 'Probamos cada cambio con datos antes de publicarlo. La versión que gana se queda como estándar.',
        audience: 'Para tiendas con tráfico que quieren convertir mejor.',
        highlight: false,
      },
      {
        name: 'Integraciones y apps a la medida',
        body: 'Conectamos tu tienda con inventario, facturación, ERP o el sistema que ya usa tu operación.',
        audience: 'Para negocios que ya no caben en las apps genéricas.',
        highlight: false,
      },
      {
        name: 'Velocidad y mantenimiento',
        body: 'Rendimiento, actualizaciones, respaldos y mejoras continuas para que tu tienda no se quede atrás.',
        audience: 'Para quien ya tiene tienda y quiere dormir tranquilo.',
        highlight: false,
      },
    ],
    footnote: '¿Necesitas un sitio web o una aplicación a la medida? También los hacemos.',
  },

  bilingual: {
    eyebrow: 'México y Estados Unidos',
    title: 'Una tienda. Dos idiomas. Dos mercados.',
    lead: 'No necesitas dos tiendas para vender de los dos lados de la frontera. Con Shopify Markets tu catálogo vive una sola vez y cada mercado ve su propia versión.',
    points: [
      {
        title: 'Español e inglés',
        body: 'Contenido escrito para cada mercado, no traducido con un botón.',
      },
      {
        title: 'Pesos y dólares',
        body: 'Precios y checkout en la moneda de tu cliente.',
      },
      {
        title: 'Envíos e impuestos por país',
        body: 'Reglas configuradas por mercado, para que nadie se lleve sorpresas al pagar.',
      },
      {
        title: 'SEO en los dos idiomas',
        body: 'URLs propias y etiquetas hreflang para que Google muestre la versión correcta a cada quien.',
      },
    ],
  },

  audit: {
    eyebrow: 'Auditoría gratis',
    title: 'Te decimos qué está frenando tu tienda.',
    lead: 'Déjanos la liga de tu tienda y te enviamos una revisión con lo que encontramos: velocidad, ficha de producto, checkout y oportunidades para vender en inglés.',
    form: {
      storeUrl: 'URL de tu tienda',
      storeUrlPlaceholder: 'mitienda.com',
      email: 'Tu correo',
      emailPlaceholder: 'tu@correo.com',
      revenue: 'Ventas mensuales aproximadas',
      revenueOptions: [
        { value: 'sin-ventas', label: 'Aún no vendo' },
        { value: '0-50k-mxn', label: 'Menos de $50,000 MXN' },
        { value: '50k-250k-mxn', label: '$50,000 – $250,000 MXN' },
        { value: '250k-1m-mxn', label: '$250,000 – $1,000,000 MXN' },
        { value: '1m-mas-mxn', label: 'Más de $1,000,000 MXN' },
      ],
      language: 'Idioma en el que prefieres la auditoría',
      languageOptions: [
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'Inglés' },
      ],
      // Honeypot: a real person never sees or fills this.
      honeypotLabel: 'No llenes este campo',
      submit: 'Pedir mi auditoría',
      sending: 'Enviando…',
      privacyNote: 'Usamos tus datos solo para enviarte la auditoría.',
      privacyLink: 'Aviso de privacidad',
    },
    errors: {
      storeUrl: 'Escribe la dirección de tu tienda.',
      email: 'Escribe un correo válido.',
      revenue: 'Elige un rango de ventas.',
    },
    success: 'Listo. Recibimos tu tienda y te enviaremos la auditoría a tu correo.',
    failure: 'No pudimos enviar el formulario desde aquí. Mándanos los mismos datos por WhatsApp y lo resolvemos ahí mismo.',
    failureCta: 'Enviar por WhatsApp',
  },

  process: {
    title: 'Cómo trabajamos',
    stepLabel: 'Paso',
    steps: [
      {
        title: 'Auditoría',
        body: 'Revisamos tu tienda: qué frena las ventas, qué se arregla rápido y qué necesita rediseño.',
      },
      {
        title: 'Estrategia y alcance',
        body: 'Definimos qué se construye y en qué orden, con precio cerrado antes de empezar.',
      },
      {
        title: 'Diseño',
        body: 'Diseñamos la tienda pieza por pieza, empezando por las pantallas que más venden.',
      },
      {
        title: 'Desarrollo',
        body: 'Construimos el tema en Shopify mostrándote avances. Nada de desaparecer a mitad del proyecto.',
      },
      {
        title: 'Lanzamiento',
        body: 'Migramos, probamos y publicamos. Te entregamos todos los accesos a tu nombre.',
      },
      {
        title: 'Medición y mejora',
        body: 'Dejamos la medición instalada, leemos los datos y seguimos optimizando lo que ya está en línea.',
      },
    ],
  },

  packages: {
    eyebrow: 'Paquetes',
    title: 'Elige por dónde empezar.',
    lead: 'Los alcances se ajustan a tu catálogo y a tu operación. Después de la auditoría te damos una propuesta con precio cerrado.',
    quoteCta: 'Cotiza tu proyecto',
    popular: 'El más pedido',
    items: [
      {
        name: 'Launch',
        summary: 'Tu primera tienda Shopify, bien hecha desde el principio.',
        features: [
          'Tema a la medida sobre una base sólida',
          'Catálogo y colecciones cargados',
          'Pagos y envíos configurados',
          'Capacitación para que la administres tú',
        ],
        popular: false,
      },
      {
        name: 'Growth',
        summary: 'Rediseño completo para una tienda que ya vende.',
        features: [
          'Tema propio, diseñado de cero',
          'Fichas de producto y checkout optimizados',
          'Tienda bilingüe español / inglés',
          'Medición y analítica conectadas',
        ],
        popular: true,
      },
      {
        name: 'Scale',
        summary: 'Para operaciones grandes y catálogos complejos.',
        features: [
          'Todo lo de Growth',
          'Integraciones con tus sistemas',
          'Programa de pruebas A/B',
          'Atención prioritaria',
        ],
        popular: false,
      },
    ],
    monthly: {
      name: 'Plan mensual',
      summary: 'Mantenimiento, mejoras y experimentos cada mes, sin abrir un proyecto nuevo cada vez.',
      cta: 'Cotiza tu proyecto',
    },
  },

  about: {
    eyebrow: 'Sobre nosotros',
    title: 'Cuando nos escribes, te contesta quien va a hacer tu tienda.',
    text: 'Fire Studio es un estudio de Mérida dirigido por Ivan, desarrollador con experiencia construyendo tiendas Shopify para marcas de moda y proyectos web a la medida. Sin intermediarios ni vendedores: la persona que entiende tu negocio es la misma que diseña y programa tu tienda.',
    promises: [
      'Precios claros desde el inicio. Sin sorpresas a mitad del camino.',
      'Tu dominio siempre queda a tu nombre. Es tuyo, no nuestro.',
    ],
    cta: 'Escríbenos',
    photoAlt: 'Equipo de Fire Studio trabajando en laptops en el estudio de Mérida',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que casi siempre nos preguntan.',
    items: [
      {
        q: '¿Trabajan con marcas fuera de Mérida?',
        a: 'Sí. Trabajamos en remoto con marcas de todo México y de Estados Unidos. Las juntas son por videollamada y el día a día por WhatsApp o correo.',
      },
      {
        q: '¿Puedo administrar la tienda yo mismo?',
        a: 'Sí, esa es la idea. Te entregamos la tienda con secciones editables y te enseñamos a actualizar colecciones, campañas y productos sin depender de nosotros.',
      },
      {
        q: '¿De quién son mi dominio y mi tienda?',
        a: 'Tuyos. El dominio queda siempre a tu nombre y las cuentas de Shopify son tuyas desde el primer día.',
      },
      {
        q: '¿Pueden migrar mi tienda desde otra plataforma?',
        a: 'Sí. Migramos catálogo, clientes y contenido desde WooCommerce, Magento, VTEX, Wix o una tienda a la medida, cuidando las URLs y las redirecciones para no perder posicionamiento.',
      },
      {
        q: '¿Hacen la tienda en español y en inglés?',
        a: 'Sí, es nuestra especialidad: una sola tienda con los dos idiomas, precios en pesos y dólares, e impuestos y envíos configurados por mercado.',
      },
      {
        q: '¿Cuánto cuesta un proyecto?',
        a: 'Depende del catálogo y del alcance. Después de la auditoría te damos una propuesta con precio cerrado: sabes exactamente qué recibes y cuánto cuesta antes de empezar.',
      },
    ],
  },

  finalCta: {
    title: '¿Listo para vender en dos mercados?',
    lead: 'Agenda una llamada y platicamos de tu tienda. Sin compromiso y sin vendedores de por medio.',
    cta: 'Agenda una llamada',
    mailLead: '¿Prefieres correo? Escríbenos a',
  },

  footer: {
    tagline: 'Desarrollo Shopify bilingüe desde Mérida, Yucatán.',
    location: 'Mérida, Yucatán, México',
    headingSections: 'Secciones',
    headingContact: 'Contacto',
    headingSocial: 'Redes',
    headingLegal: 'Legal',
    whatsapp: 'WhatsApp',
    blog: 'Blog',
    privacy: 'Aviso de privacidad',
    terms: 'Términos y condiciones',
    rights: 'Fire Studio · Mérida, Yucatán',
  },

  cookies: {
    text: 'Usamos cookies para medir el tráfico del sitio y el resultado de nuestras campañas.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    more: 'Más información',
  },

  blog: {
    title: 'Blog',
    seeAll: 'Ver todo',
  },

  wa: {
    general: 'Hola, quiero contarles mi proyecto.',
    schedule: 'Hola, quiero agendar una llamada para platicar de mi tienda.',
    quote: 'Hola, quiero cotizar un proyecto de Shopify.',
    audit: 'Hola, quiero la auditoría gratis de mi tienda.',
    fab: 'Escríbenos por WhatsApp',
  },

  contactEmail: site.email,
};

export type Dictionary = typeof es;
