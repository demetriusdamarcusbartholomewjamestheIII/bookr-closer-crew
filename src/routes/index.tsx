import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { BookrFormEmbed } from "@/components/BookrFormEmbed";
import { BilingualTypingDemo } from "@/components/landing/BilingualTypingDemo";
import { CtaBand } from "@/components/landing/CtaBand";
import { DiffSection } from "@/components/landing/DiffSection";
import { FloatingPropertyCards } from "@/components/landing/FloatingPropertyCards";
import { HandsFreeDemo } from "@/components/landing/HandsFreeDemo";
import { HeroGradientMesh } from "@/components/landing/HeroGradientMesh";
import { HeroLiveChat } from "@/components/landing/HeroLiveChat";
import { SectionImageAccent } from "@/components/landing/SectionImageAccent";
import { LandingNav } from "@/components/landing/LandingNav";
import { LeadsFlowDemo } from "@/components/landing/LeadsFlowDemo";
import { ListingQaDemo } from "@/components/landing/ListingQaDemo";
import { PrimaryCta } from "@/components/landing/PrimaryCta";
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
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="lg:pt-4">
            <h1 className="font-display text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              Every lead, answered in seconds — and booked on your calendar.
            </h1>
            <p className="prose-measure mt-5 text-base leading-relaxed text-navy/70 sm:text-lg sm:leading-[1.55]">
              Bookr replies to every new lead in seconds, day or night, in English or Spanish,
              qualifies them, and books them on your calendar. You never lift a finger — and you
              never log in.
            </p>
            <div className="mt-8 hidden sm:block">
              <PrimaryCta />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative min-h-[420px] pt-4 sm:pt-8">
              <FloatingPropertyCards />
              <HeroLiveChat />
            </div>
            <div className="mt-6 flex justify-end sm:hidden">
              <PrimaryCta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  return (
    <section className="bookr-section-cream relative overflow-hidden border-t border-charcoal/8 py-20 sm:py-28">
      <SectionImageAccent
        src={LANDING_IMAGES.accentKitchen}
        alt=""
        className="-right-8 top-8 h-48 w-64 md:h-56 md:w-80"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display max-w-[65ch] text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl lg:text-4xl">
            You pay for leads you never answer in time.
          </h2>
          <p className="prose-measure mt-4 text-lg leading-relaxed text-navy/65">
            Speed wins listings. Most agents reply hours after the lead arrives.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.05}>
            <div className="bookr-card-elevated rounded-2xl p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
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
            <div className="bookr-card-elevated rounded-2xl p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
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

/* ─── DIFFERENTIATORS ─── */
function DiffHandsFree() {
  return (
    <DiffSection
      title="You never touch a thing."
      subline="Every tool you've tried died because you had to learn it. We set Bookr up for you — it runs, you close."
      visual={<HandsFreeDemo />}
    />
  );
}

function DiffBilingual() {
  return (
    <section className="bookr-section-surface relative border-y border-charcoal/8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display max-w-[65ch] text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl lg:text-4xl">
            Answers in English or Spanish — automatically.
          </h2>
          <p className="prose-measure mt-4 text-lg leading-relaxed text-navy/65">
            A Spanish-speaking lead gets answered in Spanish, instantly, around the clock. Most
            competitors only speak English.
          </p>
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

function DiffLeadSources() {
  return (
    <DiffSection
      title="Works with the leads you already get."
      subline="Plugs into Zillow, Facebook, Instagram, and your website — and answers the moment they arrive."
      visual={<LeadsFlowDemo />}
    />
  );
}

function DiffListings() {
  return (
    <DiffSection
      title="Buyers ask about your listings. Bookr answers — instantly."
      subline="A buyer asks about one of your homes at midnight. Bookr answers from your listing details and books the showing."
      visual={<ListingQaDemo />}
    />
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Lead comes in",
      body: "Zillow, Facebook, Instagram, your website, or SMS — Bookr receives it immediately.",
    },
    {
      n: "02",
      title: "Answered in seconds",
      body: "A warm reply in English or Spanish, matched to how you sell.",
    },
    {
      n: "03",
      title: "Qualified + questions handled",
      body: "Timeline, financing, and listing questions — answered from your own listings.",
    },
    {
      n: "04",
      title: "Booked & handed to you",
      body: "Real slots from your Google Calendar. You show up ready to close.",
    },
  ];

  return (
    <section id="how-it-works" className="bookr-section-light py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display max-w-[65ch] text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl lg:text-4xl">
            From inquiry to booked showing — without you in the middle.
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.05}>
              <article className="bookr-card-elevated rounded-2xl p-8">
                <p className="font-display text-2xl font-semibold text-navy/35">{s.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="prose-measure mt-2 text-base leading-relaxed text-navy/60">
                  {s.body}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── GUARANTEE ─── */
function Guarantee() {
  return (
    <section className="bookr-section-cream py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl lg:text-4xl">
            We put our skin in the game.
          </h2>
          <p className="prose-measure mx-auto mt-5 text-lg leading-relaxed text-navy/70">
            Free setup and a pilot period. You pay when Bookr is booking appointments on your
            calendar — terms finalized on your walkthrough. No lock-in until it&apos;s working for
            you.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  return (
    <section id="pricing" className="bookr-section-surface py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display max-w-[65ch] text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl lg:text-4xl">
            One saved commission covers months of Bookr.
          </h2>
          <p className="prose-measure mt-4 text-lg leading-relaxed text-navy/60">
            Inside sales assistants run $1,500–3,000/mo. Bookr starts at $197/mo.
          </p>
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

        <p className="prose-measure mx-auto mt-10 text-center text-base text-navy/50">
          No setup fees. Cancel anytime.
        </p>
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
    <div className="bookr-card-elevated flex flex-col rounded-2xl p-8 sm:p-10">
      <h3 className="font-display text-2xl font-semibold text-navy">{name}</h3>
      <p className="mt-2 text-base text-navy/55">{desc}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-semibold tracking-tight text-navy">{price}</span>
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
  );
}

/* ─── FOUNDER ─── */
function Founder() {
  return (
    <section className="bookr-section-base relative overflow-hidden border-t border-charcoal/8 py-20 sm:py-28">
      <SectionImageAccent
        src={LANDING_IMAGES.heroInterior}
        alt=""
        className="-left-12 bottom-0 h-40 w-56 md:h-52 md:w-72"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-14">
          <FadeUp>
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl border border-charcoal/10 bg-cream text-2xl font-semibold text-navy/80"
              aria-hidden
            >
              I
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">Ian</h2>
            <div className="prose-measure mt-5 space-y-4 text-lg leading-relaxed text-navy/70">
              <p>
                I built Bookr after watching agents lose deals they should have won — on response
                time and language, not skill. The lead came in at 9pm. The reply went out at 9am.
                The showing was already booked elsewhere.
              </p>
              <p>
                Bookr is the lead desk I wished existed: fast, bilingual, done for you. You close
                deals. We handle the rest.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block text-base font-medium text-navy underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function TestimonialsPlaceholder() {
  return (
    <section className="bookr-section-base border-t border-charcoal/8 py-14 text-navy sm:py-16">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <FadeUp>
          <p className="text-base text-navy/45">
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
          Almost none. One walkthrough, one short onboarding — we connect your channels and go live.
          You don&apos;t log in daily.{" "}
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
      a: "No. Bookr works where your leads already arrive — Zillow, Facebook, Instagram, your site, SMS — and books on your Google Calendar.",
    },
    {
      q: "Will this work with my Zillow leads?",
      a: "Yes. Portal inquiries are a core intake path. Bookr replies in seconds, qualifies, and books showings.",
    },
    {
      q: "Does it really speak Spanish?",
      a: "Yes — native Spanish, auto-detected per message. Same qualification and booking flow in both languages.",
    },
    {
      q: "What does it cost?",
      a: "Standard is $197/mo. Pro with inbound calls is $397/mo. No setup fees. Cancel anytime.",
    },
  ];

  return (
    <section id="faq" className="bookr-section-surface py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">FAQ</h2>
        </FadeUp>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="bookr-card-elevated group rounded-xl px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-navy marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-navy/35 transition-transform group-open:rotate-180" />
              </summary>
              <div className="prose-measure mt-3 pb-1 text-base leading-relaxed text-navy/60">
                {faq.a}
              </div>
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
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl lg:text-4xl">
            See it answer your next lead.
          </h2>
          <p className="prose-measure mx-auto mt-4 text-lg leading-relaxed text-navy/65">
            30 minutes. We walk through your leads, your listings, and your calendar.
          </p>
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
          <h2 className="font-display text-xl font-semibold text-navy">Prefer a form?</h2>
          <p className="mt-2 text-base text-navy/55">Leave your details and we&apos;ll reach out.</p>
        </div>
        <div className="mt-10">
          <BookrFormEmbed embedId="bookr-demo-form" label="Request a callback" />
        </div>
      </div>
    </section>
  );
}