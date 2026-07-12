import type { ImageMetadata } from 'astro';

import sandraWeil from '../assets/projects/sandra-weil.jpg';
import sognare from '../assets/projects/sognare.jpg';
import pureOver from '../assets/projects/pure-over.jpg';
import cemexSupply from '../assets/projects/cemex-supply.jpg';
import miTiendaSocio from '../assets/projects/mi-tienda-socio.jpg';
import terrakan from '../assets/projects/terrakan.jpg';

export type ChipTone = 'gradient' | 'red' | 'amber';

export interface Project {
  slug: string;
  /** Short brand name (cards + titles). */
  name: string;
  /** One-line descriptor shown under the name on the detail page. */
  tagline: string;
  /** Type label shown as a chip. */
  category: string;
  tone: ChipTone;
  year: string;
  image: ImageMetadata;
  alt: string;
  /** Short blurb for grid cards. */
  summary: string;
  /** Intro paragraph on the detail page. */
  overview: string;
  reto: string;
  solucion: string;
  resultado: string;
  tech: string[];
  liveUrl: string;
  /** The single hero case study on the homepage. */
  featured?: boolean;
}

// Real projects from ivang.mx/work — images are live screenshots of each storefront.
export const projects: Project[] = [
  {
    slug: 'sandra-weil',
    name: 'Sandra Weil',
    tagline: 'Moda contemporánea',
    category: 'Tienda Shopify',
    tone: 'amber',
    year: '2025',
    image: sandraWeil,
    alt: 'Captura de la tienda en línea de Sandra Weil con su campaña editorial de temporada',
    summary:
      'Tienda editorial para una marca de moda latinoamericana que necesitaba verse como publicación y funcionar como canal de venta.',
    overview:
      'Sandra Weil es una marca de moda contemporánea latinoamericana. Necesitaba una presencia digital que se sintiera más como una publicación editorial que como un catálogo de productos, sin dejar de operar como canal de venta y sin complicar las actualizaciones de cada temporada.',
    reto:
      'La marca quería una presencia con alma editorial —tipografía de alto contraste, mucho aire y fotografía a sangre— sin dejar de vender ni complicar las actualizaciones de cada temporada.',
    solucion:
      'Tema Shopify a la medida con secciones editables para campañas: hero, lookbooks y piezas destacadas. Colecciones con filtros por color y talla, fichas con galería a pantalla completa y optimización de imágenes de alta resolución para no sacrificar la experiencia móvil.',
    resultado:
      'Tras el rediseño, la home carga notablemente más rápido y los visitantes recorren más páginas por sesión. El equipo actualiza cada colección solo, sin depender de nadie.',
    tech: ['Shopify', 'Tema a la medida', 'Liquid'],
    liveUrl: 'https://www.sandraweil.com',
    featured: true,
  },
  {
    slug: 'sognare',
    name: 'Sognare',
    tagline: 'Descanso y bienestar',
    category: 'E-commerce · CRO',
    tone: 'red',
    year: '2025',
    image: sognare,
    alt: 'Captura de la tienda Sognare mostrando su outlet de colchones y almohadas',
    summary:
      'Tienda de descanso —colchones, almohadas y ropa de cama— con un programa de pruebas A/B: cada cambio se valida con datos antes de publicarse. La variante ganadora ya es el estándar.',
    overview:
      'Sognare es una tienda Shopify de productos de descanso —colchones, almohadas y ropa de cama— que opera en un mercado competitivo y con mucha presión promocional. El proyecto incluyó montar un programa de experimentación donde cada cambio se prueba antes de publicarse.',
    reto:
      'En un mercado con mucha presión promocional, diferencias pequeñas en la ficha de producto mueven mucha venta. Había que montar la infraestructura para mejorar con datos sin arriesgar la estabilidad de producción.',
    solucion:
      'Tema Shopify mantenible con bloques reutilizables para las fichas, y un programa de pruebas A/B con Convert usando variantes ocultas por CSS —sin duplicar plantillas—. Un proceso controlado para analizar resultados y promover a producción solo la versión ganadora.',
    resultado:
      'La variante ganadora de la ficha de producto superó al control en la prueba A/B y se convirtió en el nuevo estándar de producción.',
    tech: ['Shopify', 'Liquid', 'Convert', 'A/B testing', 'CRO'],
    liveUrl: 'https://sognare.com.mx',
  },
  {
    slug: 'pure-over',
    name: 'Pure Over',
    tagline: 'Café de filtro en vidrio',
    category: 'Tienda Shopify',
    tone: 'amber',
    year: '2025',
    image: pureOver,
    alt: 'Captura del sitio de Pure Over mostrando su cafetera de filtro de vidrio',
    summary:
      'Cafetera de filtro en vidrio, sin plástico ni papel. Tema a la medida con guía de preparación, kits de regalo y una experiencia móvil rapidísima para campañas de tráfico pagado.',
    overview:
      'Pure Over es una marca de cafeteras de filtro de vidrio de borosilicato. Su propuesta —café de filtro sin plástico ni papel— debía comunicarse rápido, con fotografía premium, guías de preparación y kits de regalo, sin sacrificar velocidad en móvil.',
    reto:
      'Comunicar en segundos la propuesta —café de filtro en vidrio, sin plástico ni papel— con experiencia premium, guías de preparación y kits de regalo, manteniendo el sitio veloz en móvil para campañas de alto volumen.',
    solucion:
      'Tema Shopify a la medida con secciones para el storytelling de producto y una "Brew Guide", fichas con bundles y kits de regalo, un checkout con menos fricción y optimización mobile-first para el tráfico pagado.',
    resultado:
      'La experiencia móvil mejoró de forma notable: una tienda más rápida y limpia, con mejores conversiones y más capacidad para las campañas de temporada.',
    tech: ['Shopify', 'Tema a la medida', 'Liquid'],
    liveUrl: 'https://pureover.com',
  },
  {
    slug: 'cemex-supply',
    name: 'CEMEX Supply',
    tagline: 'E-commerce industrial',
    category: 'E-commerce · Integraciones',
    tone: 'red',
    year: '2025',
    image: cemexSupply,
    alt: 'Captura de la plataforma CEMEX Supply con su catálogo de productos industriales',
    summary:
      'E-commerce industrial: llantas, materiales, químicos y herramientas con envío nacional. Catálogo enorme con búsqueda simple, seguimiento de pedidos e integración con sus sistemas de operación.',
    overview:
      'CEMEX Supply lleva el poder de compra de un gigante industrial a un catálogo abierto: llantas, materiales, químicos y herramientas con envío nacional. El reto era combinar un catálogo enorme con una experiencia de compra simple.',
    reto:
      'Manejar un catálogo amplio y heterogéneo con una experiencia de compra simple —búsqueda, categorías y seguimiento de pedidos— y conectar la tienda con los sistemas de operación del negocio.',
    solucion:
      'Arquitectura Shopify pensada para catálogos grandes con categorías profundas, seguimiento de pedidos y páginas de soporte (FAQ, contacto y "Proyectos Supply"), más integraciones a la medida con los sistemas de back-office.',
    resultado:
      'Con el nuevo flujo de pedido, una mayor parte de las compras se completaron sin intervención de soporte: más autoservicio y más eficiencia operativa.',
    tech: ['Shopify', 'Liquid', 'Integraciones a la medida'],
    liveUrl: 'https://www.cemexsupply.com',
  },
  {
    slug: 'mi-tienda-socio',
    name: 'Mi Tienda Socio',
    tagline: 'Tienda promocional · Grupo Salinas',
    category: 'Tienda Shopify',
    tone: 'amber',
    year: '2025',
    image: miTiendaSocio,
    alt: 'Captura del portal Mi Tienda Socio con productos promocionales de Grupo Salinas',
    summary:
      'Portal de la tienda promocional de Grupo Salinas para colaboradores. Catálogo por categorías —tecnología, oficina, textil— con bloques de campaña fáciles de actualizar.',
    overview:
      'Mi Tienda Socio es el portal de la tienda promocional oficial de Grupo Salinas: un catálogo de marca para colaboradores y socios, que consolida mercancía de varias marcas —desde bebibles y tazas hasta tecnología y textil— con una experiencia de compra clara.',
    reto:
      'Ordenar un catálogo extenso y diverso en categorías navegables y establecer una identidad de marca consistente, capaz de soportar campañas de alto tráfico y picos de temporada.',
    solucion:
      'Tema Shopify con categorías claras (Hot Sale, Accesorios, Bebibles, Oficina, Tecnología y Textil), home con bloques de campaña y productos destacados fáciles de actualizar, y fichas estandarizadas para catálogos promocionales grandes.',
    resultado:
      'La nueva organización del catálogo redujo claramente el tiempo necesario para encontrar un producto.',
    tech: ['Shopify', 'Liquid'],
    liveUrl: 'https://mitiendasocio.com.mx',
  },
  {
    slug: 'terrakan',
    name: 'Terrakan Residencial',
    tagline: 'Desarrollo residencial',
    category: 'Sitio web · WordPress',
    tone: 'red',
    year: '2026',
    image: terrakan,
    alt: 'Captura del sitio de Terrakan Residencial con su hero de desarrollo de lotes',
    summary:
      'Landing de un desarrollo residencial que genera confianza en segundos y capta prospectos calificados. Calculadora, formularios y contacto directo al WhatsApp del asesor.',
    overview:
      'Terrakan Residencial es un desarrollo de lotes residenciales en Mérida. El objetivo era comercializarlos generando credibilidad y comunicando el estilo de vida —seguridad, tranquilidad, plusvalía— en los primeros segundos, y captar prospectos calificados sin fricción.',
    reto:
      'Vender lotes residenciales generando credibilidad y comunicando estilo de vida en los primeros segundos, y captar prospectos calificados para agendar visitas o cotizar sin fricción.',
    solucion:
      'Tema WordPress a la medida con un hero de alto impacto, secciones de servicios, ubicación y etapas del desarrollo, una calculadora en línea y formularios conectados directo al WhatsApp del asesor, más mapa y redes para reforzar confianza.',
    resultado:
      'La landing genera confianza de inmediato y guía a los interesados a agendar visitas o pedir cotización con muy pocos pasos.',
    tech: ['WordPress', 'Tema a la medida'],
    liveUrl: 'https://terrakan.mx',
  },
];

export const featured = projects.find((p) => p.featured)!;
export const gridProjects = projects.filter((p) => !p.featured);
