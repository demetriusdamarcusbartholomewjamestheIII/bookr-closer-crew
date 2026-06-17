import type { ReactNode } from "react";
import { FadeUp } from "@/components/Motion";

export function DiffSection({
  id,
  eyebrow,
  title,
  subline,
  visual,
  dark = false,
  large = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subline: string;
  visual: ReactNode;
  dark?: boolean;
  large?: boolean;
}) {
  return (
    <section
      id={id}
      className={[
        "py-20 sm:py-28",
        dark ? "bg-navy text-white" : "bg-white text-navy",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={[
            "grid gap-12",
            large ? "lg:grid-cols-1 lg:gap-14" : "lg:grid-cols-[1fr_1.1fr] lg:items-center",
          ].join(" ")}
        >
          <FadeUp>
            {eyebrow && (
              <p
                className={[
                  "text-[11px] font-semibold uppercase tracking-[0.05em]",
                  dark ? "text-white/50" : "text-navy/45",
                ].join(" ")}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className={[
                "font-display font-semibold tracking-tight",
                large ? "mt-3 text-3xl sm:text-4xl lg:text-5xl" : "mt-2 text-2xl sm:text-3xl lg:text-4xl",
              ].join(" ")}
            >
              {title}
            </h2>
            <p
              className={[
                "prose-measure mt-4 text-lg leading-relaxed",
                dark ? "text-white/72" : "text-navy/65",
              ].join(" ")}
            >
              {subline}
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>{visual}</FadeUp>
        </div>
      </div>
    </section>
  );
}