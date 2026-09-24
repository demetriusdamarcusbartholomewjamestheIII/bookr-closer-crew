import { Link } from "@tanstack/react-router";
import { BookrLogo } from "@/components/BookrLogo";
import { useSectionHref } from "@/hooks/use-section-href";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  BUSINESS_ADDRESS,
  LEGAL_OPERATOR,
} from "@/lib/bookr-constants";

// Full-height touch targets on phones and tablets; compact text links on desktop
const LINK_CLASS =
  "inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2 lg:min-h-0";

export function SiteFooter() {
  const sectionHref = useSectionHref();

  return (
    <footer className="border-t border-charcoal/10 bg-bookr-base text-navy-muted">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-8 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="-my-2 inline-flex items-center self-start rounded-sm py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bookr-stripe-2 md:self-auto"
          >
            <BookrLogo height={28} variant="dark" />
          </Link>
          <nav
            className="grid grid-cols-2 gap-x-6 text-sm sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
            aria-label="Footer"
          >
            <a href={sectionHref("how-it-works")} className={LINK_CLASS}>
              How it works
            </a>
            <a href={sectionHref("pricing")} className={LINK_CLASS}>
              Pricing
            </a>
            <a href={sectionHref("faq")} className={LINK_CLASS}>
              FAQ
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_CLASS}>
              Contact
            </a>
            <Link to="/privacy" className={LINK_CLASS}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={LINK_CLASS}>
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-4 text-xs md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Bookr. All rights reserved.</p>
            <p>Bookr is a service operated by {LEGAL_OPERATOR} (sole proprietor).</p>
            <p>{BUSINESS_ADDRESS}</p>
          </div>
          <div className="flex flex-col md:items-end">
            <a href={CONTACT_PHONE_HREF} className={LINK_CLASS}>
              {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_CLASS}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
