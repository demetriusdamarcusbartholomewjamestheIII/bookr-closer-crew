const STRIPE_1 = "#A4B0E8";
const STRIPE_2 = "#5B6BCE";
const STRIPE_3 = "#2E3A8C";
const MARK_BG = "#1F2937";

/** Official logo proportions — left-aligned pyramid (12 → 22 → 32) */
const STRIPE_WIDTHS = [12, 22, 32] as const;
const STRIPE_H = 5;
const STRIPE_GAP = 4;
const STRIPE_TOTAL_W = 32;
const STRIPE_TOTAL_H = STRIPE_H * 3 + STRIPE_GAP * 2;

function StripePyramid({
  x = 0,
  y = 0,
  barHeight = STRIPE_H,
  gap = STRIPE_GAP,
}: {
  x?: number;
  y?: number;
  barHeight?: number;
  gap?: number;
}) {
  const colors = [STRIPE_1, STRIPE_2, STRIPE_3];
  const rx = barHeight / 2;

  return (
    <>
      {STRIPE_WIDTHS.map((width, i) => (
        <rect
          key={width}
          x={x}
          y={y + i * (barHeight + gap)}
          width={width}
          height={barHeight}
          rx={rx}
          fill={colors[i]}
        />
      ))}
    </>
  );
}

/** Three stripes only — left-aligned pyramid */
export function BookrStripesSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${STRIPE_TOTAL_W} ${STRIPE_TOTAL_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <StripePyramid />
    </svg>
  );
}

/** Stripes inside a dark circle — favicon & trust mark */
export function BookrIconMark({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const padX = (48 - STRIPE_TOTAL_W) / 2;
  const padY = (48 - STRIPE_TOTAL_H) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bookr"
      className={className}
    >
      <circle cx="24" cy="24" r="24" fill={MARK_BG} />
      <StripePyramid x={padX} y={padY} />
    </svg>
  );
}