import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Inbox,
  Languages,
  Mic,
  Shield,
  Calendar,
  MessageSquare,
  Phone,
  Sparkles,
  UserCheck,
  Zap,
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

const LEAD_CHANNELS = [
  "Zillow & portal inquiries",
  "Facebook Lead Ads",
  "Instagram DMs",
  "Website forms",
  "SMS & text threads",
  "Inbound calls (Pro)",
];

function LandingPage() {
  return (
    <main className="bg-white text-charcoal">
      <Hero />
      <ProblemStats />
      <LeadPipeline />
      <SalesPersonality />
      <BilingualWedge />
      <ProductProof />
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
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-charcoal/80 shadow-sm">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live 24/7 — replies in under 5 minutes
            </span>
            <span className="hidden text-charcoal/30 sm:inline" aria-hidden>
              ·
            </span>
            <span className="text-xs font-medium text-charcoal/55">
              Done-for-you setup — no DIY automation
            </span>
          </div>
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
              "Intakes leads from Zillow, social, SMS, forms & calls",
              "Responds, qualifies, and books — your perfect assistant",
              "English & Spanish — auto-detected per lead",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-charcoal/85 sm:text-base">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-bookr-stripe-3" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            {LEAD_CHANNELS.map((name) => (
              <span
                key={name}
                className="rounded-full border border-charcoal/12 bg-white px-3 py-1 text-xs font-medium text-charcoal/70 shadow-sm"
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
      value: "100×",
      label: "More likely to connect in under 5 minutes",
      note: "Leads contacted within 5 minutes are 100× more likely to connect than those contacted after 30 minutes. Speed isn't a nice-to-have — it's the whole game.",
      cite: "MIT Lead Response Management Study / HBR",
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

/* ─── LEAD PIPELINE (data intake) ─── */
function LeadPipeline() {
  const stages = [
    {
      icon: Inbox,
      step: "01",
      title: "Intake — every channel, one inbox",
      body: "A Zillow inquiry, Facebook form fill, Instagram DM, website form, SMS reply, or missed call (Pro) hits Bookr the moment it arrives. No copying leads between apps. No manual forwarding.",
    },
    {
      icon: Zap,
      step: "02",
      title: "Respond — under 5 minutes, every time",
      body: "Bookr opens the conversation immediately — in English or Spanish, auto-detected. Warm, personal, on-brand. Your lead never sits in a queue while they're texting three other agents.",
    },
    {
      icon: UserCheck,
      step: "03",
      title: "Qualify — the questions that matter",
      body: "Timeline, financing, motivation, property fit, showing availability — asked naturally, in conversation. Bookr filters tire-kickers and surfaces buyers and sellers who are ready to move.",
    },
    {
      icon: Calendar,
      step: "04",
      title: "Book — real appointments, your calendar",
      body: "Bookr proposes live slots from your Google Calendar, confirms the showing or consultation, sends reminders, and logs the outcome. You wake up to booked tours — not a backlog of unread texts.",
    },
  ];

  return (
    <section className="bookr-section-light relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
            What you&apos;re actually buying
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            One assistant that intakes, responds, qualifies, and books — from every lead source.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Most agents don&apos;t lose deals because they can&apos;t close. They lose them because
            leads arrive scattered across Zillow, Instagram, Facebook, SMS, and voicemail — and
            nobody handles the full pipeline fast enough. Bookr does. End to end.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {stages.map((s, i) => (
            <FadeUp key={s.step} delay={i * 0.05}>
              <div className="flex h-full gap-5 rounded-2xl border border-charcoal/10 bg-white p-7 shadow-card">
                <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-bookr-stripe-3 text-white">
                  <s.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-bookr-stripe-3">
                    {s.step}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{s.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.15}>
          <div className="mt-10 rounded-2xl border-2 border-bookr-stripe-3/20 bg-white p-8 shadow-pro sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold text-charcoal sm:text-2xl">
                  Zillow form → qualified buyer → Saturday showing. Automatically.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65 sm:text-base">
                  Bookr isn&apos;t a CRM you log into or a chat widget you configure. It&apos;s
                  done-for-you lead operations: every inbound signal becomes a handled conversation,
                  a qualified prospect, and — when they&apos;re ready — a confirmed appointment on
                  your calendar.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                {LEAD_CHANNELS.map((ch) => (
                  <span
                    key={ch}
                    className="rounded-lg bg-bookr-stripe-3/8 px-3 py-1.5 text-xs font-semibold text-bookr-stripe-3"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-charcoal/8 pt-6 text-sm text-charcoal/70">
              <span className="inline-flex items-center gap-2 font-medium text-charcoal">
                <ArrowRight className="h-4 w-4 text-bookr-stripe-3" />
                Lead arrives
              </span>
              <span className="text-charcoal/30">→</span>
              <span>Instant reply</span>
              <span className="text-charcoal/30">→</span>
              <span>Qualification</span>
              <span className="text-charcoal/30">→</span>
              <span className="font-semibold text-emerald-700">Appointment booked</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── SALES PERSONALITY ─── */
function SalesPersonality() {
  const paths = [
    {
      icon: Mic,
      title: "Trained on your sales style",
      badge: "Most popular",
      body: "Sales is your #1 asset as a realtor — your tone, your qualifying questions, how you build trust. During onboarding we study your real lead conversations and configure Bookr to sell like you: your phrases, your pace, your personality.",
      points: [
        "Built from your past texts, DMs, and email threads",
        "Matches how you handle objections and ask for the appointment",
        "Leads experience continuity — not a generic script",
      ],
    },
    {
      icon: Sparkles,
      title: "Bookr Signature sales personality",
      badge: "Research-backed",
      body: "New agent or light conversation history? We deploy our signature sales personality — engineered from extensive market research across thousands of real estate conversations — proven to qualify buyers and sellers and move them to a booked showing.",
      points: [
        "Tested qualifying flows for buyers, sellers, and renters",
        "Professional, warm, and conversion-focused out of the box",
        "We refine it to your market during your onboarding call",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
            Your edge, protected
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Sales is everything in real estate. Bookr sells like you — or like the best in the business.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Generic follow-up loses listings. Bookr is personalized marketing software — configured
            either from <strong className="font-semibold text-charcoal">your</strong> proven style or
            our <strong className="font-semibold text-charcoal">signature</strong> personality built
            from real market data. Either way, every lead gets a salesperson — not a template.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {paths.map((path, i) => (
            <FadeUp key={path.title} delay={i * 0.08}>
              <div className="relative flex h-full flex-col rounded-2xl border-2 border-charcoal/10 bg-cream/40 p-8 shadow-card">
                <span className="absolute -top-3 left-6 rounded-full bg-bookr-stripe-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  {path.badge}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal text-white">
                  <path.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-charcoal">{path.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70 sm:text-base">
                  {path.body}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-charcoal/8 pt-6">
                  {path.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-charcoal/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-bookr-stripe-3" strokeWidth={2.5} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
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
      icon: Shield,
      title: "Hands-off, with a window in",
      body: "Bookr runs 24/7 across every connected channel. Your free supervision dashboard lets you read every conversation, see who got qualified, and verify every booking — anytime.",
    },
    {
      icon: MessageSquare,
      title: "Full pipeline visibility",
      body: "Watch intake, response, qualification, and booking in one place. No guessing what happened to last night's Zillow lead — it's all there.",
    },
    {
      icon: Calendar,
      title: "Calendar-connected booking",
      body: "Real slots from your Google Calendar. Confirmations, reminders, and handoff notes — so you show up prepared to close.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-3">
              See it in action
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              This is what your leads experience — start to finish.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              A portal inquiry comes in at 8:42 PM. Bookr responds in under five minutes,
              qualifies timeline and financing, offers real showing slots, and books the
              appointment — while you&apos;re at dinner.
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
  const differentiators = [
    {
      stat: "30%+",
      label: "of recent U.S. home buyers are Hispanic",
      note: "A massive and growing share of your market — often lost to English-only follow-up.",
    },
    {
      stat: "1 in 3",
      label: "households speak Spanish at home",
      note: "Reply in English only and you're invisible to a third of buyers before the conversation starts.",
    },
    {
      stat: "English-only",
      label: "is still what most lead software ships",
      note: "Bilingual autoresponders are rare. Fluent, native-register Spanish that qualifies and books? Almost nonexistent.",
    },
  ];

  return (
    <section className="bookr-section-dark relative overflow-hidden py-20 sm:py-28">
      <div className="bookr-hero-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bookr-stripe-1">
            Built in — not bolted on
          </p>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Bilingual is our moat. Bookr is the full lead desk.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Bookr isn&apos;t a Hispanic-market-only product — it&apos;s speed-to-lead, qualification,
            and booking for every agent. But bilingual capability is woven into our identity from day
            one, and that&apos;s something most competitors still can&apos;t match. While the market
            ships English-only templates, Bookr replies <em className="text-white/90">en español</em>{" "}
            or English in under five minutes — same pipeline, same calendar, same sales personality.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differentiators.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl border border-white/12 bg-white/[0.05] p-7 text-center sm:p-8"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-bookr-stripe-1 sm:text-5xl">
                {d.stat}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/90">
                {d.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{d.note}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-bookr-stripe-1/25 bg-white/[0.06] p-8 text-center sm:p-10">
          <Languages className="mx-auto h-8 w-8 text-bookr-stripe-1" strokeWidth={1.75} />
          <p className="mt-4 text-lg font-semibold leading-relaxed text-white sm:text-xl">
            Native-register Spanish — not translated English. Auto-detected on every inbound message.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
            Virtually no other lead software does this end-to-end: intake, qualify, and book in both
            languages. Your Hispanic leads get the same five-minute, personal, professional
            experience your English leads do — same qualification, same booking flow, same calendar.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-5 py-2.5 text-sm font-medium text-white/90">
            <span>🇺🇸 English</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>🇲🇽 Español</span>
            <span className="text-white/50">— auto-detected per lead</span>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Sources: NAR Profile of Home Buyers & Sellers; U.S. Census Bureau
        </p>
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
              "Zillow, Facebook, Instagram, SMS & web forms",
              "Full intake → qualify → book pipeline",
              "Your sales style or Bookr Signature personality",
              "English & Spanish auto-detect",
              "Books on your real Google Calendar",
              "Supervision dashboard included",
            ]}
          />
          <PricingCard
            name="Bookr Pro"
            price="$397"
            desc="Everything in Standard, plus automated voice answers inbound calls when you can't."
            highlighted
            features={[
              "Everything in Standard",
              "Voice software answers missed calls",
              "Natural conversation — English & Spanish",
              "Qualifies and books live on the phone",
              "Hot-lead transfer to your mobile",
              "Custom voice profile",
            ]}
          />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-charcoal/55">
          Built for solo agents and growing teams running paid social, portal, or referral leads.
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
      <BookDemoButton
        className={[
          "mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all active:scale-[0.98]",
          highlighted
            ? "bg-bookr-stripe-3 text-white hover:bg-bookr-stripe-2"
            : "border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
        ].join(" ")}
      >
        Book my demo
      </BookDemoButton>
    </div>
  );
}

/* ─── FAQ + TRUST ─── */
function FaqTrust() {
  const faqs = [
    {
      q: "Will my leads know it's software?",
      a: "Bookr is configured to sound like you — or like our research-backed signature sales personality. Conversations are fast, personal, and on-brand. Most leads experience it as a attentive assistant who knows your listings. You can read every exchange in your supervision dashboard.",
    },
    {
      q: "Where does Bookr actually get leads from?",
      a: "Zillow and portal inquiries, Facebook Lead Ads, Instagram DMs, website contact forms, SMS threads, and inbound calls (Pro). Every channel feeds the same pipeline: instant response → qualification → booked appointment on your Google Calendar.",
    },
    {
      q: "Can you match how I sell — or do I have to use a generic script?",
      a: "Both options. If you have conversation history, we train Bookr on your tone, phrases, and qualifying style. If you're newer or prefer a proven playbook, we deploy our Bookr Signature personality — built from extensive real estate market research. Either way, it's personalized marketing software — not a one-size-fits-all autoresponder.",
    },
    {
      q: "What do you need access to?",
      a: "Facebook, Instagram, your Google Calendar, website forms, and phone line (Pro only). We only see lead conversations — never personal contacts. We never sell your data.",
    },
    {
      q: "How fast is setup?",
      a: "One 15-minute demo, then a ~20-minute onboarding call. We connect your channels, configure your sales personality, and handle the tech. Most agents are live within a few days.",
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