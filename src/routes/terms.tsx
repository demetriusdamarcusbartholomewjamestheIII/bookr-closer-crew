import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Bookr" },
      {
        name: "description",
        content:
          "The terms and conditions governing your access to and use of Bookr's lead response and appointment-booking services.",
      },
    ],
  }),
  component: TermsPage,
});

const LAST_UPDATED = "June 12, 2026";
const CONTACT_EMAIL = "ian@heybookr.com";

function TermsPage() {
  return (
    <main className="bg-white text-charcoal">
      <div className="bg-white pt-24 pb-4">
        <SiteHeader variant="light" />
      </div>
      <article className="mx-auto max-w-3xl px-6 pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-charcoal/60">Last updated: {LAST_UPDATED}</p>
        <p className="mt-6 leading-relaxed text-charcoal/75">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the services
          offered by Bookr through{" "}
          <a href="https://www.heybookr.com" className="text-navy underline-offset-2 hover:underline">
            heybookr.com
          </a>{" "}
          and related onboarding, messaging, and calendar integrations (collectively, the
          &quot;Service&quot;). By requesting a demo, creating an account, or using the Service, you
          agree to these Terms. If you do not agree, do not use the Service.
        </p>

        <div className="mt-12 space-y-10 text-charcoal/80">
          <Section title="1. Definitions">
            <List
              items={[
                "\"Client\" or \"you\" means the real estate professional or business entity that subscribes to Bookr.",
                "\"Lead\" means a prospective buyer, seller, renter, or other individual who contacts you through a connected channel.",
                "\"Content\" means messages, scripts, templates, data, and materials you or your Leads provide to or through the Service.",
                "\"Connected Platforms\" means third-party services you authorize Bookr to access, such as Meta, Google, CRM tools, SMS providers, and calendar systems.",
              ]}
            />
          </Section>

          <Section title="2. Service description">
            <p>
              Bookr is a done-for-you lead handling service for real estate professionals. Subject to
              your configuration and onboarding instructions, Bookr may:
            </p>
            <List
              items={[
                "Receive and respond to inbound Leads through authorized channels.",
                "Qualify Leads using criteria you approve during onboarding.",
                "Propose and book appointments on your connected calendar.",
                "Send follow-up messages and confirmations consistent with your approved workflow.",
                "Provide reporting or supervision tools as made available in your plan.",
              ]}
            />
            <p className="mt-4">
              Bookr is not a law firm, brokerage, escrow provider, or licensed real estate entity. We
              do not provide legal, tax, or transaction advice. You remain solely responsible for
              compliance with real estate licensing rules, fair housing laws, advertising
              requirements, and disclosures in your market.
            </p>
          </Section>

          <Section title="3. Eligibility and account responsibility">
            <p>
              You represent that you are at least 18 years old, legally able to enter contracts, and
              authorized to bind any business entity on whose behalf you subscribe. You are responsible
              for maintaining accurate account information, safeguarding login credentials, and all
              activity occurring under your account.
            </p>
            <p className="mt-4">
              You agree to cooperate during onboarding by providing timely access to Connected
              Platforms, accurate calendar availability, and approved messaging guidelines.
            </p>
          </Section>

          <Section title="4. Client obligations">
            <p>You agree that you will:</p>
            <List
              items={[
                "Obtain all permissions and consents required to allow Bookr to communicate with your Leads on your behalf.",
                "Ensure your use of the Service complies with applicable laws, brokerage policies, MLS rules, and Connected Platform terms.",
                "Review and approve conversation flows, qualification logic, and booking rules during setup and when material changes are needed.",
                "Promptly notify Bookr of changes to availability, market focus, compliance requirements, or incidents that may affect Lead handling.",
                "Not use the Service for unlawful, deceptive, harassing, or unsolicited bulk messaging.",
              ]}
            />
          </Section>

          <Section title="5. Fees, billing, and payment">
            <p>
              Subscription fees are billed monthly in advance at the rates published on heybookr.com at
              the time you subscribe, unless otherwise agreed in writing during onboarding. All fees are
              quoted in U.S. dollars unless stated otherwise.
            </p>
            <p className="mt-4">
              You authorize Bookr and our payment processor to charge your payment method on a
              recurring basis until you cancel. If a payment fails, we may suspend the Service after
              reasonable notice. Applicable taxes may be added where required.
            </p>
            <p className="mt-4">
              We may change pricing upon at least 30 days&apos; notice. Price changes apply to the next
              billing cycle after notice. If you do not agree to a price change, you may cancel before
              it takes effect.
            </p>
          </Section>

          <Section title="6. Cancellation and refunds">
            <p>
              You may cancel at any time by contacting{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              or through any cancellation method we make available in your account. Cancellation stops
              future charges and takes effect at the end of your current paid billing period unless we
              agree otherwise in writing.
            </p>
            <p className="mt-4">
              Except where required by law, fees are non-refundable and we do not provide prorated
              refunds for partial months. Upon cancellation, we will disconnect integrations and handle
              your data as described in our Privacy Policy.
            </p>
          </Section>

          <Section title="7. Acceptable use and platform compliance">
            <p>
              You may not use the Service to transmit spam, phishing content, malware, or messages that
              infringe intellectual property or privacy rights. You may not attempt to reverse engineer,
              scrape, overload, or interfere with the Service or its security controls.
            </p>
            <p className="mt-4">
              Your use of Connected Platforms remains subject to each platform&apos;s terms and
              policies (including Meta, Google, telecommunications carriers, and CRM providers). You are
              responsible for maintaining compliant opt-in/consent practices for SMS and other regulated
              channels. Bookr may suspend or limit the Service if we reasonably believe your use poses
              legal, platform, or reputational risk.
            </p>
          </Section>

          <Section title="8. Intellectual property">
            <p>
              Bookr and its licensors own the Service, website, branding, software, documentation, and
              all related intellectual property, except for Content you provide. You retain ownership of
              your Content. You grant Bookr a non-exclusive license to use, host, copy, and process
              your Content solely to provide and improve the Service for you.
            </p>
            <p className="mt-4">
              You may not use Bookr trademarks without prior written permission. Feedback you provide may
              be used by Bookr without restriction or compensation.
            </p>
          </Section>

          <Section title="9. Confidentiality">
            <p>
              Each party may receive non-public business, technical, or Lead information from the
              other. Both parties agree to use such information only for purposes of the relationship
              and to protect it with reasonable care. This obligation does not apply to information that
              is publicly available, independently developed, or lawfully received from a third party
              without confidentiality restrictions.
            </p>
          </Section>

          <Section title="10. Disclaimers">
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE MAXIMUM
              EXTENT PERMITTED BY LAW, BOOKR DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR
              STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              We do not guarantee that every Lead will respond, convert, or attend a booked appointment.
              Response times, booking rates, and conversation quality depend on Lead behavior, market
              conditions, your configuration, and third-party platform availability. You acknowledge
              that automated and human-assisted workflows may occasionally produce errors, delays, or
              misinterpretations despite reasonable safeguards.
            </p>
          </Section>

          <Section title="11. Limitation of liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BOOKR AND ITS OFFICERS, EMPLOYEES, CONTRACTORS,
              AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST REVENUE, LOST BUSINESS
              OPPORTUNITIES, OR LOSS OF GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-4">
              BOOKR&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THE SERVICE OR THESE
              TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO BOOKR IN THE THREE (3)
              MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US
              $100). SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO THESE LIMITS MAY NOT APPLY
              TO YOU IN FULL.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless Bookr from and against claims, damages,
              losses, and expenses (including reasonable attorneys&apos; fees) arising out of or related
              to: (a) your Content or Lead communications; (b) your breach of these Terms or applicable
              law; (c) your use of Connected Platforms; or (d) disputes between you and your Leads,
              brokers, or regulators, except to the extent caused by Bookr&apos;s gross negligence or
              willful misconduct.
            </p>
          </Section>

          <Section title="13. Suspension and termination">
            <p>
              We may suspend or terminate access to the Service immediately if you materially breach
              these Terms, fail to pay fees, or create risk to Bookr, other clients, or third-party
              platforms. Upon termination, sections that by their nature should survive (including
              payment obligations accrued, intellectual property, disclaimers, limitation of
              liability, indemnity, and dispute provisions) will survive.
            </p>
          </Section>

          <Section title="14. Governing law and disputes">
            <p>
              These Terms are governed by the laws of the State of Delaware, excluding its conflict-of-law
              rules, except where mandatory consumer protections in your jurisdiction apply. Any dispute
              arising from these Terms or the Service will be brought in the state or federal courts
              located in Delaware, and each party consents to personal jurisdiction in those courts.
            </p>
            <p className="mt-4">
              Before filing a claim, you agree to contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy underline-offset-2 hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              and attempt to resolve the dispute informally for at least 30 days.
            </p>
          </Section>

          <Section title="15. Changes to these Terms">
            <p>
              We may modify these Terms from time to time. When we make material changes, we will post
              the updated Terms on this page and update the &quot;Last updated&quot; date. Material
              changes take effect no sooner than 30 days after posting unless required sooner by law or
              for security reasons. Continued use after the effective date constitutes acceptance.
            </p>
          </Section>

          <Section title="16. General">
            <p>
              These Terms constitute the entire agreement between you and Bookr regarding the Service
              and supersede prior understandings on the same subject. If any provision is held
              unenforceable, the remaining provisions remain in effect. You may not assign these Terms
              without Bookr&apos;s consent; Bookr may assign them in connection with a merger,
              acquisition, or sale of assets. Failure to enforce a provision is not a waiver.
            </p>
          </Section>

          <Section title="17. Contact">
            <p>
              Questions about these Terms? Email{" "}
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