# Lo Que No Me Atreví A Decir — Sitio (React / Next.js)

Sitio **multipágina** de la serie web transmedia, con atmósfera de mar al atardecer
(estilo *Aftersun*), animaciones elegantes y diseño responsive.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui ·
framer-motion · lucide-react.

## ▶️ Cómo ejecutarlo
Node.js ya está instalado en esta máquina (`C:\Program Files\nodejs`).

```bash
cd "D:\Documentos\CLAUDE CODE CARP\lqnmad-app"
npm install      # (solo la primera vez; ya está hecho)
npm run dev      # desarrollo → http://localhost:3000
npm run build    # build de producción (todas las páginas se generan estáticas)
npm start        # sirve el build de producción
```

## 🔗 Poner tus enlaces reales (lo más importante)
Edita **`lib/links.ts`**. Si dejas `""`, el botón muestra **“Próximamente”** automáticamente.
- ✅ Ya conectados: **YouTube**, **Instagram**, **TikTok**.
- Por completar: cada **capítulo** (vacío = abre tu canal), **podcast** (Spotify por episodio),
  **e-book** (PDF), **póster**, **making of** (video) y los 2 **reels** de Olivia.

```ts
ebook: "/ebook.pdf",   // pon el PDF en /public y apunta aquí
chapters: { 1: "VIDEO_ID", 2: "", 3: "", 4: "" },
podcast: { 1: "https://open.spotify.com/...", ... },
```

## ✍️ Editar textos e imágenes
- **Textos / datos** (capítulos, podcast, galería, frases, side stories): `lib/data.ts`.
- **Imágenes**: `assets/img/` (se importan en `lib/images.ts`; Next optimiza tamaño + blur).
  Para reemplazar una, usa el mismo nombre de archivo.

## 🗂️ Estructura
```
app/                 rutas (cada sección = una página/pestaña)
  page.tsx           Inicio (hero animado + hub)
  serie/ poster/ ebook/ podcast/ galeria/ making-of/ frases/ comunidad/
components/          nav, footer, hero, galería, lightbox, reels, etc.
  ui/                shadcn (button, sonner) + shape-landing-hero.tsx (componente integrado)
lib/                 links.ts · data.ts · images.ts · open-link.ts · utils.ts
assets/img/          fotos optimizadas
```

## 🧩 Componente integrado
`components/ui/shape-landing-hero.tsx` es el componente `HeroGeometric` solicitado
(figuras elegantes flotantes con framer-motion), **adaptado a la paleta de mar**
(teal + ámbar dorado) y con soporte de imagen de fondo, subtítulo y botones. Se usa en la home.

## 🚀 Publicar
`npm run build` genera un sitio **100% estático**. Despliega conectando el repositorio a
**Vercel** (cero configuración) o subiendo el resultado a **Netlify**.

> El sitio anterior en HTML/CSS/JS sigue en `../lo-que-no-me-atrevi/` como referencia.
