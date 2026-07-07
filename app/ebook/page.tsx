import type { Metadata } from "next";
import Image from "next/image";
import { Download, Maximize2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ActionButton } from "@/components/action-button";
import { IMG } from "@/lib/images";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = { title: "E-book" };

const QUOTES = [
  "Las palabras perfectas no existen. Existe el coraje de decir las imperfectas a tiempo.",
  "La nostalgia no es el enemigo. Es la prueba de que algo valió la pena.",
];

export default function EbookPage() {
  return (
    <>
      <PageHero
        kicker="El libro"
        title="Un libro para los que sienten mucho y dicen"
        titleEm="poco"
        subtitle="No es el final de la historia, ni una continuación de lo que viste en pantalla. Es otra forma de contarla."
        img="diario-flores"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                <Image
                  src={IMG["ebook-front"]}
                  alt="Portada del e-book “Lo que no me atreví a decir”."
                  fill
                  sizes="(max-width:1024px) 45vw, 28vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 rounded-full bg-sand px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.18em] text-ink uppercase">
                  Portada
                </span>
              </figure>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                <Image
                  src={IMG["ebook-back"]}
                  alt="Contraportada del e-book: un texto sobre las palabras que ensayamos y nunca decimos."
                  fill
                  sizes="(max-width:1024px) 45vw, 28vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 rounded-full border border-line bg-ink/50 px-2.5 py-1 text-[0.6rem] font-bold tracking-[0.18em] text-cream uppercase backdrop-blur">
                  Contraportada
                </span>
              </figure>
            </div>
            <span className="mt-4 inline-flex rounded-full bg-sand/15 px-3 py-1.5 text-[0.7rem] font-bold tracking-[0.2em] text-sand uppercase">
              E-book gratuito
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow">Más allá de la pantalla</p>
            <h2 className="font-display mt-3 text-[clamp(1.7rem,3.6vw,2.6rem)] text-cream">
              Lo que queda vibrando después de que la imagen se apaga
            </h2>
            <p className="mt-5 text-foam">
              Frases nacidas de la propia historia, reflexiones para mirarte por dentro y
              pequeñas guías para cuando la mente no deja de dar vueltas. Toma el silencio de
              quienes sienten demasiado y dicen muy poco, y lo abre.
            </p>
            <ul className="my-7 grid gap-4">
              {QUOTES.map((q) => (
                <li
                  key={q}
                  className="font-display border-l-2 border-tide pl-4 text-sand italic"
                >
                  “{q}”
                </li>
              ))}
            </ul>
            <ActionButton linkKey="ebook">
              <Download className="h-4 w-4" />
              Descargar el e-book (PDF)
            </ActionButton>
          </Reveal>
        </div>
      </Section>

      {/* Visor flipbook (modo libro) */}
      <Section className="pt-0">
        <SectionHeading
          kicker="Modo libro"
          title="Léelo aquí mismo"
          lead="Pasa las páginas como un libro, sin salir de la web."
        />
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-ink-2 sm:aspect-[16/10] lg:aspect-[2/1]">
            <iframe
              src={LINKS.ebookViewer}
              title="E-book — Lo Que No Me Atreví A Decir"
              loading="lazy"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <a
            href={LINKS.ebookViewer}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-flex items-center gap-2 text-sm text-foam transition-colors hover:text-gold"
          >
            <Maximize2 className="h-4 w-4" /> Abrir a pantalla completa
          </a>
        </Reveal>
      </Section>
    </>
  );
}
