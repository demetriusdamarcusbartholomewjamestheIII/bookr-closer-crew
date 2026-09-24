import { useLayoutEffect, useRef, useState } from "react";

const LOADER_SEEN_KEY = "bookr-loader-seen";
const HOLD_MS = 2400;
const FADE_MS = 500;

/**
 * How long the intro has already been on screen. The overlay is server-rendered and its
 * CSS animations start at first paint, so on a slow phone hydration can land seconds
 * later — count that time toward HOLD_MS instead of restarting the full intro.
 */
function introElapsedMs(root: HTMLElement | null) {
  try {
    // Finished animations clamp at their end time, so take the longest-running one
    // (the CSS failsafe on the overlay itself runs past HOLD_MS).
    const times = (root?.getAnimations({ subtree: true }) ?? [])
      .map((animation) => animation.currentTime)
      .filter((time): time is number => typeof time === "number");
    if (times.length) return Math.max(...times);
  } catch {
    // getAnimations unsupported — fall back to time since navigation start
  }
  return performance.now();
}

function readSeen() {
  try {
    return sessionStorage.getItem(LOADER_SEEN_KEY) !== null;
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(LOADER_SEEN_KEY, "1");
  } catch {
    // storage blocked (private mode) — the intro just plays again next visit
  }
}

export function BrandLoader({
  onFadeStart,
  onFinished,
}: {
  onFadeStart?: () => void;
  onFinished?: () => void;
}) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const onFadeStartRef = useRef(onFadeStart);
  const onFinishedRef = useRef(onFinished);
  onFadeStartRef.current = onFadeStart;
  onFinishedRef.current = onFinished;

  useLayoutEffect(() => {
    const path = window.location.pathname;
    const isHome = path === "/" || path === "";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isHome || readSeen() || reducedMotion) {
      setVisible(false);
      onFadeStartRef.current?.();
      onFinishedRef.current?.();
      return;
    }

    markSeen();

    const fadeDelay = Math.max(0, HOLD_MS - introElapsedMs(rootRef.current));
    const fadeTimer = window.setTimeout(() => {
      setFading(true);
      onFadeStartRef.current?.();
    }, fadeDelay);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      onFinishedRef.current?.();
    }, fadeDelay + FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="brand-loader"
      style={{
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
        transition: `opacity ${FADE_MS}ms ease-out`,
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
          animation: bookr-word-fade 500ms ease-out 100ms forwards;
        }
        @keyframes bookr-word-fade {
          to { opacity: 1; }
        }
        .bookr-loader-line {
          transform-origin: left center;
          transform: scaleX(0);
          opacity: 0;
          animation: bookr-line-in 350ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .bookr-loader-line-1 { animation-delay: 600ms; }
        .bookr-loader-line-2 { animation-delay: 850ms; }
        .bookr-loader-line-3 { animation-delay: 1100ms; }
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
      aria-label="Bookr"
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
        Bookr
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
