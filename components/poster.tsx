import Image from "next/image";
import { IMG, type ImgKey } from "@/lib/images";

const STRIP: ImgKey[] = ["olivia-cat-2", "lucky-cat", "diario-flores", "letter-open"];

export function Poster() {
  return (
    <div className="relative mx-auto aspect-[2/3] w-full max-w-[420px] overflow-hidden rounded-xl border border-line shadow-[0_50px_90px_-40px_#000]">
      <Image
        src={IMG["leandro-lilies"]}
        alt="Póster de la serie: Leandro al atardecer sosteniendo un ramo de lirios blancos."
        fill
        sizes="420px"
        className="object-cover brightness-[0.84] contrast-[1.03] saturate-[0.95]"
      />
      <div className="absolute top-[10%] right-0 left-0 flex h-[54px] gap-[3px] opacity-90">
        {STRIP.map((k) => (
          <div key={k} className="relative flex-1 overflow-hidden">
            <Image
              src={IMG[k]}
              alt=""
              fill
              sizes="110px"
              className="object-cover brightness-90 saturate-[0.9]"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/85" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-center">
        <p className="text-[0.62rem] tracking-[0.34em] text-foam/85 uppercase">
          Una serie web · 2026
        </p>
        <p className="font-display mt-1 text-[clamp(2rem,5vw,2.9rem)] leading-[0.96] font-light text-white">
          lo que no me
          <br />
          <em className="text-gold">atreví</em> a decir
        </p>
      </div>
    </div>
  );
}
