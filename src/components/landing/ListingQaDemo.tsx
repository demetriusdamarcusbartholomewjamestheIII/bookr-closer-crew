import { useRef } from "react";
import { TypewriterBubbles } from "@/components/landing/TypewriterBubbles";
import { ListingPhoto } from "@/components/landing/ListingPhoto";
import { useInView } from "@/hooks/use-in-view";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";
import { LANDING_IMAGES } from "@/lib/landing-images";

const SCRIPT: TypewriterLine[] = [
  { role: "lead", text: "Is the Oak St listing still on the market?" },
  {
    role: "bookr",
    text: "1842 Oak St — that's one of ours. Let me get you in to see it. Are you pre-approved yet?",
  },
  { role: "lead", text: "Sí. ¿Cuántas recámaras tiene?", lang: "es" },
  {
    role: "bookr",
    text: "Tiene 3 recámaras. Los detalles finos se los repasa el agente en la visita — ¿jueves 2pm o viernes 10am?",
    lang: "es",
  },
];

export function ListingQaDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="bookr-card-elevated grid h-auto grid-cols-1 overflow-hidden rounded-2xl lg:h-[580px] lg:max-h-[580px] lg:min-h-[580px] lg:grid-cols-[1.05fr_1fr]"
    >
      <div className="relative h-[200px] min-h-0 sm:h-[240px] lg:h-full">
        <ListingPhoto
          image={LANDING_IMAGES.listingExterior}
          alt="Modern home exterior with landscaped yard"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/15" />
        <div className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-navy shadow-md">
          1842 Oak St
        </div>
      </div>

      <div className="flex h-full min-h-0 flex-col bg-gradient-to-br from-white via-cream/50 to-bookr-stripe-1/10 pt-6 sm:pt-8">
        <p className="shrink-0 px-5 text-[11px] font-semibold uppercase tracking-[0.05em] text-bookr-stripe-3 sm:px-8">
          Buyer Q&A · your listings, loaded at setup
        </p>
        <TypewriterBubbles
          script={SCRIPT}
          active={inView}
          label="Example: Bookr answering a buyer's listing questions"
          className="mt-2 h-[350px] px-5 sm:px-8 lg:h-auto lg:min-h-0 lg:flex-1"
          innerClassName="pb-6 pt-2 sm:pb-8"
          charMs={14}
          pauseAfterLineMs={280}
          pauseBeforeLoopMs={1500}
        />
      </div>
    </div>
  );
}
