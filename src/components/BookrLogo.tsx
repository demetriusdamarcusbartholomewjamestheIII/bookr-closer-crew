type BookrLogoProps = {
  height?: number;
  className?: string;
};

export function BookrLogo({ height = 32, className }: BookrLogoProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 130 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="bookr"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="#1F2937"
        letterSpacing="-0.04em"
      >
        bookr
      </text>
      <rect x="82" y="4" width="12" height="5" rx="1.5" fill="#A4B0E8" />
      <rect x="82" y="13" width="22" height="5" rx="1.5" fill="#5B6BCE" />
      <rect x="82" y="22" width="32" height="5" rx="1.5" fill="#2E3A8C" />
    </svg>
  );
}

export default BookrLogo;
