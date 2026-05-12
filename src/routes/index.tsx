import { createFileRoute } from "@tanstack/react-router";
import {
  Mic, Languages, Clock, ListChecks, CalendarCheck, BellRing,
  RefreshCw, Snowflake, Inbox, Mail, Check, Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { BookrFormEmbed } from "@/components/BookrFormEmbed";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp, Stagger, StaggerItem } from "@/components/Motion";
import { CountUp } from "@/components/CountUp";
import familyDinner from "@/assets/family-dinner.jpg";
import goldenHome from "@/assets/golden-home.jpg";
import handshake from "@/assets/handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bookr — Realtors close deals. We do everything else." },
      {
        name: "description",
        content:
          "Stop missing dinners chasing leads. Bookr replies, qualifies, and books appointments on your calendar — automatically, day and night.",
      },
      { property: "og:title", content: "Bookr — Realtors close deals. We do everything else." },
      {
        property: "og:description",
        content:
          "Done-for-you lead handling for real estate agents. Replies in under 5 minutes, in English and Spanish, 24/7.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function LandingPage() {
  return (
    <main className="bg-background text-charcoal">
      <Hero />
      <Problem />
      <Solution />
      <BilingualStrip />
      <HowItWorks />
      <Features />
      <Pricing />
      <DataTransparency />
      <ForAndNotFor />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-radial text-white grain">
      {/* Lifestyle photo overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.14] mix-blend-soft-light"
        style={{
          backgroundImage: `url(${goldenHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <SiteHeader variant="navy" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-24 pb-16 sm:px-8 md:pt-36 md:pb-24 lg:grid-cols-12 lg:gap-16 lg:pt-40">
        <div className="order-1 lg:col-span-6 lg:pt-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="text-[2.25rem] leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Realtors close deals.
            <br />
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.45 }}
              className="inline-block text-white/85"
            >
              Bookr does everything else.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.9 }}
            className="mt-6 max-w-[620px] text-base text-white/80 sm:text-lg md:text-xl"
          >
            Stop missing dinners chasing leads. Bookr replies, qualifies, and
            books appointments on your calendar — automatically, day and night.
            You just show up.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease, delay: 1.15 }}
            className="mt-7 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-xs text-white/90 backdrop-blur sm:text-sm">
              <span className="font-medium">🇺🇸 English</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="font-medium">🇲🇽 Español</span>
            </span>
            <span className="text-xs text-white/60 sm:text-sm">— auto-detects your lead's language</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.3 }}
          className="order-2 px-0 lg:col-span-6"
        >
          <BookrFormEmbed />
          <p className="mt-4 text-center text-sm text-white/60">
            No credit card. No pressure. Just a quick call.
          </p>
        </motion.div>
      </div>
      {/* Bottom fade into next dark section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-charcoal" />
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  return (
    <section className="relative overflow-hidden bg-charcoal-radial text-white grain">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">
            Your phone is stealing your life.
          </h2>
        </FadeUp>
        <Stagger className="mt-10 max-w-3xl space-y-5 text-base text-white/75 sm:text-lg md:text-xl">
          <StaggerItem>
            <p>You're at your kid's game. A lead comes in. You ignore it — and lose the deal. You answer it — and miss the inning.</p>
          </StaggerItem>
          <StaggerItem>
            <p>So you're stuck choosing: be present with your family, or be present for your business.</p>
          </StaggerItem>
          <StaggerItem>
            <p className="font-medium text-white">That's a choice nobody should have to make.</p>
          </StaggerItem>
        </Stagger>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          <StaggerItem>
            <StatCard
              valueNode={<CountUp to={47} suffix=" hrs" />}
              label="Average realtor's reply time to a new lead"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              valueNode={<><span className="text-white/70">&lt; </span><CountUp to={5} suffix=" min" /></>}
              label="Top producers' reply time"
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              valueNode={<><CountUp to={9} />×</>}
              label="More deals closed by fast responders"
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function StatCard({ valueNode, label }: { valueNode: React.ReactNode; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.06] sm:p-8">
      <div className="font-display text-[72px] font-bold leading-none tracking-tight text-accent sm:text-6xl md:text-[5.5rem]">
        {valueNode}
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.12em] text-white/65 sm:text-sm sm:tracking-wider">
        {label}
      </p>
    </div>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  return (
    <section className="relative overflow-hidden bg-warm-fade grain-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-32">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Get your evenings back. <span className="text-navy">Keep the deals.</span>
          </h2>
          <div className="mt-7 space-y-5 text-base text-charcoal/80 sm:text-lg">
            <p>Bookr handles every lead the moment it comes in — from your website, your Facebook ads, your Instagram DMs, anywhere they show up.</p>
            <p>It has a real conversation with them. Asks the right questions. Books them on your calendar (Google, iCal, or Outlook). Reminds them before the appointment. Follows up if they go cold.</p>
            <p>All of it. Automatically. While you sleep, eat dinner, hit the gym, or sit at your daughter's recital.</p>
            <p className="font-medium text-charcoal">You never log in. You never set anything up. We plug Bookr into your existing tools. Then it just runs.</p>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="relative overflow-hidden rounded-2xl shadow-card order-first lg:order-last">
            <img
              src={familyDinner}
              alt="A family enjoying dinner together at golden hour without phone interruptions"
              loading="lazy"
              width={1280}
              height={896}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- BILINGUAL STRIP ---------------- */
function BilingualStrip() {
  return (
    <section className="relative bg-offwhite grain-light">
      <div className="mx-auto max-w-3xl px-6 py-12 text-center sm:px-8 md:py-24">
        <FadeUp>
          <p className="text-3xl font-bold leading-[1.15] tracking-tight text-charcoal sm:text-4xl md:text-5xl">
            <span className="italic text-navy">1 in 3</span> home buyers in the US speaks Spanish at home.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base text-charcoal/75 sm:text-lg">
            Bookr replies to them in Spanish — automatically, the moment they
            message you. Most lead-response tools still can't.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-charcoal/15 bg-white px-4 py-1.5 text-xs font-medium text-charcoal/70 sm:text-sm">
            <span>EN</span>
            <span className="h-1 w-1 rounded-full bg-charcoal/30" />
            <span>ES</span>
            <span className="text-charcoal/50">— auto-detected</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Book a demo", d: "We show you exactly how Bookr works on a 15-minute call. No pitch deck. No pressure." },
    { n: "02", t: "We set it up for you", d: "You give us access to your Facebook, Instagram, calendar, and phone. We handle everything else." },
    { n: "03", t: "Get your time back", d: "Leads start getting replies in under 5 minutes. Appointments fill your calendar. You show up and close." },
  ];
  return (
    <section className="relative bg-white grain-light">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="max-w-3xl text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            3 steps. Then it runs forever.
          </h2>
        </FadeUp>
        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:h-full md:p-8">
                <div className="font-display text-5xl font-bold tracking-tight text-navy transition-colors group-hover:text-charcoal md:text-6xl">{s.n}</div>
                <h3 className="mt-3 text-xl font-semibold text-charcoal md:mt-6">{s.t}</h3>
                <p className="mt-2 text-charcoal/70 md:mt-3">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
function Features() {
  const features = [
    { icon: Mic, t: "Learns your voice", d: "Before we activate Bookr, we feed it your past lead messages. It picks up your phrasing and tone. Your leads never feel like they're texting a bot." },
    { icon: Languages, t: "Replies in your lead's language", d: "English or Spanish, automatically. Bookr detects what your lead writes in and responds in kind. No setup needed." },
    { icon: Clock, t: "Under 5-minute replies, 24/7", d: "Even at 2 AM. Even on Sundays. Every lead gets a real reply within minutes." },
    { icon: ListChecks, t: "Qualifies before it books", d: "Bookr asks the right questions to figure out who's serious — timeline, budget, financing — and only books appointments with leads worth your time." },
    { icon: CalendarCheck, t: "Books straight onto your calendar", d: "Google, iCal, or Outlook. Bookr only books inside the hours you set as available. Your evenings and weekends stay yours." },
    { icon: BellRing, t: "Sends reminders automatically", d: "24 hours and 1 hour before each appointment. Cuts no-shows dramatically." },
    { icon: RefreshCw, t: "Reschedules cancellations", d: "Lead can't make it? Bookr handles the rebook without you lifting a finger." },
    { icon: Snowflake, t: "Wakes up cold leads", d: "Weekly check-ins to leads who went quiet. Some of them come back ready to talk." },
    { icon: Inbox, t: "Catches leads from everywhere", d: "Your website, Facebook ads, Instagram DMs, Messenger, and any list you already have. Nothing falls through." },
    { icon: Mail, t: "One short email each morning", d: "Everything Bookr did yesterday, summarized in 60 seconds of reading." },
  ];
  return (
    <section className="relative bg-offwhite grain-light">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="max-w-4xl text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Everything between "lead arrives" and "you shake hands."
          </h2>
          <p className="mt-4 text-base text-charcoal/65 sm:text-lg">Here's what Bookr handles for you, automatically.</p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 md:mt-16 md:grid-cols-2 md:gap-y-10">
          {features.map((f, i) => (
            <FadeUp key={f.t} delay={(i % 2) * 0.08}>
              <div className="group flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-charcoal text-white transition-colors duration-300 group-hover:bg-navy">
                  <f.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal">{f.t}</h3>
                  <p className="mt-2 text-charcoal/70">{f.d}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-16 overflow-hidden rounded-2xl ring-1 ring-charcoal/10 md:mt-20">
            <img
              src={handshake}
              alt="Real estate agent shaking hands with a buyer in a beautifully staged home"
              loading="lazy"
              width={1280}
              height={896}
              className="h-[260px] w-full object-cover sm:h-[320px] md:h-[380px]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  return (
    <section id="pricing" className="relative bg-white grain-light">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Simple pricing. Pick what fits.
            </h2>
            <p className="mt-4 text-base text-charcoal/65 sm:text-lg">
              No setup fees. No annual contracts. Cancel anytime.
            </p>
          </div>
        </FadeUp>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          <StaggerItem>
            <PricingCard
              name="Bookr"
              price="$197"
              tagline="For agents who want their texts and DMs handled."
              features={[
                "AI replies to every lead within 5 minutes",
                "SMS, Facebook Messenger, Instagram DM, FB Lead Ads, website forms",
                "Learns your voice from your past messages",
                "English & Spanish auto-detect",
                "Qualifies and books appointments on your calendar",
                "Reminders, reschedules, cold-lead re-engagement",
                "Daily email summary",
                "White-glove setup (20-min call, we handle the rest)",
              ]}
              footnote="If a lead asks to talk on the phone, Bookr books them a phone call slot on your calendar — you take the call."
            />
          </StaggerItem>
          <StaggerItem>
            <PricingCard
              name="Bookr Pro"
              price="$397"
              tagline="Everything in Bookr — plus AI answers your phone calls too."
              highlighted
              features={[
                "Everything in Bookr",
                "AI answers inbound calls when you don't pick up",
                "Natural-sounding voice (English & Spanish)",
                "Qualifies callers and books appointments live on the call",
                "Live-transfers hot leads to your phone OR sends instant SMS notification",
                "You set when AI takes calls (after hours, when busy, or always)",
                "Custom voice profile matched to your style",
              ]}
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function PricingCard({
  name, price, tagline, features, footnote, highlighted,
}: {
  name: string; price: string; tagline: string; features: string[]; footnote?: string; highlighted?: boolean;
}) {
  return (
    <div
      className={[
        "group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 md:p-10",
        "hover:-translate-y-1.5",
        highlighted
          ? "border-2 border-navy bg-white shadow-pro -translate-y-1 hover:shadow-pro"
          : "border border-border bg-white shadow-card hover:shadow-lift",
      ].join(" ")}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] text-charcoal uppercase shadow-md">
          Most Popular
        </div>
      )}
      <div className="flex items-baseline gap-2">
        <h3 className="font-display text-2xl font-bold text-charcoal">{name}</h3>
        {highlighted && <Phone className="h-4 w-4 text-navy" />}
      </div>
      <p className="mt-2 text-sm text-charcoal/65">{tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-bold tracking-tight text-charcoal">{price}</span>
        <span className="text-charcoal/60">/month</span>
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm text-charcoal/85">
            <Check className="mt-0.5 h-5 w-5 flex-none text-navy" strokeWidth={2.25} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {footnote && (
        <p className="mt-6 rounded-lg bg-offwhite p-4 text-xs text-charcoal/65">{footnote}</p>
      )}
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={[
          "mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200",
          "active:scale-[0.98]",
          highlighted
            ? "bg-navy text-white hover:bg-navy/90 hover:shadow-lg"
            : "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
        ].join(" ")}
      >
        Book my demo
      </a>
    </div>
  );
}

/* ---------------- DATA TRANSPARENCY ---------------- */
function DataTransparency() {
  const items = [
    { e: "🔒", t: "We connect Bookr to your existing tools (Facebook, Instagram, calendar, phone). Read-only on past conversations, send-only on new ones." },
    { e: "🚫", t: "We never sell, share, or analyze your lead data with anyone. Your leads are yours." },
    { e: "↩️", t: "Revoke Bookr's access in 30 seconds from your existing Facebook, Google, or phone settings. No retention drama." },
  ];
  return (
    <section className="relative bg-offwhite grain-light">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 md:py-24">
        <FadeUp>
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            What we access — and what we don't.
          </h2>
        </FadeUp>
        <Stagger className="mx-auto mt-10 max-w-3xl space-y-4">
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-4 rounded-xl border border-border bg-white p-5">
                <span className="text-xl">{it.e}</span>
                <p className="text-charcoal/80">{it.t}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- WHO IT'S FOR ---------------- */
function ForAndNotFor() {
  const yes = [
    "Run Facebook/Instagram ads or have a website pulling in leads",
    "Are tired of choosing between answering their phone and being present with family",
    "Don't want to learn another piece of software",
    "Want their evenings, weekends, and vacations back",
    "Lead a team of 2–15 agents and want consistent lead handling across everyone",
  ];
  const no = [
    "You think you can chase 200 leads a month yourself and still be a present parent",
    "You don't generate any leads and want us to fix that (we make leads close — we don't make leads exist)",
    "You're already running an inside sales team handling every lead in under 5 minutes",
    "You actually enjoy answering texts at 11 PM",
  ];
  return (
    <section className="relative isolate overflow-hidden bg-charcoal-radial text-white grain">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-[0.10] mix-blend-soft-light lg:block"
        style={{
          backgroundImage: `linear-gradient(to right, var(--charcoal), transparent 60%), url(${goldenHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-16 lg:py-32">
        <FadeUp>
          <h3 className="font-display text-2xl font-semibold text-white">Bookr is for realtors who:</h3>
          <ul className="mt-6 space-y-4">
            {yes.map((y) => (
              <li key={y} className="flex gap-3 text-white/85">
                <Check className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span>{y}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h3 className="font-display text-2xl font-semibold text-white">Bookr isn't for everyone:</h3>
          <ul className="mt-6 space-y-4">
            {no.map((n) => (
              <li key={n} className="flex gap-3 text-white/70">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center text-white/50">✕</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-radial text-white grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12] mix-blend-soft-light"
        style={{
          backgroundImage: `url(${goldenHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Your family is worth it. Your business is worth it. You're worth it.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Book a 15-minute demo. We'll show you exactly what your week looks
            like with Bookr running in the background.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="mt-12">
            <BookrFormEmbed />
            <p className="mt-4 text-sm text-white/60">
              No credit card. No pressure. Just a quick call.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
