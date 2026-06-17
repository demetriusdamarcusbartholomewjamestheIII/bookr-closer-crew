import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const SETUP_STEPS = [
  "Connect Zillow & social",
  "Train on your voice",
  "Link your calendar",
];

const STEP_MS = 2400;
const PAUSE_BEFORE_RUNNING_MS = 2000;
const RUNNING_HOLD_MS = 14000;


export function HandsFreeDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<"setup" | "running">(reduced ? "running" : "setup");
  const [checked, setChecked] = useState(reduced ? SETUP_STEPS.length : 0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;

    if (phase === "setup" && checked < SETUP_STEPS.length) {
      const t = window.setTimeout(() => setChecked((c) => c + 1), STEP_MS);
      return () => window.clearTimeout(t);
    }

    if (phase === "setup" && checked >= SETUP_STEPS.length) {
      const t = window.setTimeout(() => setPhase("running"), PAUSE_BEFORE_RUNNING_MS);
      return () => window.clearTimeout(t);
    }

    if (phase === "running") {
      const t = window.setTimeout(() => {
        setPhase("setup");
        setChecked(0);
        setCycle((c) => c + 1);
      }, RUNNING_HOLD_MS);
      return () => window.clearTimeout(t);
    }
  }, [inView, checked, reduced, phase, cycle]);

  return (
    <div
      ref={ref}
      className="bookr-card-elevated overflow-hidden rounded-2xl p-6 sm:p-8"
      aria-live="polite"
    >
      {phase === "setup" ? (
        <div className="space-y-4">
          <p className="text-base font-medium text-navy">We set it up for you</p>
          <ul className="space-y-3">
            {SETUP_STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-base text-charcoal/70">
                <span
                  className={[
                    "flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-500",
                    i < checked
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600"
                      : "border-charcoal/15 text-charcoal/25",
                  ].join(" ")}
                >
                  {i < checked ? <Check className="h-4 w-4" strokeWidth={2.5} /> : null}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3 py-1.5 text-sm font-medium text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Bookr is running
          </div>
          <p className="prose-measure mt-5 text-base leading-relaxed text-charcoal/65">
            Leads are being answered, qualified, and booked — no dashboard to check, no daily
            login.
          </p>
        </div>
      )}
    </div>
  );
}