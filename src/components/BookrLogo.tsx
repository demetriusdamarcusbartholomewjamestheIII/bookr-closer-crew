type BookrLogoProps = {
  height?: number;
  className?: string;
  variant?: "dark" | "light";
};

export function BookrLogo({ height = 32, className, variant = "dark" }: BookrLogoProps) {
  const isLight = variant === "light";
  const wordColor = isLight ? "#F5F1E8" : "#1F2937";
  const lineColors = isLight
    ? ["#C9D1F2", "#8FA0E8", "#5B6BCE"]
    : ["#A4B0E8", "#5B6BCE", "#2E3A8C"];

  return (
    <svg
      height={height}
      viewBox="0 0 130 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bookr"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill={wordColor}
        letterSpacing="-0.04em"
      >
        Bookr
      </text>
      <rect x="82" y="4" width="12" height="5" rx="1.5" fill={lineColors[0]} />
      <rect x="82" y="13" width="22" height="5" rx="1.5" fill={lineColors[1]} />
      <rect x="82" y="22" width="32" height="5" rx="1.5" fill={lineColors[2]} />
    </svg>
  );
}

export default BookrLogo;
