import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useTypingSequence } from "@/hooks/use-typing-sequence";

const EN_LINES = [
  { role: "lead", text: "Hi — is 1842 Oak St still available?" },
  { role: "bookr", text: "Hi! Yes, still active. Are you hoping to move in the next 60 days?" },
  { role: "lead", text: "Yes — pre-approved, within 30 days." },
  { role: "bookr", text: "Great. Thursday at 2pm or Friday at 10am for a tour?" },
];

const ES_LINES = [
  { role: "lead", text: "Hola — ¿sigue disponible la casa en Oak St?" },
  { role: "bookr", text: "¡Hola! Sí, sigue activa. ¿Busca mudarse en los próximos 60 días?" },
  { role: "lead", text: "Sí, con pre-aprobación. En 30 días." },
  { role: "bookr", text: "Perfecto. ¿Jueves 2pm o viernes 10am para un recorrido?" },
];

function TypingThread({
  label,
  lines,
  active,
}: {
  label: string;
  lines: { role: string; text: string }[];
  active: boolean;
}) {
  const flat = lines.map((l) => l.text);
  const { visible } = useTypingSequence(flat, active, 22, 500);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/12 bg-charcoal/50">
      <div className="border-b border-white/10 px-4 py-2.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-white/50">
          {label}
        </p>
      </div>
      <div className="min-h-[220px] space-y-2.5 p-4">
        {visible.map((text, i) => {
          const role = lines[i]?.role ?? "lead";
          const typing = i === visible.length - 1 && text.length < (lines[i]?.text.length ?? 0);
          return (
            <div
              key={i}
              className={`flex ${role === "bookr" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={[
                  "max-w-[90%] rounded-2xl px-3 py-2 text-[13px] leading-snug sm:text-sm",
                  role === "bookr"
                    ? "rounded-br-md bg-navy-soft text-white"
                    : "rounded-bl-md bg-white/10 text-white/90",
                ].join(" ")}
              >
                {text}
                {typing && (
                  <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-white/70" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BilingualTypingDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <TypingThread label="English lead" lines={EN_LINES} active={inView} />
      <TypingThread label="Spanish lead" lines={ES_LINES} active={inView} />
    </div>
  );
}