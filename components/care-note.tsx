import { Heart } from "lucide-react";

export function CareNote() {
  return (
    <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-line bg-amber/5 p-6">
      <Heart className="mt-0.5 h-6 w-6 shrink-0 text-gold" />
      <p className="text-sm leading-relaxed text-foam">
        <b className="text-cream">Pedir ayuda también es valentía.</b> Este proyecto
        acompaña, no diagnostica ni reemplaza a un profesional. Si algo de lo que sientes
        te pesa demasiado, hablar con alguien preparado no es debilidad. Muchas
        universidades y centros comunitarios ofrecen atención psicológica gratuita o a bajo
        costo.
      </p>
    </div>
  );
}
