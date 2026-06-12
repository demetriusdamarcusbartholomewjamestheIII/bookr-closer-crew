const STRIPE_1 = "#A4B0E8";
const STRIPE_2 = "#5B6BCE";
const STRIPE_3 = "#2E3A8C";
const MARK_BG = "#1F2937";

/** Three logo stripes — matches loader & brand icon reference */
export function BookrStripesSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="0" width="12" height="3" rx="1.5" fill={STRIPE_1} />
      <rect x="5" y="5.5" width="22" height="3" rx="1.5" fill={STRIPE_2} />
      <rect x="0" y="11" width="32" height="3" rx="1.5" fill={STRIPE_3} />
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
      <rect x="18" y="14" width="12" height="4" rx="2" fill={STRIPE_1} />
      <rect x="13" y="22" width="22" height="4" rx="2" fill={STRIPE_2} />
      <rect x="8" y="30" width="32" height="4" rx="2" fill={STRIPE_3} />
    </svg>
  );
}