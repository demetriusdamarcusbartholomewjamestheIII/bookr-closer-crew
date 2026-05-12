import { Link } from "@tanstack/react-router";

export function SiteHeader({ variant = "navy" }: { variant?: "navy" | "light" }) {
  const onNavy = variant === "navy";
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 ${onNavy ? "" : "border-b border-border bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tight ${onNavy ? "text-white" : "text-charcoal"}`}
        >
          Bookr
        </Link>
        <a
          href="#"
          className={`text-sm ${onNavy ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-charcoal"} transition-colors`}
        >
          Sign in
        </a>
      </div>
    </header>
  );
}
