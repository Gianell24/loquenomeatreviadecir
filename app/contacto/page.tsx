import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <>
      <PageHero
        kicker="Contacto"
        title="Hablemos de tu"
        titleEm="historia"
        subtitle="¿Una idea, una colaboración o una pregunta? Escríbenos."
        img="comunidad-cover"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Risen Studios</p>
            <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.6rem)] text-cream">
              Estamos a un mensaje de distancia
            </h2>
            <p className="mt-4 max-w-[42ch] text-foam">
              Cuéntanos qué tienes en mente. Respondemos a todos los mensajes.
            </p>
            <div className="mt-8 grid gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-tide/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-tide/20"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5">
                  <Mail className="h-5 w-5 text-gold" />
                </span>
                <span>
                  <b className="text-cream">E-mail</b>
                  <span className="block text-sm break-all text-mist">{CONTACT.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-tide/10 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5">
                  <MapPin className="h-5 w-5 text-gold" />
                </span>
                <span>
                  <b className="text-cream">Ubicación</b>
                  <span className="block text-sm text-mist">{CONTACT.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
