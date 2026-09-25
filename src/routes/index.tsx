import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Phone } from "lucide-react";
import { BookrFormEmbed } from "@/components/BookrFormEmbed";
import { BilingualTypingDemo } from "@/components/landing/BilingualTypingDemo";
import { CapabilityStrip } from "@/components/landing/CapabilityStrip";
import { ListingPhoto } from "@/components/landing/ListingPhoto";
import { HeroGradientMesh } from "@/components/landing/HeroGradientMesh";
import { HeroLiveChat } from "@/components/landing/HeroLiveChat";
import { HouseLineIllustration } from "@/components/landing/HouseLineIllustration";
import { LandingNav } from "@/components/landing/LandingNav";
import { ListingQaDemo } from "@/components/landing/ListingQaDemo";
import { MessageUsLink } from "@/components/landing/MessageUsLink";
import { PrimaryCta } from "@/components/landing/PrimaryCta";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/Motion";
import {
  BOOKING_URL,
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/bookr-constants";
import { LANDING_IMAGES } from "@/lib/landing-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { name: "twitter:title", content: SITE_TITLE },
      {
        property: "og:description",
        content:
          "A bilingual lead desk for realtors. Replies, qualifies, and books — day and night.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Bookr" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      {
        rel: "preload",
        href: "/images/listing-exterior-800.jpg",
        as: "image",
        type: "image/jpeg",
      },
      {
        rel: "preload",
        href: "/images/listing-interior-640.jpg",
        as: "image",
        type: "image/jpeg",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="landing-page bg-bookr-base text-navy">
      <LandingNav />
      <Hero />
      <Problem />
      <Bilingual />
      <HowItWorks />
      <Showings />
      <Pricing />
      <Faq />
      <FinalCta />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="top" className="bookr-hero relative overflow-hidden">
      <HeroGradientMesh />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:pb-24 lg:pt-14">
        {/* grid-cols-1 = minmax(0,1fr): otherwise the chat header's one-line label sets the
            column's minimum width and the hero overflows on phones */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-bookr-stripe-2/35 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-bookr-stripe-3 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bookr-stripe-2 opacity-35" />
                <span className="relative h-2 w-2 rounded-full bg-bookr-stripe-2" />
              </span>
              Bilingual lead desk for realtors
            </p>
            <h1 className="font-display text-[1.875rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Every lead answered in under a minute — in English or Spanish.
            </h1>
            <p className="prose-measure mt-5 text-base font-medium leading-snug text-navy/85 sm:text-lg">
              Qualified and booked on your calendar, day or night. Done for you.
            </p>
            <CapabilityStrip />
            <div className="mt-8 hidden sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
              <PrimaryCta />
              <MessageUsLink />
            </div>
          </div>

          <div className="min-w-0">
            <HeroLiveChat />
            <div className="mt-6 flex flex-col items-end gap-2 sm:hidden">
              <PrimaryCta />
              <MessageUsLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM — stat cards grid on cream ─── */
function Problem() {
  return (
    <section className="bookr-section-cream border-t border-charcoal/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            title="You pay for leads you never answer in time."
            subline="The first agent to reply usually wins the client."
          />
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <FadeUp delay={0.05} className="h-full">
            <div className="bookr-card-elevated bookr-stat-accent flex h-full min-h-[220px] flex-col rounded-2xl p-8 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                47%
              </p>
              <p className="mt-3 flex-1 text-base font-medium leading-snug text-navy/80">
                of buyers — and 59% of sellers — hire the first agent they speak with
              </p>
              <p className="mt-4 text-[11px] text-navy/40">
                Source: Zillow Consumer Housing Trends Report, 2025
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="h-full">
            <div className="bookr-card-elevated bookr-stat-accent flex h-full min-h-[220px] flex-col rounded-2xl p-8 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                $181
              </p>
              <p className="mt-3 flex-1 text-base font-medium leading-snug text-navy/80">
                average cost of a portal lead in 2026
              </p>
              <p className="mt-4 text-[11px] text-navy/40">Source: REDX, 2026</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── BILINGUAL — full-width centered on periwinkle tint ─── */
const CHANNELS = ["Instagram", "Facebook", "Your website"];

function Bilingual() {
  return (
    <section className="bookr-section-periwinkle border-y border-charcoal/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="Bilingual"
            title="Answers in English or Spanish — automatically."
            subline="Spanish-speaking leads get native replies — not a translation."
          />
          <ul aria-label="Channels" className="mt-6 flex flex-wrap justify-center gap-2">
            {CHANNELS.map((channel) => (
              <li
                key={channel}
                className="rounded-lg border border-bookr-stripe-2/30 bg-white/80 px-3 py-2 text-sm font-semibold text-bookr-stripe-3 shadow-sm"
              >
                {channel}
              </li>
            ))}
          </ul>
        </FadeUp>
        <div className="mt-12">
          <FadeUp delay={0.08}>
            <BilingualTypingDemo />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS — cards grid on navy band (absorbs the old Hands-free + Channels sections) ─── */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Lead comes in", body: "Your website form, Facebook, or Instagram." },
    {
      n: "02",
      title: "Answered in under a minute",
      body: "In English or Spanish, matched to the lead.",
    },
    { n: "03", title: "Qualified", body: "Timeline, financing, and what they're looking for." },
    { n: "04", title: "Booked for you", body: "They pick a time on your calendar." },
  ];

  return (
    <section id="how-it-works" className="bookr-section-navy-band py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            inverted
            eyebrow="How it works"
            title="From new lead to booked appointment — without you in the middle."
          />
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 auto-rows-fr items-stretch gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.05} className="h-full">
              <article className="bookr-step-card flex h-full min-h-[180px] flex-col rounded-2xl p-8">
                <p className="font-display text-2xl font-bold text-bookr-stripe-3/50">{s.n}</p>
                <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-navy/60">{s.body}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <p className="prose-measure mx-auto mt-12 text-center text-base leading-relaxed text-white/85 sm:text-lg">
            Setup is on us: one 30-minute call to connect your calendar and pages. Then you never
            touch a thing.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCta />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── SHOWINGS — split image/text (base tint, so it doesn't merge into the cream pricing band) ─── */
function Showings() {
  return (
    <section className="bookr-section-base py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <FadeUp>
            <HouseLineIllustration className="mb-8 h-28 w-36 opacity-90 sm:h-32 sm:w-40" />
            <SectionHeading
              eyebrow="Listings"
              title="Buyer asking about a listing? Bookr books the showing."
              subline="Day or night, the tour lands on your calendar. You cover the details in person."
            />
            <div className="mt-8 hidden lg:block">
              <ListingPhoto
                image={LANDING_IMAGES.listingInterior}
                alt="Bright modern living room interior"
                className="bookr-card-elevated aspect-[4/3] w-full max-w-sm rounded-2xl"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <ListingQaDemo />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  return (
    <section id="pricing" className="bookr-section-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="One saved commission covers months of Bookr."
            subline="Starts at $197/mo. No setup fees."
          />
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <PricingCard
            name="Standard"
            price="$197"
            badge="Available now"
            featured
            desc="Website forms, Facebook, and Instagram."
            features={[
              "Replies in under a minute, 24/7",
              "English & Spanish, auto-detected",
              "Qualifies and books on your calendar",
              "Books showings on your listings",
              "Done-for-you setup",
            ]}
          />
          <PricingCard
            name="Pro"
            price="$397"
            badge="Beta"
            showPhoneIcon
            desc="Everything in Standard, plus phone answering — in beta."
            features={[
              "Everything in Standard",
              "Answers missed calls",
              "Qualifies callers and books on the call",
            ]}
            footnote="Phone answering is in beta — we'll confirm availability on your demo."
            ctaLabel="Ask about early access"
            ctaVariant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  desc,
  features,
  badge,
  featured = false,
  showPhoneIcon = false,
  footnote,
  ctaLabel,
  ctaVariant = "primary",
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  badge: string;
  /** Primary plan: accent border + filled badge. Otherwise muted/secondary styling. */
  featured?: boolean;
  showPhoneIcon?: boolean;
  footnote?: string;
  ctaLabel?: string;
  ctaVariant?: "primary" | "secondary";
}) {
  return (
    <FadeUp className="h-full">
      <div
        className={[
          "relative flex h-full flex-col rounded-2xl p-8 sm:p-10",
          featured ? "bookr-card-featured -translate-y-1" : "bookr-card-elevated",
        ].join(" ")}
      >
        <div
          className={[
            "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]",
            featured
              ? "bg-bookr-stripe-2 text-white shadow-[0_4px_14px_rgba(91,107,206,0.45)]"
              : "border border-charcoal/15 bg-white text-navy/70 shadow-sm",
          ].join(" ")}
        >
          {badge}
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-display text-2xl font-bold text-navy">{name}</h3>
          {showPhoneIcon ? (
            <Phone className="h-4 w-4 text-bookr-stripe-3" strokeWidth={2.5} aria-hidden />
          ) : null}
        </div>
        <p className="mt-2 text-base text-navy/55">{desc}</p>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-display text-5xl font-bold tracking-tight text-navy">{price}</span>
          <span className="text-navy/45">/mo</span>
        </div>
        <ul className="mt-8 flex-1 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-base text-navy/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy/40" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
        {footnote ? <p className="mt-6 text-sm leading-snug text-navy/55">{footnote}</p> : null}
        <div className="mt-8">
          <PrimaryCta fullWidth label={ctaLabel} variant={ctaVariant} />
        </div>
      </div>
    </FadeUp>
  );
}

/* ─── FAQ ─── */
function Faq() {
  const faqs = [
    {
      q: "How much setup do I have to do?",
      a: (
        <>
          Almost none. One 30-minute call — we connect your calendar and pages, then go live.
          Texting switches on once carriers approve your number, usually within a week.{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            Book a walkthrough here
          </a>
          .
        </>
      ),
    },
    {
      q: "Do I have to change my CRM?",
      a: "No. Keep your CRM. Bookr answers where your leads already arrive and books on your calendar.",
    },
    {
      q: "Which leads does it answer?",
      a: "Your website form, Facebook, and Instagram — replies go out by text or DM. Portal leads like Zillow are on our roadmap; ask on your demo.",
    },
    {
      q: "Does it really speak Spanish?",
      a: "Yes — native Spanish, auto-detected per message.",
    },
    {
      q: "What does it cost?",
      a: "Standard is $197/mo. Pro, with phone answering in beta, is $397/mo. No setup fees.",
    },
  ];

  return (
    <section id="faq" className="bookr-section-periwinkle py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading align="center" eyebrow="Questions" title="FAQ" />
        </FadeUp>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="bookr-card-elevated group rounded-xl px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-navy marker:content-none">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-navy/35 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-3 pb-1 text-base leading-relaxed text-navy/60">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCta() {
  return (
    <section className="bookr-section-navy-band py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            inverted
            eyebrow="Get started"
            title="See it answer your next lead."
            subline="30-minute walkthrough — your leads and your calendar."
          />
          <div className="mt-10 flex justify-center">
            <PrimaryCta />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── GHL FORM ─── */
function ContactForm() {
  return (
    <section id="contact" className="bookr-section-cream border-t border-charcoal/8 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <SectionHeading align="center" title="Prefer a form?" subline="We'll reach out." />
        </div>
        <div className="mt-10">
          <BookrFormEmbed embedId="bookr-demo-form" label="Request a callback" />
        </div>
      </div>
    </section>
  );
}