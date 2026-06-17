export function SectionImageAccent({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute overflow-hidden rounded-2xl opacity-[0.18] blur-[0.5px]",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8]/60 via-transparent to-navy/10" />
    </div>
  );
}