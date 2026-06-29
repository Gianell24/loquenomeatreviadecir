import Link from "next/link";
import { cn } from "@/lib/utils";

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition",
        variant === "primary"
          ? "bg-amber text-ink shadow-[0_10px_30px_-12px_rgba(217,155,99,0.7)] hover:bg-gold"
          : "border border-line bg-white/3 text-cream hover:border-amber hover:text-gold",
        className,
      )}
    >
      {children}
    </Link>
  );
}
