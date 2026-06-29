"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Circle } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { IMG, type ImgKey } from "@/lib/images";

export function HeroGeometric({
  badge = "Serie web · 2026",
  title1,
  title2,
  subtitle,
  actions,
  bgImageKey,
}: {
  badge?: string;
  title1: string;
  title2: string;
  subtitle?: string;
  actions?: ReactNode;
  bgImageKey?: ImgKey;
}) {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 + i * 0.18, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
  };

  return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-ink">
      {/* mar al atardecer — ken-burns lento (movimiento dinámico, sin formas) */}
      {bgImageKey && (
        <motion.div
          className="absolute inset-0"
          initial={reduce ? undefined : { scale: 1.12 }}
          animate={reduce ? undefined : { scale: [1.12, 1.2, 1.12], x: [0, -14, 0], y: [0, 10, 0] }}
          transition={reduce ? undefined : { duration: 28, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={IMG[bgImageKey]}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-[0.5] saturate-[0.9]"
          />
        </motion.div>
      )}

      {/* luces a la deriva — destellos suaves de mar y ocaso */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1/4 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(53,104,112,0.20),transparent_70%)] blur-2xl"
        animate={reduce ? undefined : { x: ["-8%", "10%", "-8%"], y: ["-6%", "8%", "-6%"] }}
        transition={reduce ? undefined : { duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1/4 bg-[radial-gradient(34%_34%_at_62%_40%,rgba(217,155,99,0.14),transparent_70%)] blur-2xl"
        animate={reduce ? undefined : { x: ["10%", "-6%", "10%"], y: ["8%", "-8%", "8%"] }}
        transition={reduce ? undefined : { duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1 md:mb-10"
        >
          <Circle className="h-2 w-2 fill-amber text-amber" />
          <span className="text-sm tracking-wide text-foam/70">{badge}</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display mb-5 text-5xl leading-[0.92] font-light tracking-tight sm:text-7xl md:mb-7 md:text-8xl"
        >
          <span className="bg-gradient-to-b from-cream to-cream/70 bg-clip-text text-transparent">
            {title1}
          </span>
          <br />
          <span className="bg-gradient-to-r from-gold via-sand to-amber bg-clip-text text-transparent italic">
            {title2}
          </span>
        </motion.h1>

        {subtitle && (
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-8 max-w-xl text-base leading-relaxed font-light tracking-wide text-foam/70 sm:text-lg md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {actions && (
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3"
          >
            {actions}
          </motion.div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
    </div>
  );
}
