import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function useTypingSequence(
  lines: string[],
  active: boolean,
  charMs = 28,
  pauseMs = 600,
) {
  const reduced = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setLineIndex(lines.length - 1);
      setCharIndex(lines[lines.length - 1]?.length ?? 0);
      setDone(true);
      return;
    }

    setLineIndex(0);
    setCharIndex(0);
    setDone(false);
  }, [active, reduced, lines]);

  useEffect(() => {
    if (!active || reduced || done) return;

    const current = lines[lineIndex] ?? "";
    if (charIndex < current.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), charMs);
      return () => window.clearTimeout(t);
    }

    if (lineIndex < lines.length - 1) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, pauseMs);
      return () => window.clearTimeout(t);
    }

    setDone(true);
  }, [active, reduced, done, lineIndex, charIndex, lines, charMs, pauseMs]);

  const visible = lines.slice(0, lineIndex + 1).map((line, i) =>
    i < lineIndex ? line : line.slice(0, charIndex),
  );

  return { visible, done, lineIndex };
}