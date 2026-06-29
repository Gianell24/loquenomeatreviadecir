"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "lqnmad_journal";

export function Journal() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [note, setNote] = useState("Se guarda solo en este dispositivo, en tu navegador.");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved && ref.current) ref.current.value = saved;
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  const onInput = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      try {
        localStorage.setItem(KEY, ref.current?.value ?? "");
        setNote(
          "Guardado · solo en este dispositivo · " +
            new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" }),
        );
      } catch {
        setNote("Tu navegador no permite guardar texto localmente.");
      }
    }, 500);
  };

  return (
    <div className="rounded-3xl border border-line bg-gradient-to-b from-tide/20 to-ink/30 p-6 text-center sm:p-10">
      <h3 className="font-display text-[clamp(1.5rem,3.4vw,2.2rem)] text-cream">Tu página</h3>
      <p className="mx-auto mt-3 max-w-[48ch] text-foam">
        Escribe aquí, sin filtro y sin público, eso que llevas guardado. No tiene que ser
        perfecto. No tiene que enviarse. Solo tiene que salir.
      </p>
      <textarea
        ref={ref}
        onInput={onInput}
        placeholder="Lo que no me atreví a decir…"
        aria-label="Tu página: escribe lo que no te atreviste a decir"
        className="font-display mx-auto mt-6 block min-h-[140px] w-full max-w-xl resize-y rounded-2xl border border-line bg-ink/50 px-5 py-4 text-[1.05rem] leading-relaxed text-cream italic outline-none placeholder:text-mist focus:border-amber"
      />
      <small className="mt-3 block text-xs text-mist">{note}</small>
    </div>
  );
}
