import { useCallback, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

type ChatMessage = { role: "visitor" | "bookr"; text: string };

const EN_FLOW = [
  "Hi — thanks for reaching out. Which listing are you asking about?",
  "Got it. Are you hoping to move in the next 60 days, or further out?",
  "Great — I have Thursday at 5:30pm or Saturday at 11am for a tour. Which works better?",
  "You're booked for Saturday at 11am. You'll get a confirmation shortly. See you then!",
];

const ES_FLOW = [
  "¡Hola! Gracias por escribir. ¿Sobre qué propiedad pregunta?",
  "Perfecto. ¿Busca mudarse en los próximos 60 días, o más adelante?",
  "Tengo el jueves a las 5:30pm o el sábado a las 11am para un recorrido. ¿Cuál le funciona?",
  "Listo — quedó agendado el sábado a las 11am. Recibirá una confirmación en breve.",
];

function looksSpanish(text: string): boolean {
  const t = text.toLowerCase();
  return /[áéíóúñ¿¡]/.test(t) ||
    /\b(hola|gracias|casa|disponible|propiedad|español|busco|quiero|precio|visita|mudanza|habitaciones)\b/.test(t);
}

const STARTERS_EN = [
  "Hi — is the Maple St listing still available?",
  "Looking at homes in Austin, are you free this week?",
];

const STARTERS_ES = [
  "Hola — ¿la casa en Maple sigue disponible?",
  "Busco en Austin, ¿tienen visitas esta semana?",
];

export function HeroLiveChat({ id = "bookr-live-demo" }: { id?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bookr",
      text: "Message Bookr like a new lead would — try English or Spanish.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState<"en" | "es" | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollDown = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  useEffect(() => {
    scrollDown();
  }, [messages, typing, scrollDown]);

  const reply = useCallback(
    (visitorText: string) => {
      const detected = lang ?? (looksSpanish(visitorText) ? "es" : "en");
      if (!lang) setLang(detected);
      const flow = detected === "es" ? ES_FLOW : EN_FLOW;
      const replyText = flow[Math.min(step, flow.length - 1)];
      setStep((s) => Math.min(s + 1, flow.length - 1));
      setTyping(true);
      window.setTimeout(() => {
        setTyping(false);
        setMessages((m) => [...m, { role: "bookr", text: replyText }]);
      }, 900 + Math.random() * 400);
    },
    [lang, step],
  );

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { role: "visitor", text: trimmed }]);
    setInput("");
    reply(trimmed);
  };

  const reset = () => {
    setMessages([
      { role: "bookr", text: "Message Bookr like a new lead would — try English or Spanish." },
    ]);
    setStep(0);
    setLang(null);
    setTyping(false);
    inputRef.current?.focus();
  };

  const starters = lang === "es" ? STARTERS_ES : STARTERS_EN;

  return (
    <div
      id={id}
      className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/12 bg-charcoal/40 shadow-pro backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-white/50">
            Live preview
          </p>
          <p className="text-sm font-semibold text-white">Bookr lead desk</p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-md px-2 py-1 text-xs text-white/50 transition-colors hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
        >
          Reset
        </button>
      </div>

      <div
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.map((m, i) => (
          <div
            key={`${i}-${m.text.slice(0, 12)}`}
            className={`flex ${m.role === "visitor" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={[
                "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug sm:text-sm",
                m.role === "visitor"
                  ? "rounded-br-md bg-white text-charcoal"
                  : "rounded-bl-md bg-charcoal text-white",
              ].join(" ")}
            >
              {m.text}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-charcoal/90 px-4 py-3">
              <span className="inline-flex gap-1">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/70"
                    style={{ animationDelay: `${d * 150}ms` }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {step === 0 && messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 border-t border-white/8 px-4 py-2 sm:px-5">
          {starters.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-left text-[11px] text-white/75 transition-colors hover:border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        className="flex gap-2 border-t border-white/10 p-3 sm:p-4"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <label htmlFor="hero-chat-input" className="sr-only">
          Message Bookr
        </label>
        <input
          ref={inputRef}
          id="hero-chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type as a lead would…"
          className="min-w-0 flex-1 rounded-lg border border-white/12 bg-white/8 px-3 py-2.5 text-base text-white placeholder:text-white/40 focus-visible:border-bookr-stripe-1 focus-visible:outline-none"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={!input.trim() || typing}
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white transition-colors hover:bg-white/15 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}