/* ============================================================
   ⚙️  CONFIGURACIÓN DE ENLACES — EDITA SOLO ESTO
   Si dejas "" se muestra "Próximamente" automáticamente.
   ============================================================ */
export const LINKS = {
  youtube: "https://www.youtube.com/@loquenomeatreviadecir_oficial",
  // ID o URL de cada capítulo (vacío = abre el canal de YouTube)
  chapters: { 1: "", 2: "", 3: "", 4: "" } as Record<string, string>,
  // E-book: PDF descargable (Google Drive)
  ebook: "https://drive.google.com/file/d/1rz6xsPKeVCNU2-J_4tZ-68LRLRC9xe-V/view?usp=drive_link",
  // Visor embebido en la página (modo libro)
  ebookViewer: "https://heyzine.com/flip-book/e1e4bdb309.html",
  poster: "", // imagen del póster para descargar
  // Episodios del podcast (YouTube)
  podcast: {
    1: "https://youtu.be/gAMiL35tTJU",
    2: "https://youtu.be/b4scbFpmFiw",
    3: "https://youtu.be/U7_lPMoZu5w",
    4: "https://youtu.be/wRXPJl3nZdE",
  } as Record<string, string>,
  // Avance del making of (reel de Instagram)
  makingof: "https://www.instagram.com/reel/DZpzia2R2qY/",
  instagram: "https://www.instagram.com/loquenomeatreviadecir_oficial?igsh=NGI1c3dpaW8wZzM=",
  tiktok: "https://www.tiktok.com/@loquenomeatreviadecir_",
  reels: { 1: "", 2: "" } as Record<string, string>, // 2 side stories de Olivia
} as const;
