import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookrLogo } from "@/components/BookrLogo";
import { BOOKING_URL } from "@/lib/bookr-constants";

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
          ? "border-white/10 bg-navy/95 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.45)] backdrop-blur-md"
          : "border-transparent bg-navy",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-1"
        >
          <BookrLogo height={28} variant="light" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-1"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="hidden items-center gap-1 rounded-full border border-white/12 bg-white/6 px-1 py-0.5 text-[10px] font-medium text-white/60 sm:flex"
            aria-hidden
          >
            <span className="rounded-full bg-white/12 px-2 py-0.5 text-white/90">EN</span>
            <span className="px-1">·</span>
            <span className="px-2 py-0.5">ES</span>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-bookr-stripe-2 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-bookr-stripe-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}