import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ActionButton } from "@/components/action-button";
import { IMG } from "@/lib/images";
import { PODCAST } from "@/lib/data";

export const metadata: Metadata = { title: "Podcast" };

export default function PodcastPage() {
  return (
    <>
      <PageHero
        kicker="El podcast"
        title="Las notas de voz que rodean la"
        titleEm="historia"
        subtitle="Cada episodio es una nota de voz de quienes acompañan a Leandro y Olivia: un amigo, una hermana, una madre… y los propios protagonistas."
        img="lucky-cat"
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {PODCAST.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-tide/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-tide/20">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={IMG[p.img]}
                    alt={`Portada del episodio ${p.n}: ${p.title}`}
                    fill
                    sizes="(max-width:640px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="font-display absolute top-3 left-3 rounded-full bg-ink/55 px-2.5 py-1 text-sm text-gold italic backdrop-blur">
                    {p.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl text-cream">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-foam">{p.desc}</p>
                  <div className="mt-auto pt-2">
                    <ActionButton
                      linkKey={`pod:${p.n}`}
                      variant="outline"
                      className="h-10 gap-2 px-4 text-sm"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Escuchar
                    </ActionButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
