"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/data";

type Status = "idle" | "sending" | "ok" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-ink/50 px-4 py-3 text-cream outline-none transition-colors placeholder:text-mist focus:border-amber";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Nombre: data.get("nombre"),
          Correo: data.get("email"),
          Mensaje: data.get("mensaje"),
          _subject: "Nuevo mensaje desde la web · Lo que no me atreví a decir",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-tide/10 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold" />
        <h3 className="font-display text-2xl text-cream">¡Mensaje enviado!</h3>
        <p className="max-w-[40ch] text-foam">
          Gracias por escribir. Te responderemos pronto a tu correo.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="link-underline mt-2 text-sm text-gold"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-line bg-gradient-to-b from-tide/15 to-ink/30 p-6 sm:p-8"
    >
      <div className="grid gap-2">
        <label htmlFor="nombre" className="text-sm font-medium text-foam">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          className={fieldClass}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foam">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tucorreo@ejemplo.com"
          className={fieldClass}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="mensaje" className="text-sm font-medium text-foam">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntanos en qué podemos ayudarte…"
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-[#e88]">
          Hubo un problema al enviar. Inténtalo de nuevo o escríbenos directamente a{" "}
          <a className="text-gold underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full gap-2 rounded-full text-[0.95rem] font-semibold sm:w-auto sm:justify-self-start sm:px-8"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Enviando…" : "Enviar"}
      </Button>
    </form>
  );
}
