import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/text-reveal";

export function SectionHeading({
  kicker,
  title,
  lead,
  center = false,
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        center ? "text-center" : "flex flex-wrap items-end justify-between gap-6",
      )}
    >
      <div className={center ? "" : "max-w-2xl"}>
        <p className={cn("eyebrow", center && "eyebrow--center")}>{kicker}</p>
        <h2
          className={cn(
            "font-display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-cream",
            center && "mx-auto max-w-[18ch]",
          )}
        >
          <TextReveal>{title}</TextReveal>
        </h2>
      </div>
      {lead && (
        <p
          className={cn(
            "max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.3rem)] text-foam",
            center && "mx-auto mt-5",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
