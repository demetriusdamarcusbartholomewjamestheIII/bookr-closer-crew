import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const SETUP_STEPS = ["Connect Zillow & social", "Train on your voice", "Link your calendar"];

const STEP_MS = 1000;
const PAUSE_BEFORE_RUNNING_MS = 600;
const RUNNING_HOLD_MS = 5000;

export function HandsFreeDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();
  const [checked, setChecked] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // `reduced` is only known after mount, so settle on the finished state here
    // rather than in useState — otherwise the checklist stays empty forever.
    if (reduced) {
      setChecked(SETUP_STEPS.length);
      setRunning(true);
      return;
    }
    if (!inView) return;

    if (!running && checked < SETUP_STEPS.length) {
      const t = window.setTimeout(() => setChecked((c) => c + 1), STEP_MS);
      return () => window.clearTimeout(t);
    }

    if (!running) {
      const t = window.setTimeout(() => setRunning(true), PAUSE_BEFORE_RUNNING_MS);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setRunning(false);
      setChecked(0);
    }, RUNNING_HOLD_MS);
    return () => window.clearTimeout(t);
  }, [inView, checked, reduced, running]);

  return (
    <div ref={ref} className="bookr-card-elevated rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-base font-semibold text-navy">We set it up for you</p>
        <p className="text-sm font-semibold tabular-nums text-navy-muted" aria-hidden>
          {checked}/{SETUP_STEPS.length}
        </p>
      </div>

      <ul className="mt-5 space-y-3">
        {SETUP_STEPS.map((step, i) => {
          const done = i < checked;
          return (
            <li key={step} className="flex items-center gap-3 text-base text-charcoal/80">
              <span
                className={[
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                  done
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600"
                    : "border-charcoal/15 text-charcoal/25",
                ].join(" ")}
              >
                {done ? <Check className="h-4 w-4" strokeWidth={2.5} /> : null}
              </span>
              <span className={done ? "text-navy" : undefined}>{step}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 border-t border-charcoal/8 pt-5">
        <div
          className={[
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-300",
            running
              ? "border-emerald-500/25 bg-emerald-500/8 text-emerald-700"
              : "border-charcoal/10 bg-charcoal/[0.03] text-navy-muted",
          ].join(" ")}
        >
          <span className="relative flex h-2 w-2">
            {running ? (
              <span className="absolute hidden h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40 sm:inline-flex" />
            ) : null}
            <span
              className={[
                "relative h-2 w-2 rounded-full",
                running ? "bg-emerald-500" : "bg-charcoal/25",
              ].join(" ")}
            />
          </span>
          {running ? "Bookr is running" : "Setting up…"}
        </div>
        <p className="prose-measure mt-3 text-base leading-relaxed text-navy-muted">
          Leads are being answered, qualified, and booked — no dashboard to check, no daily login.
        </p>
      </div>
    </div>
  );
}
