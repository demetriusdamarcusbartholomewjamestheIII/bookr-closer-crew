import { BOOKING_URL } from "@/lib/bookr-constants";

const CTA_CLASS =
  "inline-flex min-h-12 items-center justify-center rounded-lg px-8 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2";

const VARIANT_CLASS = {
  primary: "bg-bookr-stripe-2 text-white hover:bg-bookr-stripe-3",
  secondary:
    "border-2 border-bookr-stripe-2/40 text-bookr-stripe-3 hover:border-bookr-stripe-2 hover:bg-bookr-stripe-2/5",
} as const;

export function PrimaryCta({
  className = "",
  fullWidth = false,
  label = "Book a demo",
  variant = "primary",
}: {
  className?: string;
  fullWidth?: boolean;
  label?: string;
  variant?: keyof typeof VARIANT_CLASS;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[CTA_CLASS, VARIANT_CLASS[variant], fullWidth ? "w-full sm:w-auto" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
    </a>
  );
}
