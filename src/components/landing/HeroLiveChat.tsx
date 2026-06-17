import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const HERO_SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Hola — ¿la casa en Maple sigue disponible?" },
  { role: "bookr", text: "¡Hola! Sí, sigue activa. ¿Busca mudarse en los próximos 60 días?" },
  { role: "lead", text: "Sí, pre-aprobados. En 30 días." },
  {
    role: "bookr",
    text: "Perfecto — sábado 11am o jueves 5:30pm para un recorrido. ¿Cuál le funciona?",
  },
  { role: "lead", text: "Sábado 11 está bien." },
  { role: "bookr", text: "Listo. Quedó agendado — recibirá confirmación en breve." },
];

export function HeroLiveChat({ id = "bookr-live-demo" }: { id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      id={id}
      ref={ref}
      className="flex min-h-[400px] flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-card"
    >
      <div className="border-b border-charcoal/8 px-5 py-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-charcoal/45">
          Live preview
        </p>
        <p className="text-sm font-semibold text-navy">New lead · answered in seconds</p>
      </div>

      <div
        className="flex-1 overflow-y-auto px-5 py-5"
        role="log"
        aria-live="polite"
        aria-label="Bookr conversation preview"
      >
        <TypewriterBubbles
          script={HERO_SCRIPT}
          active={inView}
          minHeight={280}
          charMs={28}
          pauseAfterLineMs={750}
          pauseBeforeLoopMs={3000}
        />
      </div>
    </div>
  );
}