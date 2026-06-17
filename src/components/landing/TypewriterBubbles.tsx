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
          "max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug sm:text-base",
          isBookr ? bookrClass : leadClass,
        ].join(" ")}
      >
        {text}
        {cursor && (
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-current opacity-60" />
        )}
      </div>
    </div>
  );
}

const DEFAULT_LEAD =
  "rounded-bl-md border border-charcoal/10 bg-white text-charcoal shadow-sm";
const DEFAULT_BOOKR = "rounded-br-md bg-navy/10 text-navy";

export function TypewriterBubbles({
  script,
  active = true,
  className = "",
  minHeight,
  leadClass = DEFAULT_LEAD,
  bookrClass = DEFAULT_BOOKR,
  charMs,
  pauseAfterLineMs,
  pauseBeforeLoopMs,
  loop,
}: {
  script: TypewriterLine[];
  active?: boolean;
  className?: string;
  minHeight?: number;
  leadClass?: string;
  bookrClass?: string;
  charMs?: number;
  pauseAfterLineMs?: number;
  pauseBeforeLoopMs?: number;
  loop?: boolean;
}) {
  const { completed, draft, draftRole, showCursor } = useTypewriterConversation(
    script,
    active,
    { charMs, pauseAfterLineMs, pauseBeforeLoopMs, loop },
  );

  return (
    <div
      className={["space-y-3", className].join(" ")}
      style={minHeight ? { minHeight } : undefined}
    >
      {completed.map((m, i) => (
        <Bubble
          key={`done-${i}-${m.text.slice(0, 8)}`}
          role={m.role}
          text={m.text}
          leadClass={leadClass}
          bookrClass={bookrClass}
        />
      ))}
      {draftRole && draft.length >= 0 && (
        <Bubble
          role={draftRole}
          text={draft}
          cursor={showCursor}
          leadClass={leadClass}
          bookrClass={bookrClass}
        />
      )}
    </div>
  );
}