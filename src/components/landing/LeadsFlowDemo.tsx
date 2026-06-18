import { useEffect, useRef, useState } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const SOURCES = [
  { name: "Zillow", accent: true },
  { name: "Instagram", accent: true },
  { name: "Facebook", accent: false },
  { name: "Your website", accent: false },
] as const;

const REPLY_SCRIPT: TypewriterLine[] = [
  {
    role: "bookr",
    text: "Hi! Thanks for reaching out — I can help with that listing. Are you hoping to move in the next 60 days?",
  },
];

const REPLY_BOX_H = 132;

export function LeadsFlowDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();
  const [cycle, setCycle] = useState(0);
  const [activeSource, setActiveSource] = useState(-1);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    if (!inView) return;

    if (reduced) {
      setActiveSource(SOURCES.length - 1);
      setShowReply(true);
      return;
    }

    setActiveSource(-1);
    setShowReply(false);

    let step = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const schedule = (ms: number, fn: () => void) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const run = () => {
      if (step < SOURCES.length) {
        setActiveSource(step);
        step += 1;
        schedule(650, run);
        return;
      }
      schedule(500, () => {
        setShowReply(true);
        schedule(8000, () => {
          setCycle((c) => c + 1);
        });
      });
    };

    schedule(400, run);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [inView, reduced, cycle]);

  return (
    <div
      ref={ref}
      className="bookr-card-elevated overflow-hidden rounded-2xl p-6 sm:p-8"
    >
      <div className="flex flex-wrap gap-2">
        {SOURCES.map((src, i) => (
          <span
            key={src.name}
            className={[
              "rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-300",
              i <= activeSource
                ? src.accent
                  ? "border-bookr-stripe-2/40 bg-bookr-stripe-2/15 text-bookr-stripe-3 shadow-sm"
                  : "border-navy/25 bg-navy/8 text-navy"
                : "border-charcoal/10 text-charcoal/35",
            ].join(" ")}
          >
            {src.name}
          </span>
        ))}
      </div>

      <div className="my-6 flex items-center gap-3 text-charcoal/35">
        <span className="h-px flex-1 bg-charcoal/10" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.05em]">New lead</span>
        <span className="h-px flex-1 bg-charcoal/10" />
      </div>

      <div
        className="rounded-xl border border-bookr-stripe-2/25 bg-gradient-to-br from-bookr-stripe-1/15 to-cream/50 p-4"
        style={{ height: REPLY_BOX_H, minHeight: REPLY_BOX_H, maxHeight: REPLY_BOX_H }}
      >
        <p className="text-xs font-medium text-charcoal/45">Bookr</p>
        <div className="relative mt-2" style={{ height: REPLY_BOX_H - 36 }}>
          {!showReply && (
            <p className="absolute inset-0 text-sm text-charcoal/45">Waiting for lead…</p>
          )}
          {showReply && (
            <div className="absolute inset-0">
              <TypewriterBubbles
                key={cycle}
                script={REPLY_SCRIPT}
                active={showReply}
                fixedHeight={REPLY_BOX_H - 56}
                charMs={24}
                pauseAfterLineMs={0}
                loop={false}
              />
              <p className="absolute bottom-0 left-0 text-xs font-medium text-emerald-700">
                Replied in seconds
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}