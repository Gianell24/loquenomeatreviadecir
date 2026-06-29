"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { IMG } from "@/lib/images";
import { REELS } from "@/lib/data";
import { openLink } from "@/lib/open-link";

export function Reels() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,248px))] justify-start gap-4">
      {REELS.map((r) => (
        <button
          key={r.title}
          onClick={() => openLink(r.linkKey)}
          className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-line text-left"
        >
          <Image
            src={IMG[r.img]}
            alt={r.title}
            fill
            sizes="248px"
            className="object-cover brightness-[0.6] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:brightness-[0.78]"
          />
          <span className="absolute top-3 left-3 rounded-full bg-gold px-2.5 py-1 text-[0.64rem] font-bold tracking-[0.18em] text-ink uppercase">
            {r.badge}
          </span>
          <span className="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-ink/50 backdrop-blur transition group-hover:border-amber group-hover:bg-amber">
            <Play className="h-5 w-5 fill-current text-cream transition group-hover:text-ink" />
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-10">
            <span className="block font-semibold text-white">{r.title}</span>
            <span className="block text-sm text-foam">{r.sub}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
