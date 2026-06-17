import { LANDING_IMAGES } from "@/lib/landing-images";

const CARDS = [
  {
    src: LANDING_IMAGES.heroExterior,
    className: "bookr-float-card -left-4 top-6 w-[42%] sm:-left-8 sm:w-[38%]",
  },
  {
    src: LANDING_IMAGES.heroInterior,
    className: "bookr-float-card-delay -right-2 bottom-4 w-[36%] sm:-right-6 sm:w-[32%]",
  },
] as const;

export function FloatingPropertyCards() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      {CARDS.map((card) => (
        <div
          key={card.src}
          className={[
            "absolute overflow-hidden rounded-2xl border border-white/80 shadow-[0_20px_50px_-12px_rgba(59,74,107,0.22),0_8px_20px_-8px_rgba(59,74,107,0.12)]",
            card.className,
          ].join(" ")}
        >
          <img
            src={card.src}
            alt=""
            className="aspect-[4/3] h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-white/20" />
        </div>
      ))}
    </div>
  );
}