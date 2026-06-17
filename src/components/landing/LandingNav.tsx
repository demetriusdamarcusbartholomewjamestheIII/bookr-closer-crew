import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookrLogo } from "@/components/BookrLogo";
import { PrimaryCta } from "@/components/landing/PrimaryCta";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-charcoal/10 bg-white/95 shadow-[0_4px_24px_-8px_rgba(59,74,107,0.12)] backdrop-blur-md"
          : "border-transparent bg-white/80 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-2"
        >
          <BookrLogo height={28} variant="dark" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-navy/65 transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-2"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="hidden items-center gap-1 rounded-full border border-charcoal/10 bg-cream/60 px-1 py-0.5 text-[10px] font-medium text-navy/55 sm:flex"
            aria-hidden
          >
            <span className="rounded-full bg-white px-2 py-0.5 text-navy shadow-sm">EN</span>
            <span className="px-1">·</span>
            <span className="px-2 py-0.5">ES</span>
          </div>
          <PrimaryCta className="!min-h-11 !px-5 !text-sm" />
        </div>
      </div>
    </header>
  );
}