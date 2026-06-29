# Cómo editar el sitio (texto, imágenes, enlaces)

Todo el contenido editable está **centralizado** en pocos archivos. No necesitas saber programar:
solo cambiar el texto entre comillas, sin tocar las comas ni las comillas.

## ✍️ TEXTOS → `lib/data.ts`
- **Capítulos de la serie** (título, tema, descripción, cita): bloque `CHAPTERS`.
- **Podcast** (título y descripción de cada episodio): bloque `PODCAST`.
- **Galería** (pies de foto): bloque `GALLERY`.
- **Making of** (pies de foto): bloque `MAKING`.
- **Frases** y **preguntas**: bloques `QUOTES` y `PROMPTS`.
- **Tarjetas del inicio**: bloque `HUB`.
- **Contacto** (e-mail y ubicación): bloque `CONTACT`.

> Los subtítulos de las cabeceras (banners) de cada página están en `app/<sección>/page.tsx`
> (por ejemplo `app/serie/page.tsx`), en la propiedad `subtitle="..."`.

## 🔗 ENLACES → `lib/links.ts`
YouTube, capítulos, podcast, e-book (Drive), visor flipbook, making of (Instagram),
Instagram, TikTok y los reels. Cambia el texto entre comillas por tu enlace.
Si dejas `""`, el botón muestra "Próximamente".

## 🖼️ IMÁGENES → carpeta `assets/img/`
Reemplaza una imagen **usando el mismo nombre de archivo** (por ejemplo `sea.jpg`,
`ebook-front.jpg`, `gal-1.jpg`…). Para añadir nuevas, impórtalas en `lib/images.ts`.

---

# Publicarlo GRATIS y poder editarlo después

⚠️ Importante: este sitio está hecho con **Next.js (React)**. **No** se puede subir a
WordPress para editarlo visualmente. La forma correcta —y gratis— de tenerlo online y
editable es con **GitHub + un hosting estático gratuito** (Cloudflare Pages, Netlify o Vercel).

## Opción recomendada — GitHub + Cloudflare Pages (gratis, edición desde el navegador)
1. Crea una cuenta gratis en **github.com** y un repositorio nuevo (ej. `lqnmad`).
2. Sube el proyecto (una sola vez), desde esta carpeta:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/lqnmad.git
   git push -u origin main
   ```
3. Entra a **pages.cloudflare.com** (o **netlify.com** / **vercel.com**) → "Conectar con GitHub"
   → elige el repo. Configura:
   - **Framework / preset:** Next.js (Static HTML Export) — o "None".
   - **Build command:** `npm run build`
   - **Output / publish directory:** `out`
4. Te da una URL pública gratis. ✅

### Para editar después (sin programar)
- Entra a tu repo en GitHub → abre el archivo (`lib/data.ts`, `lib/links.ts`, etc.) →
  botón del **lápiz** ✏️ → cambia el texto → **Commit changes**.
- En segundos, el sitio se **reconstruye y actualiza solo**. Lo mismo para reemplazar una
  imagen (súbela con el mismo nombre en `assets/img/`).

## Opción sencilla sin GitHub (sin edición automática)
1. Edita los archivos en tu PC.
2. `npm run build` (genera la carpeta `out`).
3. Arrastra `out` a **app.netlify.com/drop**. Para volver a editar, repites estos 3 pasos.
