import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, Phone } from "lucide-react";
import { BookrFormEmbed } from "@/components/BookrFormEmbed";
import { BilingualTypingDemo } from "@/components/landing/BilingualTypingDemo";
import { CallsDemo } from "@/components/landing/CallsDemo";
import { CapabilityStrip } from "@/components/landing/CapabilityStrip";
import { CtaBand } from "@/components/landing/CtaBand";
import { HandsFreeDemo } from "@/components/landing/HandsFreeDemo";
import { ListingPhoto } from "@/components/landing/ListingPhoto";
import { HeroGradientMesh } from "@/components/landing/HeroGradientMesh";
import { HeroLiveChat } from "@/components/landing/HeroLiveChat";
import { HouseLineIllustration } from "@/components/landing/HouseLineIllustration";
import { LandingNav } from "@/components/landing/LandingNav";
import { LeadsFlowDemo } from "@/components/landing/LeadsFlowDemo";
import { ListingQaDemo } from "@/components/landing/ListingQaDemo";
import { PrimaryCta } from "@/components/landing/PrimaryCta";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/Motion";
import { BOOKING_URL, OG_IMAGE_URL, SITE_URL } from "@/lib/bookr-constants";
import { LANDING_IMAGES } from "@/lib/landing-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bookr — Every lead, answered in seconds" },
      {
        name: "description",
        content:
          "Bookr replies to every new lead in seconds, in English or Spanish, qualifies them, and books them on your calendar. Done for you.",
      },
      { property: "og:title", content: "Bookr — Every lead, answered in seconds" },
      {
        property: "og:description",
        content:
          "A bilingual lead desk for realtors. Replies, qualifies, and books — day and night.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Bookr" },
      { property: "og:image", content: OG_IMAGE_URL },
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
      <DiffHandsFree />
      <DiffBilingual />
      <DiffLeadSources />
      <DiffCalls />
      <DiffListings />
      <CtaBand />
      <HowItWorks />
      <Guarantee />
      <CtaBand />
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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-bookr-stripe-2/35 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-bookr-stripe-3 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bookr-stripe-2 opacity-35" />
                <span className="relative h-2 w-2 rounded-full bg-bookr-stripe-2" />
              </span>
              Bilingual lead desk
            </p>
            <h1 className="font-display text-[1.875rem] font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Every lead, answered in seconds — and booked on your calendar.
            </h1>
            <p className="prose-measure mt-5 text-base font-medium leading-snug text-navy/85 sm:text-lg">
              Bilingual replies, qualification, and booking — done for you, day or night.
            </p>
            <CapabilityStrip />
            <div className="mt-8 hidden sm:block">
              <PrimaryCta />
            </div>
          </div>

          <div>
            <HeroLiveChat />
            <div className="mt-6 flex justify-end sm:hidden">
              <PrimaryCta />
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
            subline="Speed wins listings — most agents reply hours late."
          />
        </FadeUp>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          <FadeUp delay={0.05} className="h-full">
            <div className="bookr-card-elevated bookr-stat-accent flex h-full min-h-[220px] flex-col rounded-2xl p-8 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                78%
              </p>
              <p className="mt-3 flex-1 text-base font-medium leading-snug text-navy/80">
                of buyers go with the first agent to respond
              </p>
              <p className="mt-4 text-[11px] text-navy/40">
                Source: Lead Response Management Study (MIT / InsideSales)
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="h-full">
            <div className="bookr-card-elevated bookr-stat-accent flex h-full min-h-[220px] flex-col rounded-2xl p-8 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                12 hrs
              </p>
              <p className="mt-3 flex-1 text-base font-medium leading-snug text-navy/80">
                average time for a business to reply by email
              </p>
              <p className="mt-4 text-[11px] text-navy/40">
                Source: Workato State of Inbound Lead Management
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── DIFF 1: centered statement on soft navy band ─── */
function DiffHandsFree() {
  return (
    <section className="bookr-section-navy-band py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            inverted
            eyebrow="Hands-free"
            title="You never touch a thing."
            subline="We set it up. It runs. You close."
          />
        </FadeUp>
        <div className="mx-auto mt-12 max-w-lg">
          <FadeUp delay={0.08}>
            <HandsFreeDemo />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── DIFF 2: full-width centered on periwinkle tint ─── */
function DiffBilingual() {
  return (
    <section className="bookr-section-periwinkle border-y border-charcoal/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="Bilingual"
            title="Answers in English or Spanish — automatically."
            subline="Spanish-speaking leads get native replies, instantly."
          />
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

/* ─── DIFF 3: split reversed — demo left, copy right ─── */
function DiffLeadSources() {
  return (
    <section className="bookr-section-base py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="order-2 lg:order-1">
            <LeadsFlowDemo />
          </FadeUp>
          <FadeUp delay={0.06} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Channels"
              title="Works with the leads you already get."
              subline="Zillow, Facebook, Instagram, your site — answered the moment they arrive."
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── DIFF 4: split — calls demo right, copy left ─── */
function DiffCalls() {
  return (
    <section className="bookr-section-navy-band py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <SectionHeading
              inverted
              eyebrow="Inbound calls · Pro"
              title="Missed calls get answered too."
              subline="Bookr picks up, qualifies, and books — in English or Spanish."
            />
          </FadeUp>
          <FadeUp delay={0.08}>
            <CallsDemo />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── DIFF 5: split image/text on cream ─── */
function DiffListings() {
  return (
    <section className="bookr-section-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <FadeUp>
            <HouseLineIllustration className="mb-8 h-28 w-36 opacity-90 sm:h-32 sm:w-40" />
            <SectionHeading
              eyebrow="Listings"
              title="Buyers ask about your listings. Bookr answers — instantly."
              subline="Listing details, showings, midnight inquiries — handled from your data."
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

/* ─── HOW IT WORKS — cards grid ─── */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Lead comes in", body: "Zillow, Instagram, social, web, SMS, or call — received immediately." },
    { n: "02", title: "Answered in seconds", body: "Warm reply in English or Spanish." },
    { n: "03", title: "Qualified", body: "Timeline, financing, listing questions handled." },
    { n: "04", title: "Booked for you", body: "Real slots from your Google Calendar." },
  ];

  return (
    <section id="how-it-works" className="bookr-section-periwinkle py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From inquiry to booked showing — without you in the middle."
          />
        </FadeUp>

        <div className="mt-14 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2">
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
      </div>
    </section>
  );
}

/* ─── GUARANTEE — big centered statement on navy band ─── */
function Guarantee() {
  return (
    <section className="bookr-section-navy-band py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            inverted
            title="We put our skin in the game."
            subline="Free setup. You pay when Bookr is booking on your calendar."
          />
        </FadeUp>
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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <PricingCard
            name="Standard"
            price="$197"
            desc="Zillow, social, SMS, and web forms."
            features={[
              "Replies in seconds, 24/7",
              "English & Spanish, auto-detected",
              "Qualifies and books on your calendar",
              "Answers questions on your listings",
              "Done-for-you setup",
            ]}
          />
          <PricingCard
            name="Pro"
            price="$397"
            highlighted
            desc="Everything in Standard, plus inbound calls."
            features={[
              "Everything in Standard",
              "Answers missed calls in English & Spanish",
              "Qualifies and books live on the phone",
              "Hot-lead transfer to your mobile",
            ]}
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
  highlighted = false,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <FadeUp>
      <div
        className={[
          "relative flex h-full flex-col rounded-2xl p-8 sm:p-10",
          highlighted ? "bookr-card-featured -translate-y-1" : "bookr-card-elevated",
        ].join(" ")}
      >
        {highlighted ? (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-bookr-stripe-2 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_14px_rgba(91,107,206,0.45)]">
            Most popular
          </div>
        ) : null}
        <div className="flex items-center gap-2">
          <h3 className="font-display text-2xl font-bold text-navy">{name}</h3>
          {highlighted ? <Phone className="h-4 w-4 text-bookr-stripe-3" strokeWidth={2.5} /> : null}
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
        <div className="mt-8">
          <PrimaryCta fullWidth />
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
          Almost none. One walkthrough — we connect your channels and go live.{" "}
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
      a: "No. Bookr works where your leads already arrive and books on your Google Calendar.",
    },
    {
      q: "Will this work with my Zillow leads?",
      a: "Yes. Portal inquiries are a core intake path.",
    },
    {
      q: "Does it really speak Spanish?",
      a: "Yes — native Spanish, auto-detected per message.",
    },
    {
      q: "What does it cost?",
      a: "Standard is $197/mo. Pro with inbound calls is $397/mo.",
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
            subline="30-minute walkthrough — your leads, listings, and calendar."
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