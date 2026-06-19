export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  targetAmount: number; // in EUR for presentation
  raised: number;
  tokenPrice: number; // EUR per token (or use ADA later)
  totalTokens: number;
  expectedYield: number; // %
  restorationTimeline: string;
  restorationPlan: string[];
  cipRules: string[];
  status: "open" | "funded" | "completed";
  investors: number;
  year: number;
}

// Realistic demo projects for Restaurador
export const projects: Project[] = [
  {
    id: "p1",
    slug: "fabrica-vapor-barcelona",
    title: "Fábrica El Vapor",
    location: "Barcelona, Gràcia",
    type: "Fábrica abandonada",
    image: "/images/vapor.jpg",
    shortDesc: "Antigua fábrica textil de 1872 reconvertida en hub creativo y residencias con alma industrial.",
    longDesc: "La icónica Fábrica El Vapor, construida en 1872, ha permanecido abandonada desde 1998. El proyecto restaurará 4.200 m² respetando su estructura original de hierro y ladrillo. Se crearán 28 lofts de alquiler, espacios de coworking, un centro cultural y un pequeño museo industrial. Los ingresos recurrentes por alquileres + eventos culturales generan los retornos proyectados.",
    targetAmount: 2850000,
    raised: 1710000,
    tokenPrice: 1250,
    totalTokens: 2280,
    expectedYield: 13.8,
    restorationTimeline: "18 meses",
    restorationPlan: [
      "Refuerzo estructural y restauración de cubierta (meses 1-4)",
      "Rehabilitación de fachadas y carpinterías originales (meses 4-8)",
      "Instalación de sistemas eficientes y distribución interior (meses 8-13)",
      "Acabados, equipamiento y puesta en marcha (meses 13-18)"
    ],
    cipRules: [
      "Transferencias solo entre wallets verificadas (KYC)",
      "Período de lock-up de 24 meses durante restauración",
      "Dividendos trimestrales automáticos post-activación",
      "Derecho preferente de recompra para el emisor en ciertos escenarios"
    ],
    status: "open",
    investors: 347,
    year: 1872,
  },
  {
    id: "p2",
    slug: "palacio-miraflores-madrid",
    title: "Palacio Miraflores",
    location: "Madrid, Chamberí",
    type: "Inmueble histórico",
    image: "/images/palacio.jpg",
    shortDesc: "Palacete señorial del siglo XIX convertido en hotel boutique de 22 habitaciones con alto valor patrimonial.",
    longDesc: "El Palacio Miraflores es un ejemplo excepcional de arquitectura civil madrileña de 1889. Lleva más de 15 años en desuso. La tokenización financiará su completa restauración y transformación en un hotel boutique de lujo con restaurante y salas de eventos. La combinación de alto ADR + ocupación proyectada + revalorización patrimonial garantiza retornos atractivos.",
    targetAmount: 4100000,
    raised: 3280000,
    tokenPrice: 2050,
    totalTokens: 2000,
    expectedYield: 15.2,
    restorationTimeline: "22 meses",
    restorationPlan: [
      "Restauración patrimonial de fachada, patios y elementos decorativos (meses 1-7)",
      "Rehabilitación estructural, cubiertas y carpintería histórica (meses 5-11)",
      "Instalaciones modernas integradas con respeto patrimonial (meses 10-16)",
      "Decoración interior, equipamiento hotelero y apertura (meses 16-22)"
    ],
    cipRules: [
      "Acceso restringido a inversores acreditados (sub-estándar CIP-0113)",
      "Lock-up de 30 meses para tokens iniciales",
      "Distribución de beneficios netos operativos cada trimestre",
      "Gobernanza ligera: voto sobre cambios importantes en el uso"
    ],
    status: "open",
    investors: 189,
    year: 1889,
  },
  {
    id: "p3",
    slug: "molino-valencia",
    title: "Molino de la Huerta",
    location: "Valencia, Ruzafa",
    type: "Patrimonio industrial",
    image: "/images/molino.jpg",
    shortDesc: "Molino hidráulico del siglo XVIII transformado en centro gastronómico y cultural con 3 restaurantes y evento space.",
    longDesc: "Este molino hidráulico histórico del antiguo cauce del Turia está abandonado desde 1973. El proyecto recupera la maquinaria original y el edificio para crear un destino gastronómico de referencia: 3 restaurantes de distintos conceptos + espacio para eventos y catas. Muy demandado por su ubicación y singularidad arquitectónica.",
    targetAmount: 1420000,
    raised: 710000,
    tokenPrice: 710,
    totalTokens: 2000,
    expectedYield: 12.4,
    restorationTimeline: "14 meses",
    restorationPlan: [
      "Recuperación de la rueda hidráulica y estructura (meses 1-3)",
      "Rehabilitación integral del edificio y cubiertas (meses 3-8)",
      "Instalaciones y distribución de los locales gastronómicos (meses 7-11)",
      "Acabados y lanzamiento de los primeros operadores (meses 11-14)"
    ],
    cipRules: [
      "Reglas de transferencia con lista blanca de jurisdicciones",
      "Dividendos mensuales una vez operativo (alto flujo de caja)",
      "Posibilidad de recompra parcial por el emisor tras año 4"
    ],
    status: "open",
    investors: 261,
    year: 1764,
  },
  {
    id: "p4",
    slug: "teatro-sevilla",
    title: "Teatro de la Alameda",
    location: "Sevilla, Alameda",
    type: "Lote de propiedades",
    image: "/images/teatro.jpg",
    shortDesc: "Teatro histórico + 2 edificios anexos convertidos en sala de espectáculos + hotel boutique y restaurante.",
    longDesc: "Conjunto patrimonial en desuso desde 2009 que incluye un teatro neoclásico de 1865 y dos edificios de viviendas anexos. El proyecto tokeniza el conjunto completo. Se restaurará el teatro como sala multiusos (conciertos, teatro, eventos corporativos) + hotel de 18 habitaciones + restaurante en la planta baja. Ingresos diversificados.",
    targetAmount: 3650000,
    raised: 1095000,
    tokenPrice: 975,
    totalTokens: 3744,
    expectedYield: 14.1,
    restorationTimeline: "26 meses",
    restorationPlan: [
      "Restauración estructural y cubierta del teatro (meses 1-8)",
      "Rehabilitación de los edificios anexos (meses 6-14)",
      "Instalaciones técnicas, butacas y equipamiento de sala (meses 13-20)",
      "Acabados hotel y restaurante + apertura escalonada (meses 20-26)"
    ],
    cipRules: [
      "Cumplimiento CIP-0113 para activos regulados (seguridad)",
      "Período mínimo de tenencia 18 meses",
      "Derechos de preferencia sobre nuevas emisiones"
    ],
    status: "open",
    investors: 118,
    year: 1865,
  },
  {
    id: "p5",
    slug: "fabrica-vidrio-bilbao",
    title: "Fábrica de Vidrio La Industrial",
    location: "Bilbao, Zorrotzaurre",
    type: "Fábrica abandonada",
    image: "/images/vidrio.jpg",
    shortDesc: "Complejo industrial de vidrio de 1923 transformado en campus de innovación + residencias de artistas y oficinas creativas.",
    longDesc: "La antigua fábrica de vidrio de Zorrotzaurre (1923) es uno de los últimos grandes espacios industriales sin intervenir en Bilbao. El proyecto la convierte en un campus de innovación creativa con 46 estudios + oficinas + residencias temporales para artistas + espacios de exposición. Muy alineado con la transformación del barrio.",
    targetAmount: 1950000,
    raised: 1950000,
    tokenPrice: 975,
    totalTokens: 2000,
    expectedYield: 11.9,
    restorationTimeline: "16 meses",
    restorationPlan: [
      "Limpieza, refuerzo estructural y cubiertas (meses 1-5)",
      "Reapertura de huecos y restauración de chimenea (meses 4-9)",
      "Distribución de estudios y zonas comunes (meses 8-13)",
      "Acabados y comercialización (meses 13-16)"
    ],
    cipRules: [
      "Token con sub-estándar de freeze/seize habilitado para cumplimiento",
      "Lock-up 12 meses + vesting progresivo",
      "Dividendos semestrales + potencial plusvalía en venta parcial futura"
    ],
    status: "funded",
    investors: 203,
    year: 1923,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
