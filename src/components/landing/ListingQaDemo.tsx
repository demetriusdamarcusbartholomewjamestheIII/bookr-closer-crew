import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Does the Oak St listing have a garage?" },
  { role: "bookr", text: "Yes — 2-car attached garage at 1842 Oak St. Want to see it?" },
  { role: "lead", text: "¿Cuál es el HOA?" },
  {
    role: "bookr",
    text: "El HOA es $185/mes e incluye piscina y áreas verdes. ¿Jueves 2pm o viernes 10am?",
  },
];

export function ListingQaDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-charcoal/10 bg-cream/60 p-6 sm:p-8"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-charcoal/45">
        Your listing · 1842 Oak St
      </p>
      <div className="mt-4">
        <TypewriterBubbles
          script={SCRIPT}
          active={inView}
          minHeight={200}
          charMs={28}
          pauseAfterLineMs={700}
          pauseBeforeLoopMs={3000}
        />
      </div>
    </div>
  );
}