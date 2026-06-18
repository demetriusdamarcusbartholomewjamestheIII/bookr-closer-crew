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
    text: "Still available. Saturday at 11am or Thursday at 5:30pm for a tour?",
  },
  { role: "lead", text: "Saturday works." },
  { role: "bookr", text: "You're booked — confirmation heading your way." },
];

/** Fits all five bubbles including wrapped opener and closer */
const CHAT_H = 400;

export function CallsDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref} className="bookr-card-elevated overflow-hidden rounded-2xl">
      <div className="flex items-center gap-3 border-b border-navy/10 bg-gradient-to-r from-bookr-stripe-1/20 to-white px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bookr-stripe-2 text-white">
          <PhoneIncoming className="h-5 w-5" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-navy/50">
            Missed call · Pro
          </p>
          <p className="text-sm font-bold text-navy">Bookr picks up in English or Spanish</p>
        </div>
        <Phone className="ml-auto h-4 w-4 text-bookr-stripe-3" />
      </div>

      <div
        className="overflow-hidden bg-gradient-to-b from-white to-cream/40 px-5 py-5"
        style={{ height: CHAT_H + 40, minHeight: CHAT_H + 40, maxHeight: CHAT_H + 40 }}
      >
        <TypewriterBubbles
          script={CALL_SCRIPT}
          active={inView}
          fixedHeight={CHAT_H}
          charMs={14}
          pauseAfterLineMs={280}
          pauseBeforeLoopMs={1500}
          bookrClass="rounded-br-md bg-bookr-stripe-2/15 text-navy border border-bookr-stripe-2/20"
        />
      </div>
    </div>
  );
}