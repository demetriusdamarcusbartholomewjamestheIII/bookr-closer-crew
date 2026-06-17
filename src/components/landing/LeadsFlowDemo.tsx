import { useEffect, useRef, useState } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";

const SOURCES = ["Zillow", "Facebook", "Instagram", "Your website"];

const REPLY_SCRIPT: TypewriterLine[] = [
  {
    role: "bookr",
    text: "Hi! Thanks for reaching out — I can help with that listing. Are you hoping to move in the next 60 days?",
  },
];

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
      className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-wrap gap-2">
        {SOURCES.map((src, i) => (
          <span
            key={src}
            className={[
              "rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300",
              i <= activeSource
                ? "border-navy/20 bg-navy/5 text-navy"
                : "border-charcoal/10 text-charcoal/35",
            ].join(" ")}
          >
            {src}
          </span>
        ))}
      </div>

      <div className="my-6 flex items-center gap-3 text-charcoal/35">
        <span className="h-px flex-1 bg-charcoal/10" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.05em]">New lead</span>
        <span className="h-px flex-1 bg-charcoal/10" />
      </div>

      <div
        className={[
          "rounded-xl border p-4 transition-opacity duration-500",
          showReply ? "border-charcoal/10 bg-cream/40 opacity-100" : "border-charcoal/8 opacity-40",
        ].join(" ")}
      >
        <p className="text-xs font-medium text-charcoal/45">Bookr</p>
        {showReply ? (
          <div className="mt-2">
            <TypewriterBubbles
              key={cycle}
              script={REPLY_SCRIPT}
              active={showReply}
              charMs={24}
              pauseAfterLineMs={0}
              loop={false}
            />
            <p className="mt-3 text-xs font-medium text-emerald-700">Replied in seconds</p>
          </div>
        ) : (
          <p className="mt-2 text-sm text-charcoal/45">Waiting for lead…</p>
        )}
      </div>
    </div>
  );
}