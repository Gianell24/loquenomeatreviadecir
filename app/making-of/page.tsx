import type { Metadata } from "next";
import { Play } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { MakingOf } from "@/components/making-of";
import { ActionButton } from "@/components/action-button";
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

        <div className="mt-12">
          <p className="eyebrow mb-5">Más del rodaje</p>
          <div className="flex flex-wrap gap-3">
            <ActionButton linkKey="interview" variant="outline">
              <Play className="h-4 w-4 fill-current" />
              Entrevista al actor
            </ActionButton>
            <ActionButton linkKey="cameraTest" variant="outline">
              <Play className="h-4 w-4 fill-current" />
              Prueba de cámara
            </ActionButton>
          </div>
        </div>
      </Section>
    </>
  );
}
