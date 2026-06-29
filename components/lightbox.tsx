"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { IMG, type ImgKey } from "@/lib/images";

type Item = { key: ImgKey; caption: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: Item[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndex]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-[#040a0e]/92 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-5 right-5 grid h-12 w-12 place-items-center rounded-full border border-line text-cream transition hover:bg-amber hover:text-ink"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onIndex((index - 1 + items.length) % items.length);
        }}
        aria-label="Anterior"
        className="absolute top-1/2 left-5 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line text-cream transition hover:bg-amber hover:text-ink"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onIndex((index + 1) % items.length);
        }}
        aria-label="Siguiente"
        className="absolute top-1/2 right-5 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line text-cream transition hover:bg-amber hover:text-ink"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[86vh] flex-col items-center gap-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG[item.key].src}
          alt={item.caption}
          className="max-h-[80vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-[0_40px_80px_-30px_#000]"
        />
        <figcaption className="font-display text-center text-foam italic">
          {item.caption}
        </figcaption>
      </figure>
    </div>
  );
}
