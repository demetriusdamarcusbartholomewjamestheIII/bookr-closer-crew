import { useLayoutEffect, useRef } from "react";
import type { TypewriterLine } from "@/hooks/use-typewriter-conversation";
import { useTypewriterConversation } from "@/hooks/use-typewriter-conversation";

function Bubble({
  role,
  text,
  cursor,
  leadClass,
  bookrClass,
}: {
  role: string;
  text: string;
  cursor?: boolean;
  leadClass: string;
  bookrClass: string;
}) {
  const isBookr = role === "bookr";
  return (
    <div className={`flex ${isBookr ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug sm:text-base",
          isBookr ? bookrClass : leadClass,
        ].join(" ")}
      >
        {text}
        {cursor && (
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-current align-[-2px] opacity-60" />
        )}
      </div>
    </div>
  );
}

const DEFAULT_LEAD = "rounded-bl-md border border-charcoal/10 bg-white text-charcoal shadow-sm";
const DEFAULT_BOOKR =
  "rounded-br-md border border-bookr-stripe-2/20 bg-bookr-stripe-2/15 text-navy shadow-sm";

/**
 * Animated chat thread. `className` sizes the message window (give it a height); once the
 * thread outgrows it, older messages scroll up out of view so the newest stays visible.
 * Reduced-motion users get the full conversation at its natural height (styles.css).
 */
export function TypewriterBubbles({
  script,
  active = true,
  className = "",
  innerClassName = "",
  label = "Example conversation",
  leadClass = DEFAULT_LEAD,
  bookrClass = DEFAULT_BOOKR,
  charMs,
  pauseAfterLineMs,
  pauseBeforeLoopMs,
  loop,
  onComplete,
}: {
  script: TypewriterLine[];
  active?: boolean;
  className?: string;
  innerClassName?: string;
  label?: string;
  leadClass?: string;
  bookrClass?: string;
  charMs?: number;
  pauseAfterLineMs?: number;
  pauseBeforeLoopMs?: number;
  loop?: boolean;
  onComplete?: () => void;
}) {
  const { completed, draft, draftRole, showCursor } = useTypewriterConversation(script, active, {
    charMs,
    pauseAfterLineMs,
    pauseBeforeLoopMs,
    loop,
    onComplete,
  });
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollTargetRef = useRef(0);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const target = Math.max(0, el.scrollHeight - el.clientHeight);
    // Only move when the target changes: re-assigning mid smooth-scroll restarts the easing.
    if (target === scrollTargetRef.current) return;
    scrollTargetRef.current = target;
    el.scrollTop = target;
  }, [completed.length, draft, draftRole]);

  return (
    <div
      ref={viewportRef}
      className={[
        "bookr-chat-viewport relative overflow-hidden motion-safe:scroll-smooth",
        className,
      ].join(" ")}
    >
      {/* Screen readers get the whole thread once instead of every typed character */}
      <ol className="sr-only" aria-label={label}>
        {script.map((line, i) => (
          <li key={i} lang={line.lang}>
            {line.role === "bookr" ? "Bookr" : "Lead"}: {line.text}
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className={["space-y-3", innerClassName].join(" ")}>
        {completed.map((m, i) => (
          <Bubble
            key={`done-${i}-${m.text.slice(0, 8)}`}
            role={m.role}
            text={m.text}
            leadClass={leadClass}
            bookrClass={bookrClass}
          />
        ))}
        {draftRole && (
          <Bubble
            role={draftRole}
            text={draft}
            cursor={showCursor}
            leadClass={leadClass}
            bookrClass={bookrClass}
          />
        )}
      </div>
    </div>
  );
}
