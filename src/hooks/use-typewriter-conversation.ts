import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type TypewriterLine = { role: string; text: string };

export function useTypewriterConversation(
  script: TypewriterLine[],
  active = true,
  options?: {
    charMs?: number;
    pauseAfterLineMs?: number;
    pauseBeforeLoopMs?: number;
    loop?: boolean;
  },
) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const baseCharMs = options?.charMs ?? 30;
  const charMs = isMobile ? Math.max(baseCharMs, 44) : baseCharMs;
  const pauseAfterLineMs = options?.pauseAfterLineMs ?? 700;
  const pauseBeforeLoopMs = options?.pauseBeforeLoopMs ?? 2500;
  const loop = options?.loop ?? true;

  const scriptKey = useMemo(
    () => script.map((s) => `${s.role}:${s.text}`).join("|"),
    [script],
  );

  const [completed, setCompleted] = useState<TypewriterLine[]>([]);
  const [draft, setDraft] = useState("");
  const [draftRole, setDraftRole] = useState<string | null>(null);
  const [showCursor, setShowCursor] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState === "visible",
  );

  useEffect(() => {
    const onVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!active || !pageVisible) return;

    if (reduced) {
      setCompleted(script);
      setDraft("");
      setDraftRole(null);
      setShowCursor(false);
      return;
    }

    setCompleted([]);
    setDraft("");
    setDraftRole(null);
    setShowCursor(false);

    let lineIdx = 0;
    let charIdx = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;

    const cleanup = () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };

    const schedule = (ms: number, fn: () => void) => {
      timer = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const startLine = () => {
      if (cancelled) return;

      if (lineIdx >= script.length) {
        if (loop) {
          schedule(pauseBeforeLoopMs, () => {
            lineIdx = 0;
            charIdx = 0;
            setCompleted([]);
            startLine();
          });
        }
        return;
      }

      const line = script[lineIdx];
      charIdx = 0;
      setDraftRole(line.role);
      setDraft("");
      setShowCursor(true);

      interval = setInterval(() => {
        if (cancelled) return;
        charIdx += 1;
        setDraft(line.text.slice(0, charIdx));

        if (charIdx >= line.text.length) {
          if (interval) clearInterval(interval);
          interval = null;
          setShowCursor(false);
          setCompleted((prev) => [...prev, line]);
          setDraft("");
          setDraftRole(null);
          lineIdx += 1;
          schedule(pauseAfterLineMs, startLine);
        }
      }, charMs);
    };

    schedule(400, startLine);
    return cleanup;
  }, [scriptKey, active, pageVisible, reduced, charMs, pauseAfterLineMs, pauseBeforeLoopMs, loop, script]);

  return { completed, draft, draftRole, showCursor };
}