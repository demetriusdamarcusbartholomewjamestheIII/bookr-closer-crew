import { Link } from "@tanstack/react-router";
import { BookrLogo } from "@/components/BookrLogo";

export function SiteHeader({ variant = "navy" }: { variant?: "navy" | "light" }) {
  const onNavy = variant === "navy";
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 ${onNavy ? "" : "border-b border-border bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8" style={{ paddingTop: 18, paddingBottom: 18 }}>
        <Link to="/" className="flex items-center">
          <BookrLogo height={32} />
        </Link>
      </div>
    </header>
  );
}
