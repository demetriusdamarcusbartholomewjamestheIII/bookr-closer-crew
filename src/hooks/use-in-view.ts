import { useLayoutEffect, useState, type RefObject } from "react";

/**
 * Tracks whether `ref` is intersecting the viewport.
 * Keeps observing (does not disconnect after first hit) so callers can pause
 * work when the element scrolls off-screen — critical on mobile.
 */
export function useInView(ref: RefObject<Element | null>, threshold = 0.2) {
  const [inView, setInView] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -2% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}