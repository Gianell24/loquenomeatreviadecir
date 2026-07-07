import { toast } from "sonner";
import { LINKS } from "@/lib/links";

function ytURL(v: string) {
  if (!v) return "";
  return /^https?:/.test(v) ? v : `https://www.youtube.com/watch?v=${v}`;
}

const LABELS: Record<string, string> = {
  ebook: "E-book",
  poster: "Póster",
  makingof: "Making of",
  teaser: "Teaser",
  cameraTest: "Prueba de cámara",
  interview: "Entrevista al actor",
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
};

/** Resuelve la URL real de una clave de enlace ("ebook", "chapter:1", "pod:2"...). */
export function resolveLink(key: string): string {
  switch (key) {
    case "instagram": return LINKS.instagram;
    case "tiktok": return LINKS.tiktok;
    case "youtube": return LINKS.youtube;
    case "ebook": return LINKS.ebook;
    case "poster": return LINKS.poster;
    case "makingof": return LINKS.makingof;
    case "teaser": return LINKS.teaser;
    case "cameraTest": return LINKS.cameraTest;
    case "interview": return LINKS.interview;
  }
  const [k, n] = key.split(":");
  if (k === "chapter") return ytURL(LINKS.chapters[n] ?? "") || LINKS.youtube;
  if (k === "pod") return LINKS.podcast[n] ?? "";
  if (k === "reel") return LINKS.reels[n] ?? "";
  return "";
}

/** Abre el enlace en una pestaña nueva, o muestra "Próximamente" si aún no existe. */
export function openLink(key: string) {
  const url = resolveLink(key);
  if (url) {
    window.open(url, "_blank", "noopener");
    return;
  }
  const [k, n] = key.split(":");
  const label =
    LABELS[key] ??
    (k === "pod" ? `Episodio ${n}` : k === "chapter" ? `Capítulo ${n}` : "Side story");
  toast(`${label} · próximamente`);
}
