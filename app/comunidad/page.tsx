import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Reels } from "@/components/reels";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = { title: "Comunidad" };

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2 1.6 3.4 3.5 3.6v2.5c-1.3.1-2.5-.3-3.5-1v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.6z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIALS = [
  {
    href: LINKS.instagram,
    label: "Instagram",
    sub: "Fotos, frases y detrás de cámaras",
    Icon: InstagramIcon,
  },
  {
    href: LINKS.tiktok,
    label: "TikTok",
    sub: "Reels, side stories y momentos",
    Icon: TikTokIcon,
  },
];

export default function ComunidadPage() {
  return (
    <>
      <PageHero
        kicker="Comunidad"
        title="Sigue la historia más allá de la"
        titleEm="pantalla"
        subtitle="Contenido extra, detrás de cámaras y dos side stories desde la mirada de Olivia."
        img="comunidad-cover"
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {SOCIALS.map(({ href, label, sub, Icon }, i) => (
            <Reveal key={label} delay={(i % 2) * 0.06}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-tide/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-tide/20"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5">
                  <Icon className="h-6 w-6 text-gold" />
                </span>
                <span className="flex-1">
                  <b className="text-cream">{label}</b>
                  <span className="block text-sm text-mist">{sub}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-mist transition group-hover:translate-x-0.5 group-hover:text-gold" />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow mb-6">Side stories · Olivia, la otra orilla</p>
          <Reels />
        </div>
      </Section>
    </>
  );
}
