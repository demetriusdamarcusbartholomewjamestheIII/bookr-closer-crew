import { Globe, Languages, MessageSquare, Phone } from "lucide-react";

const CAPABILITIES = [
  { icon: MessageSquare, label: "Lead messages", detail: "Replied in seconds" },
  { icon: Phone, label: "Inbound calls", detail: "Pro plan" },
  { icon: Globe, label: "Zillow · IG · Facebook", detail: "Any trigger" },
  { icon: Languages, label: "English & Spanish", detail: "Auto-detected" },
] as const;

export function CapabilityStrip() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {CAPABILITIES.map((cap) => (
        <div
          key={cap.label}
          className="bookr-capability-pill flex flex-col gap-2 rounded-xl border border-bookr-stripe-2/15 px-4 py-3.5"
        >
          <cap.icon className="h-5 w-5 text-bookr-stripe-3" strokeWidth={2} />
          <div>
            <p className="text-sm font-bold leading-tight text-navy">{cap.label}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-bookr-stripe-3/80">{cap.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}