export function BookrStripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[5px] ${className}`} aria-hidden="true">
      <div className="h-[5px] w-3 rounded-sm bg-bookr-stripe-1" />
      <div className="h-[5px] w-5 rounded-sm bg-bookr-stripe-2" />
      <div className="h-[5px] w-8 rounded-sm bg-bookr-stripe-3" />
    </div>
  );
}

export function BookrStripeWide({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      <div className="h-1.5 w-full max-w-[48px] rounded-full bg-bookr-stripe-1" />
      <div className="h-1.5 w-full max-w-[88px] rounded-full bg-bookr-stripe-2" />
      <div className="h-1.5 w-full max-w-[128px] rounded-full bg-bookr-stripe-3" />
    </div>
  );
}