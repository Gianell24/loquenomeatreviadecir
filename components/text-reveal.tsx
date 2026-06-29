"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function TextReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  if (reduce) return <>{children}</>;

  return (
    <span ref={ref} className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={inView ? { y: 0 } : { y: "115%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
