import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { MakingOf } from "@/components/making-of";
import { MAKING, MAKING_FEATURE } from "@/lib/data";

export const metadata: Metadata = { title: "Making of" };

export default function MakingOfPage() {
  return (
    <>
      <PageHero
        kicker="Detrás de cámaras"
        title="Cómo se construyó la"
        titleEm="historia"
        subtitle="Del Malecón de Miraflores a los interiores donde transcurre la historia: un vistazo al rodaje, escena por escena."
        img="makingof-cover"
      />
      <Section>
        <MakingOf feature={MAKING_FEATURE} items={MAKING} />
      </Section>
    </>
  );
}
