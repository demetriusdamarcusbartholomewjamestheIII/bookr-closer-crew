import { Link } from "@tanstack/react-router";
import logo from "@/assets/bookr-logo.png";

export function SiteHeader({ variant = "navy" }: { variant?: "navy" | "light" }) {
  const onNavy = variant === "navy";
  return (
    <header className={`absolute top-0 left-0 right-0 z-20 ${onNavy ? "" : "border-b border-border bg-white"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8" style={{ paddingTop: 18, paddingBottom: 18 }}>
        <Link to="/" className="flex items-center" style={{ gap: 10 }}>
          <img src={logo} alt="Bookr" style={{ height: 24, width: "auto", display: "block" }} />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1,
              color: "#3b4a6b",
              opacity: 1,
            }}
          >
            Bookr
          </span>
        </Link>
      </div>
    </header>
  );
}
