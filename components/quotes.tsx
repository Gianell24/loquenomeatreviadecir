"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { QUOTES } from "@/lib/data";

export function Quotes() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, [reduce]);

  const q = QUOTES[i];

  return (
    <div className="text-center">
      <div className="mx-auto grid min-h-[210px] max-w-[30ch] place-items-center">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduce ? undefined : { opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display text-[clamp(1.6rem,4.4vw,2.8rem)] leading-tight font-light text-cream italic"
          >
            “{q.text}”
            <cite className="mt-5 block font-sans text-xs tracking-[0.22em] text-gold uppercase not-italic">
              {q.cite}
            </cite>
          </motion.blockquote>
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {QUOTES.map((_, k) => (
          <button
            key={k}
            aria-label={`Frase ${k + 1}`}
            onClick={() => setI(k)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              k === i ? "w-6 bg-amber" : "w-2 bg-line hover:bg-mist",
            )}
          />
        ))}
      </div>
    </div>
  );
}
