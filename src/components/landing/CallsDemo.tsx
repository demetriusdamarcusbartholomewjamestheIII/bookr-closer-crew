import { useRef } from "react";
import { Phone, PhoneIncoming } from "lucide-react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const CALL_SCRIPT: TypewriterLine[] = [
  {
    role: "bookr",
    text: "Hi — thanks for calling. I'm with your agent's team. Are you looking to buy or sell?",
  },
  { role: "lead", text: "Buy — I saw the Maple St listing on Zillow." },
  {
    role: "bookr",
    text: "Great pick — let me get you a tour. Saturday at 11am or Thursday at 5:30pm?",
  },
  { role: "lead", text: "Saturday works." },
  { role: "bookr", text: "You're booked — confirmation heading your way." },
];

export function CallsDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="bookr-card-elevated overflow-hidden rounded-2xl">
      <div className="flex items-center gap-3 border-b border-navy/10 bg-gradient-to-r from-bookr-stripe-1/20 to-white px-4 py-4 sm:px-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bookr-stripe-2 text-white">
          <PhoneIncoming className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-navy-muted">
            Missed call · Pro
          </p>
          <p className="text-sm font-bold text-navy">Bookr picks up in English or Spanish</p>
        </div>
        <Phone className="ml-auto h-4 w-4 shrink-0 text-bookr-stripe-3" aria-hidden />
      </div>

      <TypewriterBubbles
        script={CALL_SCRIPT}
        active={inView}
        label="Example: Bookr answering a missed call"
        className="h-[400px] bg-gradient-to-b from-white to-cream/40 px-4 sm:h-[440px] sm:px-5"
        innerClassName="py-5"
        charMs={14}
        pauseAfterLineMs={280}
        pauseBeforeLoopMs={1500}
      />
    </div>
  );
}
