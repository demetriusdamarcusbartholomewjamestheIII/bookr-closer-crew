import type { ReactNode } from "react";
import { LandingNav } from "@/components/landing/LandingNav";
import { SiteFooter } from "@/components/SiteFooter";

/** Underlined, not color-only: touch screens never see the hover state. */
export const LEGAL_LINK_CLASS =
  "font-medium text-navy underline decoration-navy/30 underline-offset-2 transition-colors hover:decoration-navy";

export function LegalPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white text-charcoal">
      <LandingNav />
      <main id="main">
        <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-6 sm:pt-16">
          {children}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
