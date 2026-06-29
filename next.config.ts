import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera un sitio 100% estático (HTML/CSS/JS) en la carpeta /out
  // Subible a cualquier hosting: Netlify, Vercel, GitHub Pages, FTP, etc.
  output: "export",
  // Cada ruta se emite como carpeta/index.html (/serie -> serie/index.html)
  trailingSlash: true,
  // El export estático no usa el optimizador de imágenes de Next
  images: { unoptimized: true },
};

export default nextConfig;
