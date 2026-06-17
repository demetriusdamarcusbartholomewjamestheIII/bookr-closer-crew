import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const SETUP_STEPS = [
  "Connect Zillow & social",
  "Train on your voice",
  "Link your calendar",
];

export function HandsFreeDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"setup" | "running">(reduced ? "running" : "setup");
  const [checked, setChecked] = useState(reduced ? SETUP_STEPS.length : 0);

  useEffect(() => {
    if (!inView || reduced) return;

    if (checked < SETUP_STEPS.length) {
      const t = window.setTimeout(() => setChecked((c) => c + 1), 900);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => setPhase("running"), 700);
    return () => window.clearTimeout(t);
  }, [inView, checked, reduced]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-white/12 bg-charcoal/40 p-6 sm:p-8"
      aria-live="polite"
    >
      {phase === "setup" ? (
        <div className="space-y-4">
          <p className="text-sm font-medium text-white/80">We set it up for you</p>
          <ul className="space-y-3">
            {SETUP_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm text-white/70">
                <span
                  className={[
                    "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                    i < checked
                      ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400"
                      : "border-white/15 text-white/30",
                  ].join(" ")}
                >
                  {i < checked ? <Check className="h-3.5 w-3.5" strokeWidth={2.5} /> : null}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Bookr is running
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            Leads are being answered, qualified, and booked — no dashboard to check, no daily
            login.
          </p>
        </div>
      )}
    </div>
  );
}