import { CalendarCheck, Languages, Timer } from "lucide-react";

const CAPABILITIES = [
  { icon: Timer, label: "Replies in under a minute" },
  { icon: Languages, label: "English & Spanish, auto-detected" },
  { icon: CalendarCheck, label: "Booked on your calendar" },
] as const;

export function CapabilityStrip() {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {CAPABILITIES.map((cap) => (
        <li
          key={cap.label}
          className="bookr-capability-pill flex items-center gap-3 rounded-xl border border-bookr-stripe-2/15 px-4 py-3 sm:flex-col sm:items-start sm:gap-2 sm:py-3.5"
        >
          <cap.icon className="h-5 w-5 shrink-0 text-bookr-stripe-3" strokeWidth={2} aria-hidden />
          <p className="text-sm font-bold leading-tight text-navy">{cap.label}</p>
        </li>
      ))}
    </ul>
  );
}
