import { useState } from "react";
import { HouseLineIllustration } from "@/components/landing/HouseLineIllustration";

export function ListingPhoto({
  src,
  alt,
  className = "",
  illustrationClassName = "h-full w-full p-8",
}: {
  src: string;
  alt: string;
  className?: string;
  illustrationClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={[
          "flex items-center justify-center bg-gradient-to-br from-bookr-stripe-1/25 to-cream",
          className,
        ].join(" ")}
      >
        <HouseLineIllustration className={illustrationClassName} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width={1600}
      height={1067}
      onError={() => setFailed(true)}
    />
  );
}