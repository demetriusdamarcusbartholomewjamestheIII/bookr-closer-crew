import { Link } from "@tanstack/react-router";
import { BookDemoButton } from "@/components/BookrFormEmbed";
import { BookrLogo } from "@/components/BookrLogo";

export function SiteHeader({ variant = "light" }: { variant?: "navy" | "light" }) {
  const onDark = variant === "navy";

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-20 ${
        onDark ? "" : "border-b border-charcoal/5 bg-white/80 backdrop-blur-md"
      }`}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8"
        style={{ paddingTop: 16, paddingBottom: 16 }}
      >
        <Link to="/" className="flex items-center">
          <BookrLogo height={30} variant={onDark ? "light" : "dark"} />
        </Link>
        <BookDemoButton
          className={[
            "hidden rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:inline-flex",
            onDark
              ? "bg-white text-charcoal hover:bg-white/90"
              : "bg-bookr-stripe-3 text-white hover:bg-bookr-stripe-2",
          ].join(" ")}
        >
          Book demo
        </BookDemoButton>
      </div>
    </header>
  );
}