import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bookr" },
      {
        name: "description",
        content:
          "How Bookr collects, uses, stores, and protects personal information for clients, leads, and website visitors.",
      },
    ],
  }),
  component: PrivacyPage,
});

const LAST_UPDATED = "June 12, 2026";
const CONTACT_EMAIL = "ian@heybookr.com";

function PrivacyPage() {
  return (
    <main className="bg-white text-charcoal">
      <div className="bg-white pt-24 pb-4">
        <SiteHeader variant="light" />
      </div>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-charcoal/60">Last updated: {LAST_UPDATED}</p>
        <p className="mt-6 leading-relaxed text-charcoal/75">
          This Privacy Policy describes how Bookr (&quot;Bookr,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) collects, uses, discloses, and protects information when you visit{" "}
          <a href="https://www.heybookr.com" className="text-navy underline-offset-2 hover:underline">
            heybookr.com
          </a>
          , request a demo, subscribe to our services, or otherwise interact with us. This policy
          applies to real estate professionals who use Bookr (&quot;Clients&quot;) and individuals
          whose information we process on a Client&apos;s behalf (&quot;Leads&quot; or
          &quot;End Users&quot;).
        </p>

        <div className="mt-12 space-y-10 text-charcoal/80">
          <Section title="1. Who we are">
            <p>
              Bookr provides a done-for-you lead response and appointment-booking service for real
              estate professionals. Our website is operated at heybookr.com. For privacy-related
              requests, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p>Depending on how you interact with Bookr, we may collect the following categories of information:</p>
            <List
              items={[
                "Account and contact information — name, email address, phone number, brokerage or business name, market area, and billing details you provide when signing up or requesting a demo.",
                "Service configuration data — calendar availability, response preferences, conversation scripts, qualification rules, and connected platform settings needed to operate the service on your behalf.",
                "Lead and communication data — messages, form submissions, contact details, and metadata from inbound leads received through connected channels (e.g., website forms, social platforms, SMS), including the content of conversations Bookr sends and receives while acting as your lead desk.",
                "Technical and usage data — IP address, browser type, device information, pages viewed, referral URLs, and similar analytics data collected through cookies and similar technologies on our marketing site.",
                "Support and correspondence — information you send us by email, chat, or during onboarding calls.",
              ]}
            />
            <p className="mt-4">
              We do not intentionally collect sensitive categories of personal information (such as
              government ID numbers, financial account credentials, or health information) unless you
              voluntarily provide them in a message thread or form field.
            </p>
          </Section>

          <Section title="3. How we use information">
            <p>We use personal information for legitimate business purposes, including to:</p>
            <List
              items={[
                "Provide, configure, monitor, and improve the Bookr service for Clients.",
                "Respond to inbound leads, qualify prospects, and schedule appointments on a Client's calendar according to agreed rules.",
                "Send service notifications, onboarding materials, billing communications, and support responses.",
                "Operate, secure, and troubleshoot our website, infrastructure, and integrations.",
                "Analyze aggregated usage of our marketing site to improve content and conversion.",
                "Comply with legal obligations, enforce our Terms of Service, and protect the rights and safety of Bookr, our Clients, and third parties.",
              ]}
            />
            <p className="mt-4">
              We do not sell personal information. We do not use Lead data to market unrelated
              third-party products to Leads on our own behalf.
            </p>
          </Section>

          <Section title="4. Legal bases for processing">
            <p>
              Where applicable privacy laws require a legal basis, we rely on: (a) performance of a
              contract with our Client; (b) our Client&apos;s and Bookr&apos;s legitimate interests in
              operating a responsive lead-handling service; (c) consent, where required (for example,
              certain cookies or marketing communications); and (d) compliance with legal obligations.
            </p>
            <p className="mt-4">
              When Bookr processes Lead information, we generally do so as a service provider /
              processor acting on instructions from the Client who controls the relationship with the
              Lead.
            </p>
          </Section>

          <Section title="5. How we share information">
            <p>
              We share information only as needed to deliver the service, operate our business, or
              comply with law. Categories of recipients may include:
            </p>
            <List
              items={[
                "Infrastructure and hosting providers that store and transmit data securely.",
                "Messaging, CRM, calendar, and automation platforms used to connect Client accounts and deliver responses (including platforms such as LeadConnector / GoHighLevel, Meta, Google, and telecommunications carriers).",
                "Payment processors that handle subscription billing.",
                "Professional advisors (lawyers, accountants) under confidentiality obligations.",
                "Law enforcement or regulators when required by valid legal process.",
              ]}
            />
            <p className="mt-4">
              We require subprocessors that handle personal information to provide appropriate
              contractual protections and to use data only for the purposes we specify.
            </p>
          </Section>

          <Section title="6. Cookies and similar technologies">
            <p>
              Our marketing website may use essential cookies required for basic functionality, as
              well as analytics cookies that help us understand traffic and page performance. Where
              required by law, we will obtain consent before placing non-essential cookies.
            </p>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may
              affect site functionality. We do not respond to &quot;Do Not Track&quot; browser signals
              in a uniform way across all third-party tools embedded on the site.
            </p>
          </Section>

          <Section title="7. Data retention">
            <p>
              We retain personal information for as long as necessary to provide the service, fulfill
              the purposes described in this policy, comply with legal obligations, resolve disputes,
              and enforce agreements. When a Client cancels, we delete or de-identify Client and Lead
              data within a reasonable period unless retention is required by law or legitimate backup
              / disaster-recovery practices. Backup copies may persist for a limited time before
              automatic deletion.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We implement administrative, technical, and organizational measures designed to protect
              personal information against unauthorized access, loss, misuse, or alteration. No method
              of transmission or storage is completely secure; we cannot guarantee absolute security.
            </p>
            <p className="mt-4">
              Clients are responsible for safeguarding credentials to connected accounts and for
              configuring access permissions appropriately within third-party platforms.
            </p>
          </Section>

          <Section title="9. Your rights and choices">
            <p>
              Depending on your location, you may have rights to access, correct, delete, restrict, or
              export personal information, and to object to certain processing or withdraw consent
              where processing is consent-based.
            </p>
            <p className="mt-4">
              Clients may submit requests regarding their account data by emailing{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>
              . Leads who wish to exercise privacy rights regarding communications handled for a
              specific agent should contact that agent directly; we will assist our Client in
              responding where appropriate.
            </p>
            <p className="mt-4">
              You may revoke Bookr&apos;s access to a connected platform (Facebook, Google, calendar
              tools, etc.) at any time through that platform&apos;s settings, which stops new data
              from flowing to Bookr.
            </p>
          </Section>

          <Section title="10. California privacy notice">
            <p>
              If you are a California resident, you may have additional rights under the California
              Consumer Privacy Act (CCPA), as amended, including the right to know what personal
              information we collect, request deletion, and opt out of certain sharing. Bookr does not
              sell personal information and does not share personal information for cross-context
              behavioral advertising in exchange for money or other valuable consideration.
            </p>
            <p className="mt-4">
              To submit a verifiable request, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with the subject line &quot;California Privacy Request.&quot; We will not discriminate
              against you for exercising privacy rights.
            </p>
          </Section>

          <Section title="11. Children's privacy">
            <p>
              Bookr is a business-to-business service directed to real estate professionals. Our
              website and service are not directed to children under 13 (or 16 where applicable), and
              we do not knowingly collect personal information from children. If you believe a child
              has provided us information, contact us and we will take appropriate steps to delete it.
            </p>
          </Section>

          <Section title="12. International users">
            <p>
              Bookr is based in the United States. If you access our services from outside the U.S.,
              your information may be transferred to, stored in, and processed in the United States or
              other countries where our providers operate. Those countries may have data-protection laws
              that differ from those in your jurisdiction.
            </p>
          </Section>

          <Section title="13. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. When we make material changes, we
              will post the revised policy on this page and update the &quot;Last updated&quot; date.
              Continued use of the service after changes become effective constitutes acceptance of the
              revised policy, except where additional consent is required by law.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              Questions about this Privacy Policy or our data practices? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
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
      <div className="mt-3 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}