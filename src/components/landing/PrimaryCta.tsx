import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/bookr-constants";

const CTA_CLASS =
  "group inline-flex items-center justify-center gap-2 rounded-lg bg-bookr-stripe-2 font-semibold text-white shadow-[0_8px_20px_-8px_rgba(46,58,140,0.55)] transition-[background-color,box-shadow,transform] duration-150 hover:bg-bookr-stripe-3 hover:shadow-[0_10px_24px_-8px_rgba(46,58,140,0.6)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2";

const SIZE_CLASS = {
  default: "min-h-12 px-7 text-base",
  compact: "min-h-11 px-4 text-sm min-[360px]:px-5",
} as const;

export function PrimaryCta({
  className = "",
  fullWidth = false,
  size = "default",
}: {
  className?: string;
  fullWidth?: boolean;
  size?: keyof typeof SIZE_CLASS;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={[CTA_CLASS, SIZE_CLASS[size], fullWidth ? "w-full sm:w-auto" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      Book a demo
      {size === "default" ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
          strokeWidth={2.5}
          aria-hidden
        />
      ) : null}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
