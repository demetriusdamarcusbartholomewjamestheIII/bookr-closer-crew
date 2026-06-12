import { useEffect, useState } from "react";

const LOADER_SEEN_KEY = "bookr-loader-seen";

export function BrandLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(LOADER_SEEN_KEY);
    if (seen || reducedMotion) return;

    sessionStorage.setItem(LOADER_SEEN_KEY, "1");
    setVisible(true);

    const hideTimer = window.setTimeout(() => setFading(true), 500);
    const removeTimer = window.setTimeout(() => setVisible(false), 800);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="brand-loader"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 300ms ease-out",
      }}
    >
      <div className="brand-loader__inner">
        <AnimatedBookrLogo height={64} />
      </div>
      <style>{`
        @keyframes bookr-line-in {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }
        .bookr-loader-word {
          opacity: 0;
          animation: bookr-word-fade 300ms ease-out 50ms forwards;
        }
        @keyframes bookr-word-fade {
          to { opacity: 1; }
        }
        .bookr-loader-line {
          transform-origin: left center;
          transform: scaleX(0);
          opacity: 0;
          animation: bookr-line-in 250ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .bookr-loader-line-1 { animation-delay: 200ms; }
        .bookr-loader-line-2 { animation-delay: 300ms; }
        .bookr-loader-line-3 { animation-delay: 400ms; }
      `}</style>
    </div>
  );
}

function AnimatedBookrLogo({ height = 64 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 130 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="bookr"
    >
      <text
        x="0"
        y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="#1F2937"
        letterSpacing="-0.04em"
        className="bookr-loader-word"
      >
        bookr
      </text>
      <rect
        x="82"
        y="4"
        width="12"
        height="5"
        rx="1.5"
        fill="#A4B0E8"
        className="bookr-loader-line bookr-loader-line-1"
      />
      <rect
        x="82"
        y="13"
        width="22"
        height="5"
        rx="1.5"
        fill="#5B6BCE"
        className="bookr-loader-line bookr-loader-line-2"
      />
      <rect
        x="82"
        y="22"
        width="32"
        height="5"
        rx="1.5"
        fill="#2E3A8C"
        className="bookr-loader-line bookr-loader-line-3"
      />
    </svg>
  );
}