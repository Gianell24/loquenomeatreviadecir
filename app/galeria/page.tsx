import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { PhotoGallery } from "@/components/photo-gallery";
import { GALLERY } from "@/lib/data";

export const metadata: Metadata = { title: "Galería" };

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        kicker="Galería"
        title="Los elementos que dan vida a la"
        titleEm="historia"
        subtitle="Cada imagen guarda un recuerdo. Toca para abrirlas."
        img="letter-card"
      />
      <Section>
        <PhotoGallery items={GALLERY} />
      </Section>
    </>
  );
}
