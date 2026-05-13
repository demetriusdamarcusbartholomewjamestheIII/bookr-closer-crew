import { Link } from "@tanstack/react-router";
import logo from "@/assets/bookr-logo.png";

export function SiteHeader({ variant = "navy" }: { variant?: "navy" | "light" }) {
  const onNavy = variant === "navy";
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 ${onNavy ? "" : "border-b border-border bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Bookr" className="h-7 md:h-8 w-auto" />
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "Inter, sans-serif", color: "#3b4a6b" }}
          >
            Bookr
          </span>
        </Link>
      </div>
    </header>
  );
}
