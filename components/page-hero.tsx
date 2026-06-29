import Image from "next/image";
import { IMG, type ImgKey } from "@/lib/images";
import { TextReveal } from "@/components/text-reveal";

export function PageHero({
  kicker,
  title,
  titleEm,
  subtitle,
  img,
}: {
  kicker: string;
  title: string;
  titleEm?: string;
  subtitle?: string;
  img: ImgKey;
}) {
  return (
    <header className="relative flex min-h-[clamp(360px,52vh,560px)] items-end overflow-hidden">
      <Image
        src={IMG[img]}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover brightness-[0.6] saturate-[0.9]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-[clamp(110px,16vh,150px)] pb-[clamp(28px,5vh,54px)] sm:px-8">
        <p className="eyebrow mb-4">{kicker}</p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,4.8rem)] leading-[0.98] text-cream">
          <TextReveal>
            {title}
            {titleEm && <> <em className="text-gold">{titleEm}</em></>}
          </TextReveal>
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-[52ch] text-[clamp(1.02rem,1.6vw,1.25rem)] text-foam">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
