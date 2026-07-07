/* ============================================================
   ⚙️  CONFIGURACIÓN DE ENLACES — EDITA SOLO ESTO
   Si dejas "" se muestra "Próximamente" automáticamente.
   ============================================================ */
export const LINKS = {
  youtube: "https://www.youtube.com/@loquenomeatreviadecir_oficial",
  // Teaser oficial (YouTube)
  teaser: "https://youtu.be/aimIIDEZeLQ",
  // Capítulos de la serie (YouTube)
  chapters: {
    1: "https://youtu.be/UeSA9ok6ctA",
    2: "https://youtu.be/8NB6MLqxvWc",
    3: "https://youtu.be/QfbLywI7SrI",
    4: "https://youtu.be/usHtzKcWkKE",
  } as Record<string, string>,
  // E-book: PDF descargable (Google Drive)
  ebook: "https://drive.google.com/file/d/1o3IaEKoWuMhZ6wg_QSQOXY79e88Gpy1Y/view?usp=sharing",
  // Visor embebido en la página (modo libro)
  ebookViewer: "https://heyzine.com/flip-book/4fcb51b71e.html",
  poster: "", // imagen del póster para descargar
  // Episodios del podcast (YouTube)
  podcast: {
    1: "https://youtu.be/V56pEfLyTKE",
    2: "https://youtu.be/2uzK0V2TkGE",
    3: "https://youtu.be/EciVtTjkgvs",
    4: "https://youtu.be/Gp7KjkRj-iI",
  } as Record<string, string>,
  // Making of: video principal 
  makingof: "https://www.instagram.com/reel/DafpZHTRKmB/?igsh=bXJobjVscnc2cGRk",
  // Clips del rodaje
  cameraTest: "https://www.instagram.com/p/DZ7w35xxPdj/",
  interview: "https://www.instagram.com/reel/Daeg-c5xjYO/",
  instagram: "https://www.instagram.com/loquenomeatreviadecir_oficial?igsh=NGI1c3dpaW8wZzM%3D",
  tiktok: "https://www.tiktok.com/@loquenomeatreviadecir_",
  // Side stories de Olivia (reels de Instagram)
  reels: {
    1: "https://www.instagram.com/reel/DabUi-1xQxV/",
    2: "https://www.instagram.com/reel/DabVxXARP9N/",
  } as Record<string, string>,
} as const;
