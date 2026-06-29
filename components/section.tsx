import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-5 py-[clamp(64px,10vw,130px)] sm:px-8",
        className,
      )}
    >
      {children}
    </section>
  );
}
