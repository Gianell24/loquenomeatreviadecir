import type { ImgKey } from "@/lib/images";

/* ---- navegación / páginas ---- */
export const NAV: { href: string; label: string }[] = [
  { href: "/serie", label: "Serie" },
  { href: "/ebook", label: "E-book" },
  { href: "/podcast", label: "Podcast" },
  { href: "/galeria", label: "Galería" },
  { href: "/making-of", label: "Making of" },
  { href: "/frases", label: "Frases" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/contacto", label: "Contacto" },
];

/* ---- contacto ---- */
export const CONTACT = {
  email: "risenstudios2026@gmail.com",
  location: "Lima, Perú",
};

/* ---- capítulos de la serie ---- */
export type Chapter = {
  n: number;
  roman: string;
  theme: string;
  title: string;
  titleEm?: string;
  desc: string;
  quote: string;
  cite: string;
  img: ImgKey;
};

export const CHAPTERS: Chapter[] = [
  {
    n: 1, roman: "I", theme: "El amor y lo que guardamos", title: "Recuerdos",
    desc: "Leandro, en su vida actual, recuerda constantemente los momentos junto a Olivia, que afectan su desarrollo y lo mantienen atrapado en el pasado.",
    quote: "Es para ti. Te traerá mucha suerte.", cite: "Olivia", img: "ep-cover-1",
  },
  {
    n: 2, roman: "II", theme: "Ansiedad y sobrepensamiento", title: "Tiempo",
    desc: "Leandro asiste a una cita con la psicóloga, que le ayuda a entender qué representaba Olivia en su vida y qué significa ahora.",
    quote: "No sé por qué seguí esperando que dijeras lo que ya me estabas demostrando con acciones.", cite: "Leandro", img: "ep-cover-2",
  },
  {
    n: 3, roman: "III", theme: "Autoestima y miedo", title: "Punto de quiebre",
    desc: "Se descubren las razones por las que Leandro y Olivia se distanciaron. Él cree que debe dejar las cosas como están, pero al mismo tiempo cree que puede hacer algo más.",
    quote: "No un cobarde como yo, quien por miedo a perderla no se atrevió a confesarle su amor.", cite: "Leandro", img: "ep-cover-3",
  },
  {
    n: 4, roman: "IV", theme: "Introspección y nuevos comienzos", title: "Lirios", titleEm: "blancos",
    desc: "Leandro escribe una carta donde están todas las cosas que siempre le quiso decir a Olivia. Está decidido a buscarla para hacer las cosas bien.",
    quote: "Sé que las promesas no curan y el amor se sostiene con los hechos.", cite: "Leandro", img: "ep-cover-4",
  },
];

/* ---- podcast (notas de voz de quienes rodean la historia) ---- */
export const PODCAST: { n: number; label: string; title: string; desc: string; img: ImgKey }[] = [
  {
    n: 1, label: "Ep. 01", title: "La conversación pendiente", img: "pod-cover-1",
    desc: "El mejor amigo de Leandro intenta convencerlo de buscar ayuda profesional. Una conversación sincera que revela las primeras señales de su conflicto emocional.",
  },
  {
    n: 2, label: "Ep. 02", title: "¿Cómo estás, Olivia?", img: "pod-cover-2",
    desc: "La hermana de Olivia le envía un mensaje de voz para saber cómo se siente. Un episodio que muestra el cariño, la preocupación y los lazos familiares que la rodean.",
  },
  {
    n: 3, label: "Ep. 03", title: "Lo que una madre percibe", img: "pod-cover-3",
    desc: "La madre de Leandro comparte sus recuerdos y preocupaciones sobre los cambios que notó en su hijo, mas no obtiene respuesta alguna.",
  },
  {
    n: 4, label: "Ep. 04", title: "Para nuestro futuro", img: "pod-cover-4",
    desc: "Olivia y Leandro dejan grabados sus sueños y promesas en una cápsula de tiempo. Un episodio que conecta sus recuerdos con las esperanzas que tenían para el futuro.",
  },
];

/* ---- galería (carpeta Galería) ---- */
export const GALLERY: { key: ImgKey; caption: string }[] = [
  { key: "gal-1", caption: "“Es para ti, te traerá mucha suerte.”" },
  { key: "gal-2", caption: "Lirios blancos · nuevos comienzos" },
  { key: "gal-3", caption: "El gato de la suerte · el primer regalo" },
  { key: "gal-4", caption: "El diario de flores de Olivia" },
  { key: "gal-5", caption: "La carta que por fin se escribió" },
  { key: "gal-6", caption: "De Leandro, para Olivia" },
  { key: "gal-7", caption: "Leandro · enfrentar en lugar de huir" },
];

/* ---- making of (fotos reales de rodaje) ---- */
export const MAKING_FEATURE: ImgKey = "mof-1";
export const MAKING: { key: ImgKey; caption: string }[] = [
  { key: "mof-2", caption: "En pleno rodaje" },
  { key: "mof-3", caption: "Preparando la siguiente toma" },
  { key: "mof-4", caption: "El elenco entre escenas" },
  { key: "mof-5", caption: "Iluminando la escena" },
  { key: "mof-6", caption: "Revisando el material" },
  { key: "mof-7", caption: "El set de la historia" },
  { key: "mof-8", caption: "Detrás de cámaras" },
  { key: "mof-9", caption: "Dirigiendo la escena" },
];

/* ---- frases / introspección ---- */
export const QUOTES: { text: string; cite: string }[] = [
  { text: "Tengo las palabras listas… pero me quedo aquí, congelado.", cite: "Leandro" },
  { text: "Esta maldita indecisión y mi mente que no dejaba de sobrepensar todo, no me permitieron pensar con claridad.", cite: "Leandro" },
  { text: "Por primera vez en mucho tiempo no estoy huyendo, estoy enfrentándolo.", cite: "Leandro" },
  { text: "Quererte bien también es saber cuándo dejar de esperar a alguien que no se atreve.", cite: "Del libro" },
  { text: "Alejarse no siempre es rendirse: a veces es el acto de amor propio más difícil que existe.", cite: "Sobre Olivia" },
  { text: "Las palabras perfectas no existen. Existe el coraje de decir las imperfectas a tiempo.", cite: "Una carta abierta" },
];

export const PROMPTS = [
  "¿Qué objeto guardas que no podrías explicarle a nadie por qué te importa tanto?",
  "¿Cuántas conversaciones has tenido completas dentro de tu cabeza, sin que la otra persona se enterara jamás?",
  "Si hoy escribieras tu propia carta —esa que nunca enviaste—, ¿a quién sería?",
];

/* ---- side stories de Olivia ---- */
export const REELS: { badge: string; title: string; sub: string; img: ImgKey; linkKey: string }[] = [
  { badge: "Side story 01", title: "Te extraño", sub: "Olivia · 0:55", img: "olivia-cat-2", linkKey: "reel:1" },
  { badge: "Side story 02", title: "Un nuevo comienzo", sub: "Olivia · 0:55", img: "sea", linkKey: "reel:2" },
];

/* ---- hub de la home ---- */
export const HUB: { href: string; kicker: string; title: string; img: ImgKey }[] = [
  { href: "/serie", kicker: "4 capítulos · póster", title: "La serie", img: "leandro-lilies" },
  { href: "/ebook", kicker: "Gratuito", title: "E-book", img: "ebook-front" },
  { href: "/podcast", kicker: "4 notas de voz", title: "Podcast", img: "lucky-cat" },
  { href: "/galeria", kicker: "Los objetos", title: "Galería", img: "letter-card" },
  { href: "/making-of", kicker: "Detrás de cámaras", title: "Making of", img: "makingof-cover" },
  { href: "/frases", kicker: "Introspección", title: "Frases", img: "lilies-bouquet" },
  { href: "/comunidad", kicker: "Redes", title: "Comunidad", img: "comunidad-cover" },
];
