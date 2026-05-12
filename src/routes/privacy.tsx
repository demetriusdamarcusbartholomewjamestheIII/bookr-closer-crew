import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bookr" },
      { name: "description", content: "How Bookr collects, uses, and protects your information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="bg-white text-charcoal">
      <div className="bg-white pt-24 pb-4">
        <SiteHeader variant="light" />
      </div>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-charcoal/60">Last updated: 2026</p>
        <div className="prose mt-10 space-y-6 text-charcoal/80">
          <Section title="Information we collect">
            We collect the information you provide when signing up for Bookr (name,
            email, phone, business details), as well as data needed to operate the
            service on your behalf — including lead messages, calendar availability,
            and connected platform metadata.
          </Section>
          <Section title="How we use information">
            We use your information to run the Bookr service: replying to your
            leads, booking appointments on your calendar, sending you summary
            emails, and improving the quality of our service for you specifically.
          </Section>
          <Section title="Cookies">
            We use essential cookies to keep you signed in and analytics cookies to
            understand how the marketing site is used. You can disable non-essential
            cookies in your browser settings.
          </Section>
          <Section title="Data sharing">
            We never sell your data. We share data only with subprocessors strictly
            required to deliver the service (hosting, messaging providers, calendar
            APIs).
          </Section>
          <Section title="Your rights">
            You can request access, correction, export, or deletion of your data at
            any time by emailing ian@heybookr.com. Revoking Bookr's access to a
            connected account (Facebook, Google, etc.) immediately stops data flow.
          </Section>
          <Section title="Contact">
            Questions? Email us at <a href="mailto:ian@heybookr.com" className="text-navy underline">ian@heybookr.com</a>.
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
