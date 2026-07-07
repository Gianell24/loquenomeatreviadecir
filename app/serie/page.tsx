import type { Metadata } from "next";
import { Play } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ActionButton } from "@/components/action-button";
import { ParallaxImage } from "@/components/parallax-image";
import { Poster } from "@/components/poster";
import { SectionHeading } from "@/components/section-heading";
import { IMG } from "@/lib/images";
import { CHAPTERS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Serie" };

export default function SeriePage() {
  return (
    <>
      <PageHero
        kicker="La serie web"
        title="Cuatro capítulos, una sola"
        titleEm="confesión"
        subtitle="Cuatro capítulos que se estrenan en YouTube. La historia de Leandro y Olivia, entre recuerdos y terapia."
        img="olivia-cat"
      />

      {/* Póster + sinopsis comercial general */}
      <Section className="pb-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Poster />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">Sinopsis</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] text-cream">
              Un amor que no se dijo a tiempo
            </h2>
            <p className="mt-5 max-w-[50ch] text-foam">
              Tras perder el vínculo con Olivia, Leandro queda atrapado entre los recuerdos
              de un amor que nunca se atrevió a expresar por completo. Mientras la terapia lo
              enfrenta a sus miedos e inseguridades, comprende que el silencio también puede
              romper aquello que más se ama.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ActionButton linkKey="teaser">
                <Play className="h-4 w-4 fill-current" />
                Ver el teaser
              </ActionButton>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Los episodios"
          title="Cuatro capítulos en YouTube"
          lead="Cada episodio, con su propia sinopsis comercial."
        />
        <div className="flex flex-col gap-5 md:gap-7">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n}>
              <article className="grid overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-tide/15 to-ink/20 md:grid-cols-2">
                <div
                  className={cn(
                    "relative min-h-[240px] md:min-h-[360px]",
                    i % 2 === 1 && "md:order-2",
                  )}
                >
                  <ParallaxImage
                    src={IMG[c.img]}
                    alt={`${c.title} — ${c.theme}`}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover brightness-[0.86] saturate-[0.95]"
                  />
                  <span className="font-display absolute top-4 left-4 rounded-full border border-line bg-ink/40 px-3 py-1 text-sm text-cream italic backdrop-blur">
                    Capítulo {c.roman}
                  </span>
                  <div className="absolute bottom-4 left-4">
                    <ActionButton
                      linkKey={`chapter:${c.n}`}
                      variant="outline"
                      className="gap-2 bg-ink/55 pl-2 backdrop-blur"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-amber text-ink">
                        <Play className="h-3.5 w-3.5 fill-current" />
                      </span>
                      Ver capítulo
                    </ActionButton>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-7 md:p-10">
                  <span className="text-[0.72rem] font-bold tracking-[0.24em] text-sea uppercase">
                    {c.theme}
                  </span>
                  <h3 className="font-display text-[clamp(1.5rem,3vw,2.1rem)] text-cream">
                    {c.title}
                    {c.titleEm && <> <em className="text-gold">{c.titleEm}</em></>}
                  </h3>
                  <p className="text-foam">{c.desc}</p>
                  <p className="font-display mt-auto border-t border-line/60 pt-4 text-[1.02rem] text-sand italic">
                    “{c.quote}”
                    <cite className="mt-2 block font-sans text-xs tracking-[0.14em] text-mist uppercase not-italic">
                      {c.cite}
                    </cite>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Personajes */}
      <Section className="pt-0">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Él</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.6rem)] text-cream">
              Leandro
            </h2>
            <p className="mt-4 text-[clamp(1.05rem,1.6vw,1.3rem)] text-foam">
              Veinticinco años, las palabras siempre listas y la garganta siempre cerrada.
              Confunde el miedo con la prudencia hasta que la terapia le enseña a ponerle
              nombre al ruido que lo tenía paralizado.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">Ella</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.6rem)] text-cream">
              Olivia
            </h2>
            <p className="mt-4 text-[clamp(1.05rem,1.6vw,1.3rem)] text-foam">
              La que pregunta, insiste y ofrece su apoyo. La que colecciona el significado
              de las flores. Y la que, cuando entiende que se quedará esperando una
              sinceridad que no llega, elige priorizarse. Alejarse no siempre es rendirse.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
