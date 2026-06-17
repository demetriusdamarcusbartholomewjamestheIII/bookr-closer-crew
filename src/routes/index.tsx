import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { BookrFormEmbed } from "@/components/BookrFormEmbed";
import { BookrMarkOrbit } from "@/components/landing/BookrMarkOrbit";
import { HeroLiveChat } from "@/components/landing/HeroLiveChat";
import { LandingNav } from "@/components/landing/LandingNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp } from "@/components/Motion";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/bookr-constants";

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
    <main className="bg-navy text-white">
      <LandingNav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Bilingual />
      <DoneForYou />
      <Guarantee />
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
    <section id="top" className="relative overflow-hidden bg-navy">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <FadeUp>
            <h1 className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Every lead, answered in seconds — and booked on your calendar.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
              Bookr replies to every new lead in seconds, day or night, in English or Spanish,
              qualifies them, and books them on your calendar. You never lift a finger — and you
              never log in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#bookr-live-demo"
                className="inline-flex items-center justify-center rounded-lg bg-bookr-stripe-2 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bookr-stripe-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
              >
                Talk to Bookr now
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
              >
                Book a 30-min demo
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="relative">
              <div className="absolute -right-4 -top-6 z-10 hidden sm:block lg:-right-8">
                <BookrMarkOrbit size={96} />
              </div>
              <HeroLiveChat />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM ─── */
function Problem() {
  return (
    <section className="border-t border-white/8 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            You pay for leads you never answer in time.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            A new inquiry goes cold in minutes. Most agents reply hours later — long after the
            buyer has moved on to whoever responded first.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-bookr-stripe-1 sm:text-6xl">
                78%
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/85">
                of customers buy from the first business to respond
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                If you&apos;re not first, you&apos;re usually out — no matter how good you are at
                closing.
              </p>
              <p className="mt-4 text-[11px] text-white/40">
                Source: Lead Response Management Study (MIT / InsideSales)
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <p className="font-display text-5xl font-semibold tracking-tight text-bookr-stripe-1 sm:text-6xl">
                Minutes
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/85">
                is how fast intent fades after a form fill
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                Zillow at dinner. Facebook at 9pm. Instagram on Sunday. Your leads don&apos;t wait
                for business hours — and neither does your competition.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Lead comes in",
      body: "Zillow, Facebook, Instagram, your website, SMS, or a missed call (Pro) — Bookr receives it the moment it arrives.",
    },
    {
      n: "02",
      title: "Answered in seconds",
      body: "A warm, personal reply in English or Spanish — matched to how you sell, not a generic script.",
    },
    {
      n: "03",
      title: "Qualified",
      body: "Timeline, financing, motivation, property fit — asked naturally, in conversation, until you know who's worth your time.",
    },
    {
      n: "04",
      title: "Booked & handed to you",
      body: "Real slots from your Google Calendar. Confirmations sent. You show up to a qualified appointment — not a cold callback list.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
            How it works
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From inquiry to booked showing — without you in the middle.
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.05}>
              <article className="group rounded-2xl border border-charcoal/8 p-8 transition-shadow hover:shadow-card">
                <p className="font-display text-3xl font-semibold text-bookr-stripe-3">{s.n}</p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{s.body}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BILINGUAL ─── */
function Bilingual() {
  const enThread = [
    { from: "lead", text: "Hi — is the Maple St listing still available?" },
    { from: "bookr", text: "Hi! Yes, still active. Are you hoping to move in the next 60 days?" },
    { from: "lead", text: "Yes, pre-approved. Within 30 days." },
    { from: "bookr", text: "Great — Saturday 11am or Thursday 5:30pm for a tour. Which works?" },
  ];
  const esThread = [
    { from: "lead", text: "Hola — ¿la casa en Maple sigue disponible?" },
    { from: "bookr", text: "¡Hola! Sí, sigue activa. ¿Busca mudarse en los próximos 60 días?" },
    { from: "lead", text: "Sí, ya tenemos pre-aprobación. En 30 días." },
    { from: "bookr", text: "Perfecto — sábado 11am o jueves 5:30pm. ¿Cuál le funciona?" },
  ];

  return (
    <section className="border-y border-white/8 bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-1">
            Bilingual from day one
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Same lead. Same speed. English or Spanish.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72">
            Most lead desks on the market are English-only — bilingual support, when it exists, is
            bolted on later. Bookr detects each lead&apos;s language and replies in native-register
            Spanish or English from the first message.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FadeUp delay={0.05}>
            <ThreadCard label="English lead" messages={enThread} />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ThreadCard label="Spanish lead" messages={esThread} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ThreadCard({
  label,
  messages,
}: {
  label: string;
  messages: { from: string; text: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/12 bg-charcoal/50">
      <div className="border-b border-white/10 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</p>
      </div>
      <div className="space-y-3 p-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "bookr" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={[
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug",
                m.from === "bookr"
                  ? "rounded-br-md bg-bookr-stripe-3 text-white"
                  : "rounded-bl-md bg-white/10 text-white/90",
              ].join(" ")}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DONE FOR YOU ─── */
function DoneForYou() {
  const points = [
    "We connect your channels during a short onboarding call",
    "Bookr runs 24/7 — replies, qualifies, books",
    "Optional supervision dashboard if you want visibility",
    "No daily check-ins, no configuration rabbit holes",
  ];

  return (
    <section className="bg-white py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              You never log in.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Every tool you tried, you abandoned — because it needed you to become an operator on
              top of being an agent. Bookr is done for you. We set it up. It runs. You close.
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-charcoal/80 sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-bookr-stripe-3" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── GUARANTEE ─── */
function Guarantee() {
  return (
    <section className="bg-cream py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeUp>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            We take the risk on setup.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Free setup and a pilot period. You pay when Bookr is booking appointments on your
            calendar — terms finalized on your demo call. We&apos;d rather earn your trust with
            results than lock you into something that doesn&apos;t work.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            One saved commission covers months of Bookr.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-charcoal/60">
            Human inside sales assistants run $1,500–3,000/mo. Bookr starts at $197/mo — done for
            you, bilingual, around the clock.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <PricingCard
            name="Standard"
            price="$197"
            desc="Every digital channel — Zillow, social, SMS, and web forms."
            features={[
              "Replies in seconds, 24/7",
              "English & Spanish, auto-detected",
              "Qualifies and books on your calendar",
              "Your sales style or Bookr Signature playbook",
              "Supervision dashboard included",
            ]}
          />
          <PricingCard
            name="Pro"
            price="$397"
            desc="Everything in Standard, plus inbound call handling."
            highlighted
            features={[
              "Everything in Standard",
              "Answers missed calls in English & Spanish",
              "Qualifies and books live on the phone",
              "Hot-lead transfer to your mobile",
              "Custom voice profile",
            ]}
          />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-charcoal/55">
          No setup fees. Cancel anytime. Built for solo agents and growing teams.
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
        "flex flex-col rounded-2xl p-8 sm:p-10",
        highlighted
          ? "border-2 border-bookr-stripe-3 bg-white shadow-pro ring-4 ring-bookr-stripe-3/10"
          : "border border-charcoal/10 bg-white shadow-card",
      ].join(" ")}
    >
      {highlighted && (
        <span className="mb-4 w-fit rounded-full bg-bookr-stripe-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Most popular
        </span>
      )}
      <h3 className="font-display text-2xl font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-charcoal/60">{desc}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-semibold tracking-tight">{price}</span>
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
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-3",
          highlighted
            ? "bg-bookr-stripe-3 text-white hover:bg-bookr-stripe-2"
            : "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white",
        ].join(" ")}
      >
        Book a demo
      </a>
    </div>
  );
}

/* ─── FOUNDER ─── */
function Founder() {
  return (
    <section className="border-t border-white/8 bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-14">
          <FadeUp>
            <div
              className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/12 bg-bookr-stripe-3/20 text-3xl font-semibold text-bookr-stripe-1"
              aria-hidden
            >
              I
            </div>
          </FadeUp>
          <FadeUp delay={0.06}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-1">
              Founder
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">Ian</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/72">
              <p>
                I built Bookr because I kept watching agents lose deals they should have won — not
                on skill, but on response time and language. The lead came in at 9pm. The agent
                replied at 9am. The appointment was already booked with someone else.
              </p>
              <p>
                Bookr is the lead desk I wished existed: fast, bilingual, done for you, and built
                around how agents actually work. No dashboards you&apos;ll abandon. No operator work
                on top of your day job.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block text-sm font-medium text-bookr-stripe-1 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
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

/* ─── TESTIMONIALS PLACEHOLDER ─── */
function TestimonialsPlaceholder() {
  return (
    <section className="border-t border-charcoal/8 bg-white py-16 text-charcoal sm:py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <FadeUp>
          <h2 className="font-display text-xl font-semibold text-charcoal/80">
            What agents are saying
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/55">
            We&apos;re collecting stories from our first cohort. Real names, real results — coming
            soon.
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
      a: "Almost none. One demo call, one short onboarding session — we connect your channels, configure your sales voice, and go live. You don't log in daily or manage workflows.",
    },
    {
      q: "Do I have to change my CRM?",
      a: "No. Bookr plugs into the channels where leads already arrive — Zillow, Facebook, Instagram, your site, SMS — and books on your existing Google Calendar.",
    },
    {
      q: "Will this work with my Zillow leads?",
      a: "Yes. Portal inquiries are one of the core intake paths. Bookr replies in seconds, qualifies, and moves ready buyers to a booked showing.",
    },
    {
      q: "Does it really speak Spanish?",
      a: "Yes — native-register Spanish, auto-detected per message. Not translated English. The same qualification flow and booking path in both languages.",
    },
    {
      q: "What does it cost?",
      a: "Standard is $197/mo. Pro — with inbound call handling — is $397/mo. No setup fees. Cancel anytime. One extra closing typically covers months of Bookr.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-20 text-charcoal sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <FadeUp>
          <h2 className="font-display text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            FAQ
          </h2>
        </FadeUp>
        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-charcoal/10 bg-white px-5 py-4 open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-charcoal marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-3">
                {faq.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-charcoal/40 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 pb-1 text-sm leading-relaxed text-charcoal/65">{faq.a}</p>
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
    <section className="bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <FadeUp>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Stop losing leads to whoever answers first.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/70">
            Try the live preview above, or book a walkthrough — we&apos;ll map exactly how Bookr
            would handle your leads this week.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#bookr-live-demo"
              className="inline-flex items-center justify-center rounded-lg bg-bookr-stripe-2 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-bookr-stripe-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
            >
              Talk to Bookr now
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bookr-stripe-1"
            >
              Book a 30-min demo
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── GHL FORM (contact capture — preserved) ─── */
function ContactForm() {
  return (
    <section id="contact" className="border-t border-white/8 bg-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-xl font-semibold text-white">Get in touch</h2>
          <p className="mt-2 text-sm text-white/55">
            Prefer a form? Leave your details and we&apos;ll reach out.
          </p>
        </div>
        <div className="mt-10">
          <BookrFormEmbed embedId="bookr-demo-form" label="Request a callback" />
        </div>
      </div>
    </section>
  );
}