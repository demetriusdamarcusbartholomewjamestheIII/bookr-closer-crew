import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  Languages,
  Mic,
  Shield,
  Calendar,
  MessageSquare,
  Phone,
} from "lucide-react";
import { BookDemoButton, BookrFormEmbed } from "@/components/BookrFormEmbed";
import { BookrStripe, BookrStripeWide } from "@/components/BookrStripe";
import { BookrIconMark } from "@/components/BookrIconMark";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/Motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bookr — 24/7 bilingual lead desk for realtors" },
      {
        name: "description",
        content:
          "Bookr replies to every online lead in under 5 minutes, in English or Spanish, and books appointments on your calendar. Done-for-you setup.",
      },
      { property: "og:title", content: "Bookr — 24/7 bilingual lead desk for realtors" },
      {
        property: "og:description",
        content:
          "Stop losing Zillow and Facebook leads to faster agents. Bookr qualifies and books while you close deals.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const INTEGRATIONS = [
  "Facebook Lead Ads",
  "Instagram DMs",
  "Website forms",
  "Google Calendar",
  "SMS",
];

function LandingPage() {
  return (
    <main className="bg-white text-charcoal">
      <Hero />
      <ProblemStats />
      <ProductProof />
      <BilingualWedge />
      <PricingSection />
      <FaqTrust />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section id="top" className="bookr-hero relative overflow-hidden">
      <div className="bookr-hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <SiteHeader variant="light" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-28 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:pb-28 lg:pt-36">
        <div className="lg:pt-4">
          <BookrStripeWide className="mb-8" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
            Done-for-you speed-to-lead
          </p>
          <h1 className="mt-4 max-w-xl text-[2.125rem] font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Realtors close deals.
            <span className="mt-1 block text-navy">Bookr handles every lead.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Your 24/7 bilingual lead desk — replies in under 5 minutes, qualifies
            buyers and sellers, and books real appointments on your calendar. We
            set it up. You show up and close.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "English & Spanish — auto-detected per lead",
              "Trained on your real conversation style",
              "Live supervision dashboard included",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal/85 sm:text-base">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-bookr-stripe-3" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-xs font-medium text-charcoal/70 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-charcoal/8 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
            <BookrIconMark size={48} className="shrink-0" />
            <div>
              <p className="text-sm font-semibold text-charcoal">Built for working agents</p>
              <p className="mt-0.5 text-xs leading-relaxed text-charcoal/60">
                Real setup, real people. Questions?{" "}
                <a href="mailto:ian@heybookr.com" className="font-medium text-navy underline-offset-2 hover:underline">
                  ian@heybookr.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <BookrFormEmbed embedId="bookr-demo-form" label="Book your 15-minute demo" />
          <p className="mt-3 text-center text-xs text-charcoal/50">
            No credit card · No annual contract · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM + STATS ─── */
function ProblemStats() {
  const stats = [
    {
      value: "5 min",
      label: "The window that matters",
      note: "Leads contacted within 5 minutes are dramatically more likely to convert than those contacted after 30 minutes.",
      cite: "HBR / MIT lead response research",
    },
    {
      value: "3+ hrs",
      label: "Average agent reply time",
      note: "Most agents respond hours later — long after your lead has texted someone else.",
      cite: "Industry speed-to-lead benchmarks",
    },
    {
      value: "30%+",
      label: "Hispanic buyer share",
      note: "One of the fastest-growing segments in U.S. home buying — often underserved in English-only follow-up.",
      cite: "NAR Profile of Home Buyers & Sellers",
    },
  ];

  return (
    <section className="bookr-section-dark relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <FadeUp>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your lead filled out a form at dinner. Three other agents replied before dessert.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
            Speed wins listings. Bookr makes you the agent who always answers first —
            in the right language — without missing your life.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-8"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-bookr-stripe-1 sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{s.note}</p>
              <p className="mt-4 text-[11px] text-white/40">{s.cite}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCT PROOF ─── */
function ProductProof() {
  const benefits = [
    {
      icon: Languages,
      title: "Bilingual by default",
      body: "Every lead gets a native-quality reply in English or Spanish — auto-detected. One Bookr, both markets.",
    },
    {
      icon: Mic,
      title: "Sounds like you",
      body: "We train on your past lead conversations so replies match your tone — not a generic chatbot.",
    },
    {
      icon: Shield,
      title: "Hands-off, with a window in",
      body: "Bookr runs 24/7. Your free supervision dashboard lets you read every conversation, anytime.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
              See how it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From Zillow inquiry to booked showing — automatically.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Bookr replies, asks the right qualifying questions, and puts real
              appointments on your calendar. You wake up to booked tours — not
              a backlog of unread texts.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bookr-stripe-3/10 text-bookr-stripe-3">
                    <b.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <ExampleConversation />
          </FadeUp>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Calendar, step: "1", title: "Book a 15-min demo", desc: "See your week with Bookr running." },
            { icon: MessageSquare, step: "2", title: "We set it up", desc: "20-minute onboarding call. We handle the tech." },
            { icon: Check, step: "3", title: "Leads get handled", desc: "Under 5-min replies. You close." },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-charcoal/8 bg-cream/50 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-bookr-stripe-3">{item.step}</span>
                <item.icon className="h-5 w-5 text-charcoal/50" />
              </div>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-charcoal/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleConversation() {
  const messages = [
    { from: "lead", text: "Hi — is the Maple St listing still available?" },
    { from: "bookr", text: "Hi! Yes, still active. Are you hoping to move in the next 60 days?" },
    { from: "lead", text: "Yes, we're pre-approved. Within 30 days." },
    { from: "bookr", text: "Great. I have Saturday 11am or Thursday 5:30pm for a tour. Which works?" },
    { from: "lead", text: "Saturday 11 works." },
    { from: "bookr", text: "Booked — you'll get a confirmation shortly. See you Saturday!" },
  ];

  return (
    <div className="mx-auto w-full max-w-md">
      <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-wider text-charcoal/45">
        Example workflow (illustrative)
      </p>
      <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-pro">
        <div className="flex items-center justify-between border-b border-charcoal/8 bg-charcoal px-5 py-4">
          <div className="flex items-center gap-3">
            <BookrStripe />
            <div>
              <p className="text-xs font-medium text-white/60">New Zillow lead</p>
              <p className="text-sm font-semibold text-white">Qualifying → Booking</p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
            &lt; 5 min
          </span>
        </div>
        <div className="space-y-3 bg-cream/30 p-5">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "bookr" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                  m.from === "bookr"
                    ? "rounded-br-md bg-bookr-stripe-3 text-white"
                    : "rounded-bl-md bg-white text-charcoal shadow-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div className="flex justify-center pt-2">
            <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              ✓ Appointment booked · Sat 11:00 AM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── BILINGUAL WEDGE ─── */
function BilingualWedge() {
  return (
    <section className="bookr-section-dark relative overflow-hidden py-20 sm:py-28">
      <div className="bookr-hero-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <BookrStripeWide className="mx-auto mb-8" />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          <span className="text-bookr-stripe-1">30%+</span> of recent U.S. buyers are Hispanic —
          and growing fast.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          English-only follow-up leaves money on the table. Bookr detects each lead's
          language and replies in fluent, native-register Spanish or English — same
          speed, same quality, one system.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90">
          <span>🇺🇸 English</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>🇲🇽 Español</span>
        </div>
        <p className="mt-6 text-xs text-white/40">Source: NAR Profile of Home Buyers & Sellers</p>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function PricingSection() {
  return (
    <section id="pricing" className="bookr-section-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One extra closing pays for months of Bookr.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-charcoal/65">
            Human ISAs cost $1,500–3,000/mo. Bookr starts at $197 — done-for-you, bilingual, 24/7.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <PricingCard
            name="Bookr Standard"
            price="$197"
            desc="Every channel except inbound voice — SMS, social DMs, and web forms."
            features={[
              "Under 5-minute replies, 24/7",
              "Facebook, Instagram, SMS, website forms",
              "English & Spanish auto-detect",
              "Trained on your voice",
              "Books on your real calendar",
              "Supervision dashboard included",
            ]}
          />
          <PricingCard
            name="Bookr Pro"
            price="$397"
            desc="Everything in Standard, plus AI answers inbound calls when you can't."
            highlighted
            features={[
              "Everything in Standard",
              "AI voice answers missed calls",
              "Natural voice — English & Spanish",
              "Qualifies and books live on the phone",
              "Hot-lead transfer to your mobile",
              "Custom voice profile",
            ]}
          />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-charcoal/55">
          Best for agents and teams with 200+ online leads/month running paid social or portal leads.
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
  highlighted,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl bg-white p-8 sm:p-10",
        highlighted
          ? "border-2 border-bookr-stripe-3 shadow-pro ring-4 ring-bookr-stripe-3/10"
          : "border border-charcoal/10 shadow-card",
      ].join(" ")}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bookr-stripe-3 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Most popular
        </span>
      )}
      <div className="flex items-center gap-2">
        <h3 className="font-display text-2xl font-bold">{name}</h3>
        {highlighted && <Phone className="h-4 w-4 text-bookr-stripe-3" />}
      </div>
      <p className="mt-2 text-sm text-charcoal/60">{desc}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-bold tracking-tight">{price}</span>
        <span className="text-charcoal/50">/mo</span>
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-charcoal/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-bookr-stripe-3" strokeWidth={2.5} />
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={[
          "mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all active:scale-[0.98]",
          highlighted
            ? "bg-bookr-stripe-3 text-white hover:bg-bookr-stripe-2"
            : "border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
        ].join(" ")}
      >
        Book my demo
      </a>
    </div>
  );
}

/* ─── FAQ + TRUST ─── */
function FaqTrust() {
  const faqs = [
    {
      q: "Will my leads know it's AI?",
      a: "Bookr is trained on how you actually talk to leads. Most conversations feel like you — fast, personal, and on-brand. You can watch every reply in your supervision dashboard.",
    },
    {
      q: "What do you need access to?",
      a: "Facebook, Instagram, your calendar, website forms, and phone (Pro only). We only see lead conversations — never personal contacts. We never sell your data.",
    },
    {
      q: "How fast is setup?",
      a: "One 15-minute demo, then a ~20-minute onboarding call. We configure everything. Most agents are live within a few days.",
    },
    {
      q: "Is this right for my volume?",
      a: "Bookr works best if you're handling 200+ online leads per month from paid social, portals, or team lead flow. Below that, the ROI math may not justify it yet.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Questions agents ask before they switch
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-charcoal/10 bg-white px-5 py-4 shadow-sm open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-charcoal marker:content-none">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-charcoal/40 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 pb-1 text-sm leading-relaxed text-charcoal/65">{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-charcoal/8 bg-charcoal p-8 text-white sm:p-10">
          <h3 className="font-display text-xl font-bold">Who Bookr is for</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-white/80">
            {[
              "Agents running Facebook, Instagram, or Zillow leads",
              "Teams of 2–25 who need consistent follow-up",
              "Agents who want evenings and weekends back",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-bookr-stripe-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ─── */
function FinalCta() {
  return (
    <section className="bookr-section-dark py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
        <BookrStripeWide className="mx-auto mb-8" />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stop losing leads to agents who reply faster.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-white/70">
          Book a 15-minute demo. We'll walk through exactly how Bookr would handle
          your leads this week — in English and Spanish.
        </p>
        <BookDemoButton className="mt-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-charcoal transition-all hover:bg-cream active:scale-[0.98]">
          Book a 15-minute demo
        </BookDemoButton>
        <p className="mt-4 text-sm text-white/45">No credit card required</p>
      </div>
    </section>
  );
}