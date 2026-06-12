import { useEffect, useRef, useState } from "react";

export function CountUp({
  to,
  duration = 800,
  prefix = "",
  suffix = "",
  format = (n: number) => Math.round(n).toString(),
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVal(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            setVal(0);
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(eased * to);
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {format(val)}
      {suffix}
    </span>
  );
}