import { BookrStripesSvg } from "@/components/BookrIconMark";

export function BookrStripe({ className = "" }: { className?: string }) {
  return <BookrStripesSvg className={`h-[23px] w-8 ${className}`} />;
}

export function BookrStripeWide({ className = "" }: { className?: string }) {
  return <BookrStripesSvg className={`h-6 w-10 ${className}`} />;
}