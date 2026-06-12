import { BookrStripesSvg } from "@/components/BookrIconMark";

export function BookrStripe({ className = "" }: { className?: string }) {
  return <BookrStripesSvg className={`h-[14px] w-8 ${className}`} />;
}

export function BookrStripeWide({ className = "" }: { className?: string }) {
  return <BookrStripesSvg className={`h-4 w-10 ${className}`} />;
}