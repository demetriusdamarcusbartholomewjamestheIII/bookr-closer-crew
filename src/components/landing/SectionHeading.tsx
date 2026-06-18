export function SectionEyebrow({
  children,
  inverted = false,
  className = "",
}: {
  children: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <p
      className={[
        "mb-3 text-[11px] font-bold uppercase tracking-[0.14em]",
        inverted ? "text-bookr-stripe-1" : "text-bookr-stripe-3",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  title,
  subline,
  align = "left",
  inverted = false,
  eyebrow,
  className = "",
}: {
  title: string;
  subline?: string;
  align?: "left" | "center";
  inverted?: boolean;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-2xl",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <SectionEyebrow inverted={inverted} className={align === "center" ? "text-center" : ""}>
          {eyebrow}
        </SectionEyebrow>
      ) : null}
      <h2
        className={[
          "font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-navy",
        ].join(" ")}
      >
        {title}
      </h2>
      {subline ? (
        <p
          className={[
            "mt-3 text-base leading-snug sm:text-lg",
            inverted ? "text-white/80" : "text-navy/65",
          ].join(" ")}
        >
          {subline}
        </p>
      ) : null}
    </div>
  );
}