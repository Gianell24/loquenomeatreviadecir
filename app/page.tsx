import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CtaLink } from "@/components/cta-link";
import { CareNote } from "@/components/care-note";
import { IMG } from "@/lib/images";
import { HUB } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroGeometric
        bgImageKey="sea"
        badge="Serie web transmedia · 2026"
        title1="lo que no me atreví"
        title2="a decir"
        subtitle="Una historia sobre dos personas que se quisieron y no supieron decírselo a tiempo."
        actions={
          <>
            <CtaLink href="/serie">Ver los capítulos</CtaLink>
            <CtaLink href="/ebook" variant="ghost">Leer el e-book</CtaLink>
          </>
        }
      />

      {/* Intro / logline */}
      <Section className="text-center">
        <Reveal>
          <p className="eyebrow eyebrow--center">El eco de una historia</p>
          <p className="font-display mx-auto mt-6 max-w-[24ch] text-[clamp(1.6rem,4.4vw,3rem)] leading-snug font-light text-cream">
            Se dice que el amor es la forma más pura del lenguaje humano. Pero, contando con
            tantas formas de comunicarnos,{" "}
            <em className="text-gold">¿por qué muchas veces elegimos no hacerlo?</em>
          </p>
          <p className="mx-auto mt-8 max-w-[62ch] text-foam">
            “Lo que no me atreví a decir” es una experiencia transmedia: una serie web, un
            libro, un podcast y un espacio para mirarte por dentro. Toma el silencio de
            quienes sienten demasiado y dicen muy poco, y lo abre. Porque ese silencio no es
            solo de Leandro y Olivia.
          </p>
          <svg
            className="mx-auto mt-10 h-[18px] w-[120px] opacity-65"
            viewBox="0 0 120 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 9c10 0 10-6 20-6s10 6 20 6 10-6 20-6 10 6 20 6 10-6 20-6 10 6 18 6"
              stroke="#d99b63"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </Reveal>
      </Section>

      {/* Hub */}
      <Section>
        <SectionHeading
          kicker="La experiencia"
          title="Explora cada pieza de la historia"
          lead="Una sola historia contada en muchos formatos. Entra por donde quieras."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUB.map((h, i) => (
            <Reveal key={h.href} delay={(i % 4) * 0.06}>
              <Link
                href={h.href}
                className="group relative flex min-h-[clamp(220px,26vw,280px)] items-end overflow-hidden rounded-2xl border border-line transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_40px_80px_-50px_#000]"
              >
                <Image
                  src={IMG[h.img]}
                  alt=""
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover brightness-[0.6] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                <div className="relative z-10 flex w-full items-end justify-between gap-3 p-5">
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-gold uppercase">
                      {h.kicker}
                    </p>
                    <h3 className="font-display mt-1 text-[clamp(1.3rem,2.4vw,1.7rem)] text-cream">
                      {h.title}
                    </h3>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-cream transition group-hover:-rotate-45 group-hover:border-amber group-hover:bg-amber group-hover:text-ink">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cierre */}
      <Section className="text-center">
        <Reveal>
          <p className="eyebrow eyebrow--center">Para ti</p>
          <p className="font-display mx-auto mt-6 max-w-[20ch] text-[clamp(1.9rem,5.2vw,3.6rem)] leading-tight font-light text-cream italic">
            No esperes a tener todo resuelto para empezar a decir lo que sientes.{" "}
            <em className="text-gold">
              Di lo que no te atreviste a decir. Quizás hoy sea el día.
            </em>
          </p>
          <p className="mx-auto mt-6 max-w-[48ch] text-foam">
            El final feliz no es que la otra persona vuelva, sino que tú dejes de
            abandonarte.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaLink href="/serie">Comenzar por el Capítulo I</CtaLink>
            <CtaLink href="/ebook" variant="ghost">Descargar el e-book</CtaLink>
          </div>
        </Reveal>
        <div className="mt-16">
          <CareNote />
        </div>
      </Section>
    </>
  );
}
