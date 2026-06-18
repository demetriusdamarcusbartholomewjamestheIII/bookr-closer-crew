import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";
import { LANDING_IMAGES } from "@/lib/landing-images";

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
      className="bookr-card-elevated grid overflow-hidden rounded-2xl lg:grid-cols-[1.05fr_1fr]"
    >
      <div className="relative min-h-[220px] lg:min-h-[340px]">
        <img
          src={LANDING_IMAGES.listingExterior}
          alt="Well-maintained single-family home with landscaped yard"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          width={1400}
          height={933}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/20" />
        <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm">
          1842 Oak St
        </div>
      </div>

      <div className="flex flex-col justify-center bg-gradient-to-br from-white to-cream/30 p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-navy/45">
          Buyer Q&A · from your listing
        </p>
        <div className="mt-4">
          <TypewriterBubbles
            script={SCRIPT}
            active={inView}
            minHeight={180}
            charMs={28}
            pauseAfterLineMs={700}
            pauseBeforeLoopMs={3000}
          />
        </div>
      </div>
    </div>
  );
}