import { Globe, Languages, MessageSquare, Phone } from "lucide-react";

const CAPABILITIES = [
  { icon: MessageSquare, label: "Lead messages", detail: "Replied in seconds" },
  { icon: Phone, label: "Inbound calls", detail: "Pro plan" },
  { icon: Globe, label: "Zillow · IG · Facebook", detail: "Any trigger" },
  { icon: Languages, label: "English & Spanish", detail: "Auto-detected" },
] as const;

export function CapabilityStrip() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-4 sm:gap-3 lg:grid-cols-2">
      {CAPABILITIES.map((cap) => (
        <li
          key={cap.label}
          className="bookr-capability-pill flex flex-col gap-2.5 rounded-xl px-3.5 py-3 lg:flex-row lg:items-center lg:gap-3 lg:px-4"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bookr-stripe-2/12 text-bookr-stripe-3">
            <cap.icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold leading-tight text-navy">{cap.label}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-bookr-stripe-3/85">{cap.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
