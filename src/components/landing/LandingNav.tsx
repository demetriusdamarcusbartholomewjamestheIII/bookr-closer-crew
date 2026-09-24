import { useEffect, useId, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Languages, Menu, X } from "lucide-react";
import { BookrLogo } from "@/components/BookrLogo";
import { PrimaryCta } from "@/components/landing/PrimaryCta";
import { useSectionHref } from "@/hooks/use-section-href";

const NAV_LINKS = [
  { id: "how-it-works", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-2";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuId = useId();
  const sectionHref = useSectionHref();
  const onHome = useRouterState({ select: (state) => state.location.pathname === "/" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close();
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => {
      if (desktop.matches) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      ref={headerRef}
      className={[
        "bookr-landing-nav sticky top-0 z-50 border-b transition-colors duration-200",
        solid
          ? "border-charcoal/10 bg-[#F0EEE8] shadow-[0_4px_24px_-8px_rgba(59,74,107,0.14)] sm:bg-[#F0EEE8]/95 sm:backdrop-blur-md"
          : "border-transparent bg-[#F0EEE8] sm:bg-[#F0EEE8]/90 sm:backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 min-[360px]:px-5 sm:px-8 sm:py-4">
        <Link
          to="/"
          onClick={(e) => {
            setMenuOpen(false);
            // Already home: glide back to the top instead of re-navigating (keeps UTM params)
            if (onHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`-my-2 shrink-0 rounded-sm py-2 ${FOCUS_RING}`}
        >
          <BookrLogo height={28} variant="dark" className="h-6 w-auto min-[360px]:h-7" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={sectionHref(l.id)}
              className={`-my-3 py-3 text-sm font-semibold text-navy transition-colors hover:text-bookr-stripe-3 ${FOCUS_RING}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Static "bilingual" badge — not a language switcher, so it shouldn't look like one */}
          <span
            className="hidden items-center gap-1.5 rounded-full border border-bookr-stripe-2/20 bg-white/60 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-bookr-stripe-3 sm:inline-flex"
            aria-hidden
          >
            <Languages className="h-3 w-3" strokeWidth={2.5} />
            EN · ES
          </span>
          <PrimaryCta size="compact" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-charcoal/10 bg-white/70 text-navy transition-colors hover:bg-white active:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" strokeWidth={2.25} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.25} aria-hidden />
            )}
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        aria-label="Main"
        className={[
          "absolute inset-x-0 top-full border-b border-charcoal/10 bg-[#F0EEE8] shadow-[0_16px_32px_-16px_rgba(59,74,107,0.3)] transition-[opacity,transform,visibility] duration-200 md:hidden",
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        ].join(" ")}
      >
        <ul className="mx-auto max-w-6xl px-3 py-2 min-[360px]:px-4">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={sectionHref(l.id)}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-semibold text-navy transition-colors active:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bookr-stripe-2"
              >
                {l.label}
                <ChevronRight className="h-4 w-4 text-navy/40" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
