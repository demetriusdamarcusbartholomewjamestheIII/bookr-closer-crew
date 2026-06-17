import { BookrStripesSvg } from "@/components/BookrIconMark";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function BookrMarkOrbit({ size = 120 }: { size?: number }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className={[
          "flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04]",
          reduced ? "" : "bookr-mark-orbit",
        ].join(" ")}
        style={{ width: size, height: size }}
      >
        <BookrStripesSvg className="h-auto w-[42%]" />
      </div>
    </div>
  );
}