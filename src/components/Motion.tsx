import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealState = "static" | "hidden" | "visible";

/**
 * Desktop-only scroll reveal (IntersectionObserver + CSS classes in styles.css).
 * Phones and reduced-motion users get plain static content — mobile animations were
 * turned off on purpose after the scroll renderer crashes.
 *
 * The wrapper element never changes type, so children don't remount on hydration,
 * and anything already on screen at mount is left alone instead of flashing out and in.
 */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState("visible");
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, state };
}

function classes(...names: (string | false)[]) {
  return names.filter(Boolean).join(" ");
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, state } = useReveal();
  const style: CSSProperties | undefined =
    state !== "static" && delay ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <div
      ref={ref}
      className={classes(
        className,
        state !== "static" && "bookr-reveal",
        state === "visible" && "is-visible",
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, state } = useReveal();

  return (
    <div
      ref={ref}
      className={classes(
        className,
        state !== "static" && "bookr-stagger",
        state === "visible" && "is-visible",
      )}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={classes(className, "bookr-stagger-item")}>{children}</div>;
}
