"use client";

import { Button } from "@/components/ui/button";
import { openLink } from "@/lib/open-link";
import { cn } from "@/lib/utils";

export function ActionButton({
  linkKey,
  children,
  variant = "default",
  className,
}: {
  linkKey: string;
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}) {
  return (
    <Button
      onClick={() => openLink(linkKey)}
      variant={variant}
      className={cn(
        "h-12 rounded-full px-6 text-[0.95rem] font-semibold",
        variant === "outline" && "border-line bg-white/3 text-cream hover:border-amber hover:text-gold",
        className,
      )}
    >
      {children}
    </Button>
  );
}
