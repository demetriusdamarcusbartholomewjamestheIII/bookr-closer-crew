import { Link } from "@tanstack/react-router";
import { BookrLogo } from "@/components/BookrLogo";
import { CONTACT_EMAIL } from "@/lib/bookr-constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream/40 text-navy/65">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 border-b border-charcoal/10 pb-8 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="inline-flex items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-2"
          >
            <BookrLogo height={28} variant="dark" />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
            <a href="/#how-it-works" className="transition-colors hover:text-navy">
              How it works
            </a>
            <a href="/#pricing" className="transition-colors hover:text-navy">
              Pricing
            </a>
            <a href="/#faq" className="transition-colors hover:text-navy">
              FAQ
            </a>
            <Link to="/privacy" className="transition-colors hover:text-navy">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-navy">
              Terms of Service
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-navy">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs md:flex-row md:items-center md:justify-between">
          <p>© 2026 Bookr. All rights reserved.</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}