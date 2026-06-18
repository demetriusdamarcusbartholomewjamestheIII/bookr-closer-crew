export function HouseLineIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="House illustration"
      className={className}
    >
      <path
        d="M100 18L28 72v70h144V72L100 18z"
        stroke="#3B4A6B"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="rgba(164,176,232,0.08)"
      />
      <path
        d="M72 142V96h56v46"
        stroke="#5B6BCE"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="118" y="96" width="28" height="28" rx="2" stroke="#3B4A6B" strokeWidth="2" fill="rgba(245,241,232,0.6)" />
      <path d="M58 72L100 38l42 34" stroke="#A4B0E8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="132" cy="110" r="3" fill="#5B6BCE" />
    </svg>
  );
}