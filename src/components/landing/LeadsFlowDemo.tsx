import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const SOURCES = ["Zillow", "Facebook", "Instagram", "Your website"];

export function LeadsFlowDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();
  const [activeSource, setActiveSource] = useState(-1);
  const [replied, setReplied] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setActiveSource(SOURCES.length - 1);
      setReplied(true);
      return;
    }

    let i = 0;
    const tick = () => {
      if (i < SOURCES.length) {
        setActiveSource(i);
        i += 1;
        timer = window.setTimeout(tick, 700);
      } else {
        window.setTimeout(() => setReplied(true), 400);
      }
    };
    let timer = window.setTimeout(tick, 400);
    return () => window.clearTimeout(timer);
  }, [inView, reduced]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-white/12 bg-charcoal/40 p-6 sm:p-8"
    >
      <div className="flex flex-wrap gap-2">
        {SOURCES.map((src, i) => (
          <span
            key={src}
            className={[
              "rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-300",
              i <= activeSource
                ? "border-white/25 bg-white/10 text-white"
                : "border-white/8 text-white/35",
            ].join(" ")}
          >
            {src}
          </span>
        ))}
      </div>

      <div className="my-6 flex items-center justify-center gap-3 text-white/40">
        <span className="h-px flex-1 bg-white/15" />
        <span className="text-[11px] uppercase tracking-[0.05em]">New lead</span>
        <span className="h-px flex-1 bg-white/15" />
      </div>

      <div
        className={[
          "rounded-xl border p-4 transition-all duration-500",
          replied
            ? "border-emerald-500/30 bg-emerald-500/8"
            : "border-white/10 bg-white/4 opacity-60",
        ].join(" ")}
      >
        <p className="text-xs text-white/50">Bookr</p>
        <p className="mt-1 text-sm text-white/90">
          {replied
            ? "Hi! Thanks for reaching out — I can help with that listing. Are you hoping to move in the next 60 days?"
            : "Waiting for lead…"}
        </p>
        {replied && (
          <p className="mt-2 text-[11px] font-medium text-emerald-400">Replied in seconds</p>
        )}
      </div>
    </div>
  );
}