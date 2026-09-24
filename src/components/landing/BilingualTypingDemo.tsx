import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const EN_SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Hi — is 1842 Oak St still available?" },
  {
    role: "bookr",
    text: "Hi! Great choice — let me get you a tour. Are you hoping to move in the next 60 days?",
  },
  { role: "lead", text: "Yes — pre-approved, within 30 days." },
  { role: "bookr", text: "Great. Thursday at 2pm or Friday at 10am for a tour?" },
];

const ES_SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Hola — ¿sigue disponible la casa en Oak St?", lang: "es" },
  {
    role: "bookr",
    text: "¡Hola! Excelente opción — le agendo una visita. ¿Busca mudarse en los próximos 60 días?",
    lang: "es",
  },
  { role: "lead", text: "Sí, con pre-aprobación. En 30 días.", lang: "es" },
  { role: "bookr", text: "Perfecto. ¿Jueves 2pm o viernes 10am para un recorrido?", lang: "es" },
];

function ThreadCard({
  code,
  label,
  script,
  active,
}: {
  code: string;
  label: string;
  script: TypewriterLine[];
  active: boolean;
}) {
  return (
    <div className="bookr-card-elevated flex flex-col overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2.5 border-b border-charcoal/8 px-4 py-3">
        <span className="rounded-md bg-bookr-stripe-2/12 px-1.5 py-0.5 text-[11px] font-bold tracking-[0.06em] text-bookr-stripe-3">
          {code}
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-navy-muted">
          {label}
        </p>
      </div>
      <TypewriterBubbles
        script={script}
        active={active}
        label={`Example: ${label.toLowerCase()} conversation`}
        className="h-[300px] px-4 sm:h-[380px]"
        innerClassName="py-4"
        charMs={14}
        pauseAfterLineMs={280}
        pauseBeforeLoopMs={1500}
      />
    </div>
  );
}

export function BilingualTypingDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-2 sm:gap-6">
      <ThreadCard code="EN" label="English lead" script={EN_SCRIPT} active={inView} />
      <ThreadCard code="ES" label="Spanish lead" script={ES_SCRIPT} active={inView} />
    </div>
  );
}
