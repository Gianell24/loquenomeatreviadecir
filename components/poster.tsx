import Image from "next/image";
import { IMG } from "@/lib/images";

export function Poster() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-xl border border-line shadow-[0_50px_90px_-40px_#000]">
      <Image
        src={IMG["poster-oficial"]}
        alt="Póster oficial de “Lo que no me atreví a decir” — Risen Studios."
        fill
        sizes="(max-width:1024px) 90vw, 440px"
        className="object-cover"
      />
    </div>
  );
}
