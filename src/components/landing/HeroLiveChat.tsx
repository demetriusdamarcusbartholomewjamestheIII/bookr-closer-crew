import { useRef } from "react";
import { MessageSquare } from "lucide-react";
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
        className="pointer-events-none absolute -right-1 -top-2 z-10 rounded-lg border border-bookr-stripe-2/30 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-bookr-stripe-3 shadow-md sm:-right-2"
        aria-hidden
      >
        EN · ES
      </div>

      <div
        id={id}
        ref={ref}
        className="relative flex h-[600px] flex-col overflow-hidden rounded-2xl border-2 border-bookr-stripe-2/35 bg-white shadow-pro sm:h-[620px]"
      >
        <div className="flex items-center gap-3 border-b border-bookr-stripe-2/20 bg-gradient-to-r from-bookr-stripe-1/35 via-white to-cream/50 px-5 py-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bookr-stripe-2 text-white shadow-sm">
            <MessageSquare className="h-4 w-4" strokeWidth={2.25} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-bookr-stripe-3">
              Live preview
            </p>
            <p className="truncate text-sm font-bold text-navy">New lead · answered in seconds</p>
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        <div
          className="flex-1 overflow-hidden bg-gradient-to-br from-white via-cream/45 to-bookr-stripe-1/20 px-5 py-5"
          role="log"
          aria-live="polite"
          aria-label="Bookr conversation preview"
        >
          <TypewriterBubbles
            script={HERO_SCRIPT}
            active={inView}
            fixedHeight={500}
            charMs={14}
            pauseAfterLineMs={280}
            pauseBeforeLoopMs={1500}
            bookrClass="rounded-br-md border border-bookr-stripe-2/20 bg-bookr-stripe-2/15 text-navy shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}