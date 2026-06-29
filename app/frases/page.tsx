import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Quotes } from "@/components/quotes";
import { Journal } from "@/components/journal";
import { CareNote } from "@/components/care-note";
import { PROMPTS } from "@/lib/data";

export const metadata: Metadata = { title: "Frases" };

export default function FrasesPage() {
  return (
    <>
      <PageHero
        kicker="Frases & pensamientos"
        title="Lo que sí te atreverás a"
        titleEm="decir"
        subtitle="Frases de la historia y preguntas para mirarte por dentro."
        img="lilies-bouquet"
      />

      <Section>
        <Quotes />

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {PROMPTS.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 0.06}>
              <div className="h-full rounded-2xl border border-line bg-tide/10 p-6 transition hover:bg-tide/20">
                <span className="font-display text-3xl text-gold italic">“</span>
                <p className="mt-2 text-foam">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Journal />
        </div>

        <div className="mt-16">
          <CareNote />
        </div>
      </Section>
    </>
  );
}
