import { Link } from "@tanstack/react-router";
import { BookrLogo } from "@/components/BookrLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-white/65">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="inline-flex items-center">
            <BookrLogo height={28} variant="light" />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="/#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <a href="mailto:ian@heybookr.com" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bookr. All rights reserved.</p>
          <a href="mailto:ian@heybookr.com" className="transition-colors hover:text-white">
            ian@heybookr.com
          </a>
        </div>
      </div>
    </footer>
  );
}