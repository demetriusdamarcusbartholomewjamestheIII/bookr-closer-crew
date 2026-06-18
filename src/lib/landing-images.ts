export type LandingImage = {
  src: string;
  srcSet?: string;
  sizes?: string;
  width: number;
  height: number;
};

/** Self-hosted, compressed — served from same origin (fast cold start) */
export const LANDING_IMAGES = {
  listingExterior: {
    src: "/images/listing-exterior-800.jpg",
    srcSet:
      "/images/listing-exterior-480.jpg 480w, /images/listing-exterior-800.jpg 800w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px",
    width: 800,
    height: 533,
  },
  listingInterior: {
    src: "/images/listing-interior-640.jpg",
    width: 640,
    height: 427,
  },
} as const satisfies Record<string, LandingImage>;