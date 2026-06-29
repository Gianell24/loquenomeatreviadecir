"use client";

import Image from "next/image";
import { useState } from "react";
import { Expand } from "lucide-react";
import { IMG, type ImgKey } from "@/lib/images";
import { Lightbox } from "@/components/lightbox";

type Item = { key: ImgKey; caption: string };

export function PhotoGallery({ items }: { items: Item[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 [column-gap:14px] sm:columns-2 lg:columns-3">
        {items.map((it, i) => (
          <button
            key={it.key}
            onClick={() => setIdx(i)}
            className="group relative mb-3.5 block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-line text-left"
          >
            <Image
              src={IMG[it.key]}
              alt={it.caption}
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              style={{ width: "100%", height: "auto" }}
              className="brightness-[0.86] saturate-[0.94] transition duration-700 group-hover:scale-[1.05] group-hover:brightness-100"
            />
            <span className="absolute top-3 right-3 text-cream opacity-0 transition group-hover:opacity-80">
              <Expand className="h-4 w-4" />
            </span>
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/85 to-transparent px-4 pt-10 pb-3 text-sm text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {it.caption}
            </span>
          </button>
        ))}
      </div>
      <Lightbox items={items} index={idx} onClose={() => setIdx(null)} onIndex={setIdx} />
    </>
  );
}
