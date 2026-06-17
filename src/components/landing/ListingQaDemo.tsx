import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useTypingSequence } from "@/hooks/use-typing-sequence";

const SCRIPT = [
  { role: "lead", text: "Does the Oak St listing have a garage?" },
  { role: "bookr", text: "Yes — 2-car attached garage at 1842 Oak St. Want to see it?" },
  { role: "lead", text: "¿Cuál es el HOA?" },
  { role: "bookr", text: "El HOA es $185/mes e incluye piscina y áreas verdes. ¿Jueves 2pm o viernes 10am?" },
];

export function ListingQaDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const { visible } = useTypingSequence(
    SCRIPT.map((s) => s.text),
    inView,
    24,
    550,
  );

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream/50 p-6 sm:p-8"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-charcoal/45">
        Your listing · 1842 Oak St
      </p>
      <div className="mt-4 min-h-[200px] space-y-3">
        {visible.map((text, i) => {
          const role = SCRIPT[i]?.role ?? "lead";
          const typing = i === visible.length - 1 && text.length < (SCRIPT[i]?.text.length ?? 0);
          return (
            <div
              key={i}
              className={`flex ${role === "bookr" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={[
                  "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug",
                  role === "bookr"
                    ? "rounded-br-md bg-charcoal text-white"
                    : "rounded-bl-md border border-charcoal/10 bg-white text-charcoal",
                ].join(" ")}
              >
                {text}
                {typing && (
                  <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-white/60" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {visible.length === SCRIPT.length &&
        visible[SCRIPT.length - 1] === SCRIPT[SCRIPT.length - 1].text && (
          <p className="mt-4 text-center text-xs font-medium text-charcoal/55">
            Pulled from your listing details — then moves to booking
          </p>
        )}
    </div>
  );
}