import { FadeUp } from "@/components/Motion";
import { PrimaryCta } from "@/components/landing/PrimaryCta";

export function CtaBand({ className = "" }: { className?: string }) {
  return (
    <section
      className={["border-y border-charcoal/8 bg-bookr-base py-12 sm:py-16", className].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp className="flex flex-col items-center gap-3 text-center">
          <PrimaryCta className="w-full max-w-sm sm:w-auto" />
          <p className="text-sm font-medium text-navy-muted">30-minute walkthrough · Free setup</p>
        </FadeUp>
      </div>
    </section>
  );
}
