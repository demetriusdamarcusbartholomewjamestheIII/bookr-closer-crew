import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { BookrFormEmbed } from "@/components/BookrFormEmbed";
import { BilingualTypingDemo } from "@/components/landing/BilingualTypingDemo";
import { CtaBand } from "@/components/landing/CtaBand";
import { HandsFreeDemo } from "@/components/landing/HandsFreeDemo";
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
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/bookr-constants";
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
      <DiffListings />
      <CtaBand />
      <HowItWorks />
      <Guarantee />
      <CtaBand />
      <Pricing />
      <Founder />
      <TestimonialsPlaceholder />
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
            <h1 className="font-display text-[1.875rem] font-bold leading-[1.12] tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Every lead, answered in seconds — and booked on your calendar.
            </h1>
            <p className="prose-measure mt-4 text-base text-navy/65 sm:text-lg">
              Bilingual replies, qualification, and booking — done for you, day or night.
            </p>
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.05}>
            <div className="bookr-card-elevated rounded-2xl p-8 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                78%
              </p>
              <p className="mt-3 text-base font-medium leading-snug text-navy/80">
                of buyers go with the first agent to respond
              </p>
              <p className="mt-4 text-[11px] text-navy/40">
                Source: Lead Response Management Study (MIT / InsideSales)
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bookr-card-elevated rounded-2xl p-8 sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                Hours
              </p>
              <p className="mt-3 text-base font-medium leading-snug text-navy/80">
                average time a business takes to reply
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
          <FadeUp className="lg:order-1">
            <LeadsFlowDemo />
          </FadeUp>
          <FadeUp delay={0.06} className="lg:order-2">
            <SectionHeading
              title="Works with the leads you already get."
              subline="Zillow, Facebook, Instagram, your site — answered the moment they arrive."
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── DIFF 4: split image/text on cream ─── */
function DiffListings() {
  return (
    <section className="bookr-section-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <FadeUp>
            <HouseLineIllustration className="mb-8 h-28 w-36 opacity-90 sm:h-32 sm:w-40" />
            <SectionHeading
              title="Buyers ask about your listings. Bookr answers — instantly."
              subline="Listing details, showings, midnight inquiries — handled from your data."
            />
            <div className="mt-8 hidden lg:block">
              <img
                src={LANDING_IMAGES.listingInterior}
                alt="Bright, modern living room interior"
                className="bookr-card-elevated aspect-[4/3] w-full max-w-sm rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
                width={1400}
                height={933}
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
    { n: "01", title: "Lead comes in", body: "Zillow, social, web, or SMS — received immediately." },
    { n: "02", title: "Answered in seconds", body: "Warm reply in English or Spanish." },
    { n: "03", title: "Qualified", body: "Timeline, financing, listing questions handled." },
    { n: "04", title: "Booked for you", body: "Real slots from your Google Calendar." },
  ];

  return (
    <section id="how-it-works" className="bookr-section-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
            title="From inquiry to booked showing — without you in the middle."
          />
        </FadeUp>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.05}>
              <article className="bookr-card-elevated rounded-2xl p-8">
                <p className="font-display text-2xl font-bold text-navy/30">{s.n}</p>
                <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-base text-navy/60">{s.body}</p>
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
    <section id="pricing" className="bookr-section-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
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
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
}) {
  return (
    <FadeUp>
      <div className="bookr-card-elevated flex h-full flex-col rounded-2xl p-8 sm:p-10">
        <h3 className="font-display text-2xl font-bold text-navy">{name}</h3>
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

/* ─── FOUNDER — split text / illustration ─── */
function Founder() {
  return (
    <section className="bookr-section-base border-t border-charcoal/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <FadeUp>
            <SectionHeading title="Built by an agent, for agents." subline="Ian — founder" />
            <div className="prose-measure mt-6 space-y-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              <p>
                I built Bookr after watching agents lose deals on response time and language — not
                skill. The lead came in at 9pm. The reply went out at 9am. The showing was already
                booked elsewhere.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block font-medium text-navy underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="bookr-card-elevated flex items-center justify-center rounded-2xl p-10">
              <HouseLineIllustration className="h-36 w-44 sm:h-44 sm:w-52" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function TestimonialsPlaceholder() {
  return (
    <section className="bookr-section-periwinkle border-y border-charcoal/8 py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <FadeUp>
          <p className="text-base font-medium text-navy/50">
            Agent stories coming soon — real names, real results.
          </p>
        </FadeUp>
      </div>
    </section>
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
    <section id="faq" className="bookr-section-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeUp>
          <SectionHeading align="center" title="FAQ" />
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
    <section className="bookr-section-cream border-t border-charcoal/8 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeUp>
          <SectionHeading
            align="center"
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
    <section id="contact" className="bookr-section-base border-t border-charcoal/8 py-16 sm:py-20">
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