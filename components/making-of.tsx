"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { IMG, type ImgKey } from "@/lib/images";
import { Lightbox } from "@/components/lightbox";
import { openLink } from "@/lib/open-link";

type Item = { key: ImgKey; caption: string };

export function MakingOf({ feature, items }: { feature: ImgKey; items: Item[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-4">
        <button
          onClick={() => openLink("makingof")}
          aria-label="Ver el video del making of"
          className="group relative block aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl border border-line text-left sm:aspect-video"
        >
          <Image
            src={IMG[feature]}
            alt="El equipo rodando la escena de Leandro frente al mar de Miraflores."
            fill
            priority
            sizes="(max-width:1024px) 100vw, 1100px"
            className="object-cover brightness-[0.68] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.82]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />
          <span className="absolute bottom-14 left-6 z-10 inline-flex items-center gap-3 font-semibold text-cream">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-amber text-ink shadow-[0_10px_30px_-10px_rgba(217,155,99,0.7)] transition group-hover:bg-gold">
              <Play className="h-5 w-5 fill-current" />
            </span>
            Ver el making of
          </span>
          <span className="absolute bottom-5 left-6 z-10 text-xs tracking-[0.16em] text-mist uppercase">
            Locaciones · Costa Verde, Miraflores
          </span>
        </button>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {items.map((it, i) => (
            <button
              key={it.key}
              onClick={() => setIdx(i)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-line"
            >
              <Image
                src={IMG[it.key]}
                alt={it.caption}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover brightness-[0.78] transition duration-700 group-hover:scale-[1.07] group-hover:brightness-95"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-3 pt-8 pb-2 text-[0.72rem] text-cream opacity-0 transition group-hover:opacity-100">
                {it.caption}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Lightbox items={items} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </>
  );
}
