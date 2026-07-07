import Link from "next/link";
import { LINKS } from "@/lib/links";

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "La obra",
    links: [
      { href: "/serie", label: "Serie web" },
      { href: "/ebook", label: "E-book" },
      { href: "/podcast", label: "Podcast" },
    ],
  },
  {
    title: "Explora",
    links: [
      { href: "/galeria", label: "Galería" },
      { href: "/making-of", label: "Making of" },
      { href: "/frases", label: "Frases" },
      { href: "/comunidad", label: "Comunidad" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
];

const SOCIAL = [
  { href: LINKS.instagram, label: "Instagram" },
  { href: LINKS.tiktok, label: "TikTok" },
  { href: LINKS.youtube, label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/70 py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-xs">
            <p className="font-display text-2xl text-cream">
              Lo que no me <span className="text-gold">atreví</span> a decir
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Una experiencia transmedia sobre el amor, la introspección y el coraje de decir
              lo que sentimos a tiempo.
            </p>
          </div>

          <nav className="flex flex-wrap gap-12" aria-label="Pie de página">
            {COLS.map((col) => (
              <div key={col.title}>
                <h5 className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist uppercase">
                  {col.title}
                </h5>
                {col.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="link-underline block w-fit py-1 text-sm text-foam transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
            <div>
              <h5 className="mb-3 text-xs font-semibold tracking-[0.18em] text-mist uppercase">
                Síguenos
              </h5>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline block w-fit py-1 text-sm text-foam transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-line/70 pt-6 text-xs text-mist">
          <span>© 2026 Lo que no me atreví a decir. Serie web transmedia.</span>
          <span>Risen Studios</span>
        </div>
      </div>
    </footer>
  );
}
