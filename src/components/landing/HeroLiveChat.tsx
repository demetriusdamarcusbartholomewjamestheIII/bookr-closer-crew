import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const HERO_SCRIPT: TypewriterLine[] = [
  {
    role: "bookr",
    text: "Hi! I'm Bookr — I reply to every lead in seconds, in English or Spanish. Looking to buy or sell?",
  },
  { role: "lead", text: "Buy — is the Maple St listing still available?" },
  { role: "bookr", text: "Yes, still active. Are you hoping to move in the next 60 days?" },
  { role: "lead", text: "Yes — pre-approved, within 30 days." },
  { role: "bookr", text: "Great. Saturday at 11am or Thursday at 5:30pm for a tour?" },
  { role: "lead", text: "Saturday at 11 works." },
  { role: "bookr", text: "You're booked — confirmation on its way." },
];

export function HeroLiveChat({ id = "bookr-live-demo" }: { id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div className="bookr-hero-chat-float relative">
      <div
        id={id}
        ref={ref}
        className="bookr-card-elevated relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl"
      >
        <div className="border-b border-charcoal/8 bg-white/90 px-5 py-3.5 backdrop-blur-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-charcoal/45">
            Live preview
          </p>
          <p className="text-sm font-semibold text-navy">New lead · answered in seconds</p>
        </div>

        <div
          className="flex-1 overflow-y-auto bg-white px-5 py-5"
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
    </div>
  );
}