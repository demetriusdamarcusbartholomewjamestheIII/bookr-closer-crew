const CTA_CLASS =
  "inline-flex min-h-12 items-center justify-center rounded-lg bg-bookr-stripe-2 px-8 text-base font-semibold text-white transition-colors hover:bg-bookr-stripe-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2";

export function PrimaryCta({
  className = "",
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <a
      href="#bookr-live-demo"
      className={[CTA_CLASS, fullWidth ? "w-full sm:w-auto" : "", className].filter(Boolean).join(" ")}
    >
      Talk to Bookr now
    </a>
  );
}