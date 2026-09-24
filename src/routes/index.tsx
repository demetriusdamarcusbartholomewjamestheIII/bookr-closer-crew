import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Inbox,
  ListChecks,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
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
import { BOOKING_URL, OG_IMAGE_ALT, OG_IMAGE_URL, SITE_URL } from "@/lib/bookr-constants";
import { LANDING_IMAGES } from "@/lib/landing-images";
import { keepDashWithPrecedingWord } from "@/lib/typography";

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
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    // No image preloads: both listing photos sit far below the fold (one is desktop-only),
    // so preloading them only competed with fonts/CSS/JS on phones. They lazy-load instead.
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="landing-page bg-bookr-base text-navy">
      <LandingNav />
      <main id="main">
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
      </main>
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="top" className="bookr-hero relative overflow-hidden">
      <HeroGradientMesh />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-14">
        {/* grid-cols-1 = minmax(0,1fr): without it the chat header's nowrap title sets a
            ~310px min width and the hero overflows on 320px phones */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="min-w-0">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-bookr-stripe-2/35 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-bookr-stripe-3 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bookr-stripe-2 opacity-35" />
                <span className="relative h-2 w-2 rounded-full bg-bookr-stripe-2" />
              </span>
              Bilingual lead desk
            </p>
            <h1 className="font-display text-[1.875rem] font-bold leading-[1.1] tracking-tight text-navy min-[380px]:text-[2.125rem] sm:text-5xl sm:leading-[1.06] lg:text-[2.75rem] lg:leading-[1.08]">
              {keepDashWithPrecedingWord(
                "Every lead, answered in seconds — and booked on your calendar.",
              )}
            </h1>
            <p className="prose-measure mt-5 text-base font-medium leading-snug text-navy/85 sm:text-lg">
              Bilingual replies, qualification, and booking — done for you, day or night.
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-5">
              <PrimaryCta />
              <p className="text-center text-sm font-medium text-navy-muted sm:text-left">
                Done-for-you setup · No setup fees
              </p>
            </div>
            <CapabilityStrip />
          </div>

          <div className="min-w-0">
            <HeroLiveChat />
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

        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          <FadeUp delay={0.05} className="h-full">
            <div className="bookr-card-elevated bookr-stat-accent flex h-full flex-col rounded-2xl p-7 sm:min-h-[220px] sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                78%
              </p>
              <p className="mt-3 flex-1 text-base font-medium leading-snug text-navy/85">
                of buyers go with the first agent to respond
              </p>
              <p className="mt-4 text-[11px] leading-snug text-navy-muted">
                Source: Lead Response Management Study (MIT / InsideSales)
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="h-full">
            <div className="bookr-card-elevated bookr-stat-accent flex h-full flex-col rounded-2xl p-7 sm:min-h-[220px] sm:p-10">
              <p className="font-display text-5xl font-bold tracking-tight text-navy sm:text-6xl">
                12 hrs
              </p>
              <p className="mt-3 flex-1 text-base font-medium leading-snug text-navy/85">
                average time for a business to reply by email
              </p>
              <p className="mt-4 text-[11px] leading-snug text-navy-muted">
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
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeUp className="order-2 lg:order-1">
            <LeadsFlowDemo />
          </FadeUp>
          <FadeUp delay={0.06} className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Channels"
              title="Works with the leads you already get."
              subline="Texts, Facebook, Instagram, your website — answered the moment they arrive. Your Zillow leads connect in too."
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
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <FadeUp>
            <HouseLineIllustration className="mb-6 h-20 w-28 opacity-90 sm:mb-8 sm:h-32 sm:w-40" />
            <SectionHeading
              eyebrow="Listings"
              title="Buyers ask about your listings. Bookr answers — and books the showing."
              subline="We load your listings at setup, so Bookr fields the common questions and gets the tour on your calendar — day or night."
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
const STEPS = [
  {
    n: "01",
    icon: Inbox,
    title: "Lead comes in",
    body: "Zillow, Instagram, social, web, SMS, or call — received immediately.",
  },
  { n: "02", icon: Zap, title: "Answered in seconds", body: "Warm reply in English or Spanish." },
  {
    n: "03",
    icon: ListChecks,
    title: "Qualified",
    body: "Timeline, financing, listing questions handled.",
  },
  {
    n: "04",
    icon: CalendarCheck,
    title: "Booked for you",
    body: "Real slots from your Google Calendar.",
  },
];

function HowItWorks() {
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

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              <FadeUp delay={i * 0.05} className="h-full">
                <article className="bookr-step-card flex h-full gap-4 rounded-2xl p-5 sm:flex-col sm:gap-0 sm:p-7">
                  <div className="flex shrink-0 items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bookr-stripe-2 text-white shadow-[0_8px_18px_-8px_rgba(46,58,140,0.7)]">
                      <s.icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                    </span>
                    <span
                      className="hidden font-display text-2xl font-bold text-bookr-stripe-3/35 sm:block"
                      aria-hidden
                    >
                      {s.n}
                    </span>
                  </div>
                  <div className="min-w-0 sm:mt-5">
                    <p className="text-xs font-bold tracking-[0.1em] text-bookr-stripe-3/70 sm:hidden">
                      STEP {s.n}
                    </p>
                    <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-navy-muted">{s.body}</p>
                  </div>
                </article>
              </FadeUp>
              {i < STEPS.length - 1 ? (
                <ChevronRight
                  className="absolute -right-[19px] top-1/2 hidden h-4 w-4 -translate-y-1/2 text-bookr-stripe-3/40 lg:block"
                  strokeWidth={2.5}
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ol>
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
          <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-bookr-mist ring-1 ring-white/20">
            <ShieldCheck className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
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

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-8">
          <PricingCard
            name="Standard"
            price="$197"
            desc="Zillow, social, SMS, and web forms."
            features={[
              "Replies in seconds, 24/7",
              "English & Spanish, auto-detected",
              "Qualifies and books on your calendar",
              "Answers buyer questions on listings you load",
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
    <FadeUp className="h-full">
      <div
        className={[
          "relative flex h-full flex-col rounded-2xl p-7 sm:p-10",
          highlighted ? "bookr-card-featured lg:-translate-y-1" : "bookr-card-elevated",
        ].join(" ")}
      >
        {highlighted ? (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-bookr-stripe-2 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_4px_14px_rgba(91,107,206,0.45)]">
            Most popular
          </div>
        ) : null}
        <div className="flex items-center gap-2">
          <h3 className="font-display text-2xl font-bold text-navy">{name}</h3>
          {highlighted ? (
            <Phone className="h-4 w-4 text-bookr-stripe-3" strokeWidth={2.5} aria-hidden />
          ) : null}
        </div>
        <p className="mt-2 text-base text-navy-muted">{desc}</p>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-display text-5xl font-bold tracking-tight text-navy">{price}</span>
          <span className="text-navy-muted">/mo</span>
        </div>
        <ul className="mt-7 flex-1 space-y-3 border-t border-charcoal/8 pt-7">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-base text-navy/85">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bookr-stripe-2/15 text-bookr-stripe-3">
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
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
            className="font-semibold text-bookr-stripe-3 underline decoration-bookr-stripe-3/30 underline-offset-2 transition-colors hover:decoration-bookr-stripe-3"
          >
            Book a walkthrough here
            <span className="sr-only"> (opens in a new tab)</span>
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
      a: "Yes. If you get leads through Zillow Premier Agent, we connect them so Bookr texts each one back in seconds — the fast follow-up portal leads rarely get.",
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
            <details
              key={faq.q}
              className="bookr-card-elevated group rounded-xl transition-colors open:border-bookr-stripe-2/35"
            >
              {/* Padding lives on the summary so the whole row is the tap target */}
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-base font-semibold text-navy marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-2">
                {faq.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-navy/40 transition-transform duration-200 group-open:rotate-180 group-open:text-bookr-stripe-3"
                  aria-hidden
                />
              </summary>
              <div className="px-5 pb-5 text-base leading-relaxed text-navy-muted">{faq.a}</div>
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
            <PrimaryCta className="w-full max-w-sm sm:w-auto" />
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
