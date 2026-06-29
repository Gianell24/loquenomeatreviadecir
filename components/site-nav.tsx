"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="fixed inset-x-3 top-3 z-50 mx-auto max-w-6xl">
      <nav
        className={cn(
          "flex items-center justify-between gap-3 rounded-full border px-4 py-2 backdrop-blur-md transition-colors duration-500",
          scrolled
            ? "border-line bg-ink/85 shadow-[0_16px_40px_-24px_#000]"
            : "border-white/5 bg-ink/50",
        )}
      >
        <Link
          href="/"
          className="font-display text-[1rem] font-semibold whitespace-nowrap text-cream"
        >
          Lo que no me <span className="text-gold">atreví</span> a decir
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-[0.82rem] font-medium transition-colors",
                isActive(item.href)
                  ? "bg-amber text-ink"
                  : "text-foam hover:bg-white/5 hover:text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "mt-2 overflow-hidden rounded-3xl border bg-ink/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open
            ? "max-h-[80vh] border-line opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 p-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-base transition-colors",
                isActive(item.href)
                  ? "bg-amber text-ink"
                  : "text-foam hover:bg-white/5",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
