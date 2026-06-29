"use client";

import { usePathname } from "next/navigation";
import { CtaLink } from "@/components/cta-link";
import { CONTACT } from "@/lib/data";

export function ContactCta() {
  const pathname = usePathname();
  if (pathname?.replace(/\/+$/, "") === "/contacto") return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-[clamp(40px,8vw,90px)] sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-tide/25 to-ink/40 px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="eyebrow eyebrow--center">¿Hablamos?</p>
        <h2 className="font-display mx-auto mt-4 max-w-[20ch] text-[clamp(1.8rem,4.4vw,3rem)] text-cream">
          Cuéntanos tu próxima historia
        </h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-foam">
          Ideas, colaboraciones o cualquier mensaje: escríbenos a{" "}
          <a className="link-underline text-gold" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          .
        </p>
        <div className="mt-7 flex justify-center">
          <CtaLink href="/contacto">Contáctanos</CtaLink>
        </div>
      </div>
    </section>
  );
}
