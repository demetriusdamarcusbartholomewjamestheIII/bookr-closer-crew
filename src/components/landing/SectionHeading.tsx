export function SectionHeading({
  title,
  subline,
  align = "left",
  inverted = false,
  className = "",
}: {
  title: string;
  subline?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-2xl",
        className,
      ].join(" ")}
    >
      <h2
        className={[
          "font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          inverted ? "text-white" : "text-navy",
        ].join(" ")}
      >
        {title}
      </h2>
      {subline ? (
        <p
          className={[
            "mt-3 text-base leading-snug sm:text-lg",
            inverted ? "text-white/75" : "text-navy/60",
          ].join(" ")}
        >
          {subline}
        </p>
      ) : null}
    </div>
  );
}