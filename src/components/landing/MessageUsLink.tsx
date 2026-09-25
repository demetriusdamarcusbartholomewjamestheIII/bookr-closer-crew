import { openChatWidget } from "@/lib/chat-widget";

/**
 * Secondary hero action: opens the web-chat widget. Falls back to the callback form
 * (#contact) without JavaScript, or if the widget can't load.
 */
export function MessageUsLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        openChatWidget(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        });
      }}
      className={[
        "inline-flex min-h-11 items-center text-sm font-semibold text-bookr-stripe-3 underline decoration-bookr-stripe-3/30 underline-offset-4 transition-colors hover:decoration-bookr-stripe-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2",
        className,
      ].join(" ")}
    >
      Or message us now — see how fast we reply
    </a>
  );
}
