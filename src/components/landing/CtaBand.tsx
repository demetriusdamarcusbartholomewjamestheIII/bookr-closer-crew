import { FadeUp } from "@/components/Motion";
import { PrimaryCta } from "@/components/landing/PrimaryCta";

export function CtaBand({ className = "" }: { className?: string }) {
  return (
    <section className={["border-y border-charcoal/8 bg-white py-14 sm:py-16", className].join(" ")}>
      <div className="mx-auto flex max-w-6xl justify-center px-5 sm:px-8">
        <FadeUp>
          <PrimaryCta />
        </FadeUp>
      </div>
    </section>
  );
}