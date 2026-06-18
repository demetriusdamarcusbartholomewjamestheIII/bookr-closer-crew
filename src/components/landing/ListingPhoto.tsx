import { useState } from "react";
import { HouseLineIllustration } from "@/components/landing/HouseLineIllustration";
import type { LandingImage } from "@/lib/landing-images";

export function ListingPhoto({
  image,
  alt,
  className = "",
  illustrationClassName = "h-full w-full p-8",
  priority = false,
}: {
  image: LandingImage;
  alt: string;
  className?: string;
  illustrationClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
    <div className={["relative overflow-hidden", className].join(" ")}>
      <div
        className={[
          "absolute inset-0 bg-gradient-to-br from-bookr-stripe-1/20 via-cream/60 to-bookr-stripe-1/10 transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100",
        ].join(" ")}
        aria-hidden="true"
      />
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={image.sizes}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={[
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
    </div>
  );
}