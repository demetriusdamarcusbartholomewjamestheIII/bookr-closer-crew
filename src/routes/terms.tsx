import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Bookr" },
      { name: "description", content: "The terms that govern your use of Bookr." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="bg-white text-charcoal">
      <div className="bg-white pt-24 pb-4">
        <SiteHeader variant="light" />
      </div>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-charcoal/60">Last updated: 2026</p>
        <div className="mt-10 space-y-6 text-charcoal/80">
          <Section title="Service description">
            Bookr is a done-for-you lead handling service for real estate
            professionals. We reply to your inbound leads, qualify them, and book
            appointments on your calendar according to the rules you and your
            onboarding specialist agree on.
          </Section>
          <Section title="Payment terms">
            Bookr is billed monthly in advance. Pricing is listed on heybookr.com
            and is subject to change with 30 days' notice. There are no setup fees
            and no annual contracts.
          </Section>
          <Section title="Cancellation">
            You can cancel at any time. Your service will continue through the end
            of the current billing period; we don't pro-rate refunds for partial
            months.
          </Section>
          <Section title="Acceptable use">
            You agree not to use Bookr for unsolicited messaging, harassment, or
            anything that violates the policies of connected platforms (Meta,
            Google, telecom carriers, etc.).
          </Section>
          <Section title="Liability">
            Bookr is provided "as is." We do our best to deliver excellent service,
            but we are not liable for indirect or consequential damages arising
            from use of the service. Total liability is limited to the amount you
            paid in the prior 3 months.
          </Section>
          <Section title="Contact">
            Questions about these terms? Email{" "}
            <a href="mailto:ian@heybookr.com" className="text-navy underline">ian@heybookr.com</a>.
          </Section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-charcoal">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </section>
  );
}
