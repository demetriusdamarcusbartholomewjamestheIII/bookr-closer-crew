import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const EN_SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Hi — is 1842 Oak St still available?" },
  { role: "bookr", text: "Hi! Great choice — let me get you a tour. Are you hoping to move in the next 60 days?" },
  { role: "lead", text: "Yes — pre-approved, within 30 days." },
  { role: "bookr", text: "Great. Thursday at 2pm or Friday at 10am for a tour?" },
];

const ES_SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Hola — ¿sigue disponible la casa en Oak St?" },
  { role: "bookr", text: "¡Hola! Excelente opción — le agendo una visita. ¿Busca mudarse en los próximos 60 días?" },
  { role: "lead", text: "Sí, con pre-aprobación. En 30 días." },
  { role: "bookr", text: "Perfecto. ¿Jueves 2pm o viernes 10am para un recorrido?" },
];

function ThreadCard({ label, script, active }: { label: string; script: TypewriterLine[]; active: boolean }) {
  return (
    <div className="bookr-card-elevated flex flex-col overflow-hidden rounded-2xl">
      <div className="border-b border-charcoal/8 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-charcoal/45">
          {label}
        </p>
      </div>
      <div className="h-[400px] overflow-hidden p-4">
        <TypewriterBubbles
          script={script}
          active={active}
          fixedHeight={368}
          charMs={14}
          pauseAfterLineMs={280}
          pauseBeforeLoopMs={1500}
        />
      </div>
    </div>
  );
}

export function BilingualTypingDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-2 sm:gap-6">
      <ThreadCard label="English lead" script={EN_SCRIPT} active={inView} />
      <ThreadCard label="Spanish lead" script={ES_SCRIPT} active={inView} />
    </div>
  );
}