import { createFileRoute } from "@tanstack/react-router";
import { Mic, Languages, Phone, Hand, Eye, Check } from "lucide-react";
import { BookDemoButton, BookrFormEmbed } from "@/components/BookrFormEmbed";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FadeUp, Stagger, StaggerItem } from "@/components/Motion";
import { CountUp } from "@/components/CountUp";
const livingRoom = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format";
const goldenHome = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format";
const hispanicNeighborhood = "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80&auto=format";
const suburbanAerial = "https://images.unsplash.com/photo-1592595896616-c37162298647?w=1600&q=80&auto=format";
const sunsetHome = "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600&q=80&auto=format";

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

function LandingPage() {
  return (
    <main className="bg-background text-charcoal">
      <Hero />
      <Problem />
      <Solution />
      <FourPillars />
      <BilingualSection />
      <SupervisionDashboard />
      <HowItWorks />
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
    <section id="top" className="relative isolate overflow-hidden bg-warm-navy text-white">
      {/* Golden-hour home photo — clearly visible, softly warm */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${sunsetHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.28,
        }}
      />
      {/* Navy gradient overlay for copy contrast */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(63, 75, 104, 0.78) 0%, rgba(69, 82, 113, 0.62) 60%, rgba(90, 107, 142, 0.55) 100%)",
        }}
      />
      {/* Warm light bloom — upper right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 196, 140, 0.22) 0%, rgba(255, 196, 140, 0.10) 40%, transparent 70%)",
        }}
      />
      <SiteHeader variant="navy" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-24 pb-16 sm:px-8 md:pt-36 md:pb-24 lg:grid-cols-12 lg:gap-16 lg:pt-40">
        <div className="order-1 lg:col-span-6 lg:pt-6">
          <h1 className="text-[2.25rem] leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl">
            Realtors close deals.
            <br />
            <span className="inline-block text-white/85">
              Bookr does everything else.
            </span>
          </h1>
          <p className="mt-6 max-w-[620px] text-base text-white/80 sm:text-lg md:text-xl">
            Stop missing dinners chasing leads. Bookr replies, qualifies, and
            books appointments on your calendar — automatically, day and night.
            You just show up.
          </p>
          <div className="mt-7 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-xs text-white/90 backdrop-blur sm:text-sm">
              <span className="font-medium">🇺🇸 English</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="font-medium">🇲🇽 Español</span>
            </span>
            <span className="text-xs text-white/60 sm:text-sm">— auto-detects your lead's language</span>
          </div>
          <p className="mt-4 max-w-[560px] text-xs text-white/55 sm:text-sm">
            No credit card. No sales call. Just a 15-minute look at your week with Bookr.
          </p>
        </div>

        <div className="order-2 px-0 lg:col-span-6">
          <BookrFormEmbed embedId="bookr-demo-form" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  return (
    <section className="relative overflow-hidden bg-warm-navy-deep text-white">
      {/* Architectural overlay continuing from hero */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${goldenHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          filter: "blur(10px) saturate(0.6)",
          opacity: 0.12,
          transform: "scale(1.05)",
        }}
      />
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            The average lead goes cold in 5 minutes. Most realtors take 47 hours to reply.
          </h2>
        </FadeUp>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-6 md:auto-rows-fr">
          <StaggerItem className="h-full">
            <StatCard
              valueNode={<CountUp to={47} suffix=" hrs" />}
              label="Average realtor reply time to a new lead"
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <StatCard
              valueNode={<><span className="text-white/70">&lt; </span><CountUp to={5} suffix=" min" /></>}
              label="What top performers reply within"
            />
          </StaggerItem>
          <StaggerItem className="h-full">
            <StatCard
              valueNode={<><CountUp to={9} />×</>}
              label="More deals closed by fast responders"
            />
          </StaggerItem>
        </Stagger>

        <FadeUp delay={0.1}>
          <p className="mx-auto mt-14 max-w-3xl text-base text-white/80 sm:text-lg md:text-xl md:mt-16">
            A lead who fills out a form on Zillow is texting three other agents before you finish dinner. By the time you reply, they've already booked with someone else. It's not your fault — you can't be available 24/7. But your competitor's software can.
          </p>
        </FadeUp>
      </div>
      {/* Soft 60px gradient fade into next cream section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-b from-transparent to-[#F5F1E8]" />
    </section>
  );
}

function StatCard({ valueNode, label }: { valueNode: React.ReactNode; label: string }) {
  return (
    <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.06] sm:p-8 md:min-h-[320px]">
      <div className="font-display text-5xl font-bold leading-none tracking-tight text-accent sm:text-6xl md:text-[5.5rem]">
        {valueNode}
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.12em] text-white/65 sm:text-sm sm:tracking-wider">
        {label}
      </p>
    </div>
  );
}

/* ---------------- SOLUTION (BRIDGE) ---------------- */
function Solution() {
  return (
    <section className="relative overflow-hidden bg-[#F5F1E8] grain-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:py-28 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-32">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Meet Bookr — <span className="text-navy">the closing partner that never sleeps.</span>
          </h2>
          <div className="mt-7 space-y-5 text-base text-charcoal/80 sm:text-lg">
            <p>
              Bookr is personalized marketing software, trained on how YOU talk to
              your clients. It replies to every lead in under five minutes, qualifies
              them with the right questions, and books real appointments on your
              calendar — automatically.
            </p>
            <p>
              You don't log in. You don't check a dashboard. You don't tweak
              anything. We set it up for you in a 20-minute call, and from that
              moment on, Bookr just runs.
            </p>
            <p className="font-medium text-charcoal">
              When you sit down for dinner, Bookr is working. When you're at your
              daughter's recital, Bookr is working. When you wake up tomorrow, there
              are appointments on your calendar — booked, confirmed, qualified.
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="relative overflow-hidden rounded-2xl shadow-card order-first lg:order-last">
            <img
              src={livingRoom}
              alt="A sunlit modern living room with warm wood tones"
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

/* ---------------- FOUR PILLARS ---------------- */
function FourPillars() {
  const pillars = [
    {
      icon: Languages,
      t: "Replies in your lead's language",
      d: "Every lead gets a thoughtful, personal reply in under five minutes — in English or Spanish, auto-detected. No template messages, no awkward translations. Just a conversation that feels like you wrote it.",
    },
    {
      icon: Mic,
      t: "Trained on your voice",
      d: "Before we activate your account, we read your past lead conversations and build Bookr to sound like you. Your phrases, your tone, your style. Leads can't tell it's automation — and that's the point.",
    },
    {
      icon: Phone,
      t: "Picks up when you can't",
      d: "Inbound calls don't go to voicemail. Bookr's voice line answers, qualifies the lead in natural conversation, and either books an appointment or schedules a callback. You never lose a deal because you were showing a house.",
    },
    {
      icon: Hand,
      t: "Hands off, always",
      d: "No dashboard. No app. No daily check-ins. Bookr plugs into your existing Facebook, Instagram, website forms, and calendar — and just runs. The only thing you'll get from us is an optional weekly summary email.",
    },
  ];
  return (
    <section className="relative bg-[#F5F1E8] grain-light">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="max-w-4xl text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Four things every realtor wishes their CRM did.
          </h2>
        </FadeUp>
        <Stagger className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
          {pillars.map((p) => (
            <StaggerItem key={p.t}>
              <div className="group flex gap-5 rounded-2xl border border-charcoal/8 bg-white/60 p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift md:p-9">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-charcoal">
                  <p.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal">{p.t}</h3>
                  <p className="mt-2 text-charcoal/75 leading-relaxed">{p.d}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- BILINGUAL ---------------- */
function BilingualSection() {
  return (
    <section className="relative overflow-hidden bg-warm-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${hispanicNeighborhood})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px) saturate(0.7)",
          opacity: 0.15,
          transform: "scale(1.05)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[680px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255, 196, 140, 0.15) 0%, rgba(255, 196, 140, 0.05) 45%, transparent 75%)",
        }}
      />
      {/* Top fade from cream */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-[#F5F1E8] to-transparent" />
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 md:py-32 lg:py-36">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            <span className="italic text-accent">1 in 3</span> home buyers in the US speaks Spanish at home.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg md:text-xl">
            If your software replies in English only, you're invisible to a third of your market.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
            Bookr speaks fluent, native-register Spanish — not translated English. It auto-detects the language of every incoming message and responds in kind. Your Hispanic leads get the same five-minute, personal, professional experience your English leads do. No setup. No second account. Just one Bookr that speaks both.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/[0.06] px-5 py-2 text-sm font-medium text-white/90 backdrop-blur">
            <span>🇺🇸 EN</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>🇲🇽 ES</span>
            <span className="text-white/60">— auto-detects your lead's language</span>
          </div>
        </FadeUp>
      </div>
      {/* Bottom fade to cream */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-b from-transparent to-[#F5F1E8]" />
    </section>
  );
}

/* ---------------- SUPERVISION DASHBOARD ---------------- */
function SupervisionDashboard() {
  return (
    <section className="relative bg-[#F5F1E8] grain-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-8 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-32">
        <div className="lg:col-span-7">
          <FadeUp>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-charcoal/70">
              <Eye className="h-3.5 w-3.5" /> Supervision dashboard
            </div>
            <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              You don't have to watch. <span className="text-navy">But you can.</span>
            </h2>
            <div className="mt-7 space-y-5 text-base text-charcoal/80 sm:text-lg leading-relaxed">
              <p>
                We know what we're asking. You spent years building your reputation —
                and now we're asking you to trust software with your leads. So we built
                you a window into Bookr.
              </p>
              <p>
                Your free supervision dashboard shows every conversation Bookr is having
                with your leads, in real time. Read what was said. See who got booked.
                Watch the qualification questions in action. You can't edit or take over
                mid-conversation — that's by design, because Bookr works because it's
                consistent. But you can always look. Most clients check it once in the
                first week, then forget about it.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 rounded-lg bg-navy/5 px-4 py-2 text-sm font-medium text-navy">
              <Check className="h-4 w-4" />
              Included free with every Bookr plan. Read-only. Yours forever.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15} className="lg:col-span-5">
          <ConversationMockup />
        </FadeUp>
      </div>
    </section>
  );
}

function ConversationMockup() {
  const messages = [
    { from: "lead", text: "Hi, saw your listing on Zillow. Is the 3BR on Maple still available?", time: "8:42 PM" },
    { from: "bookr", text: "Hi Sarah! Yes, it's still on the market. Are you looking to move in the next 60 days, or further out?", time: "8:42 PM" },
    { from: "lead", text: "Within 30 days ideally. We're pre-approved.", time: "8:43 PM" },
    { from: "bookr", text: "Perfect — that's a great position. I have a tour slot Thursday at 5:30pm or Saturday at 11am. Which works better?", time: "8:43 PM" },
    { from: "lead", text: "Saturday 11 works.", time: "8:44 PM" },
    { from: "bookr", text: "Booked. You'll get a confirmation text and a reminder the morning of. See you Saturday!", time: "8:44 PM" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* Phone-screen frame */}
      <div className="overflow-hidden rounded-[28px] border border-charcoal/15 bg-white shadow-pro">
        <div className="flex items-center justify-between border-b border-charcoal/10 bg-[#F5F1E8] px-5 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">Live conversation</p>
            <p className="text-sm font-semibold text-charcoal">Sarah M. · New lead</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
          </span>
        </div>
        <div className="space-y-3 px-5 py-5">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "bookr" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                m.from === "bookr"
                  ? "bg-navy text-white rounded-br-md"
                  : "bg-charcoal/5 text-charcoal rounded-bl-md"
              }`}>
                <p>{m.text}</p>
                <p className={`mt-1 text-[10px] ${m.from === "bookr" ? "text-white/60" : "text-charcoal/45"}`}>{m.time}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              ✓ Appointment booked · Sat 11:00 AM
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <section className="relative bg-[#F5F1E8] grain-light">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="max-w-3xl text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            3 steps. Then it runs forever.
          </h2>
        </FadeUp>
        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group rounded-2xl border border-charcoal/10 bg-white p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-lift md:h-full md:p-8">
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

/* ---------------- PRICING ---------------- */
function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#F5F1E8] grain-light">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <div className="text-center">
            <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Two plans. Both make you money in week one.
            </h2>
            <p className="mt-4 text-base text-charcoal/65 sm:text-lg">
              No setup fees. No annual contracts. Cancel anytime.
            </p>
          </div>
        </FadeUp>

        <Stagger className="mt-14 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-2 lg:gap-8">
          <StaggerItem>
            <PricingCard
              name="Bookr Standard"
              price="$197"
              tagline="For agents who want their leads handled in every channel — except inbound calls."
              features={[
                "Replies to every lead in under 5 minutes",
                "SMS, Facebook Messenger, Instagram DMs, website forms",
                "Auto-detects English and Spanish",
                "Trained on your voice during onboarding",
                "Books real appointments on your real calendar",
                "Free supervision dashboard",
                "Inbound calls: AI notifies you to call back yourself",
              ]}
            />
          </StaggerItem>
          <StaggerItem>
            <PricingCard
              name="Bookr Pro"
              price="$397"
              tagline="Everything in Standard — plus AI voice answers your inbound calls when you don't pick up."
              highlighted
              features={[
                "Everything in Bookr Standard",
                "AI voice answers calls when you don't pick up",
                "Natural-sounding voice (English & Spanish)",
                "Qualifies callers and books appointments live on the phone",
                "Live transfer hot leads to your phone (15 second screen, SMS notification)",
                "You set when AI takes over (after hours, always, or when you're busy)",
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
        "group relative flex h-full flex-col rounded-2xl p-8 transition-all duration-150 md:p-10",
        "hover:-translate-y-1.5",
        highlighted
          ? "border-2 border-navy bg-white shadow-pro -translate-y-1 hover:shadow-pro"
          : "border border-border bg-white shadow-card hover:shadow-lift",
      ].join(" ")}
    >
      {highlighted && (
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.18)" }}
        >
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
          "mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-[120ms]",
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
    {
      ok: true,
      t: "We connect to your existing Facebook, Instagram, calendar, and website forms — and only those. Past conversations get read once during onboarding to train Bookr on your voice.",
    },
    {
      ok: true,
      t: "We only see your leads — never your personal contacts, friends, or family conversations. Bookr operates inside its own channel.",
    },
    {
      ok: false,
      t: "We never sell, share, or analyze your lead data for anyone else. Your leads are yours.",
    },
  ];
  return (
    <section className="relative bg-[#F5F1E8] grain-light">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 md:py-24">
        <FadeUp>
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#1F2937] md:text-4xl">
            What Bookr accesses — and what it doesn't.
          </h2>
        </FadeUp>
        <Stagger className="mx-auto mt-10 max-w-3xl space-y-4">
          {items.map((it, i) => (
            <StaggerItem key={i}>
              <div className="flex gap-4 rounded-xl border border-charcoal/10 bg-white p-5">
                {it.ok ? (
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                ) : (
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-rose-500/15 text-rose-700 font-bold">
                    ✕
                  </span>
                )}
                <p className="text-charcoal/85">{it.t}</p>
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
    "Run paid lead campaigns on Facebook or Instagram",
    "Are tired of choosing between answering the phone and being present with family",
    "Don't want to learn another piece of software",
    "Want their evenings, weekends, and vacations back",
    "Have a team of 2–25 agents and need consistent lead handling across everyone",
  ];
  const no = [
    "If you close fewer than 200 leads a month, the math doesn't quite work yet — wait until your volume justifies it",
    "If you want to write every lead reply yourself, Bookr will frustrate you",
    "If you only run open houses and don't generate online leads, you don't need us",
    "If you actively enjoy answering texts at 11pm, godspeed",
  ];
  return (
    <section className="relative isolate overflow-hidden bg-warm-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${suburbanAerial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) saturate(0.7)",
          opacity: 0.15,
          transform: "scale(1.05)",
        }}
      />
      {/* Top fade from cream */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-[#F5F1E8] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="text-center text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Who Bookr is for.
          </h2>
        </FadeUp>
        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h3 className="font-display text-2xl font-semibold text-white">Bookr is for realtors who:</h3>
            <ul className="mt-6 space-y-4">
              {yes.map((y) => (
                <li key={y} className="flex gap-3 text-[#F5F1E8]">
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
                <li key={n} className="flex gap-3 text-white/75">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center text-white/55">✕</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-warm-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${sunsetHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.28,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 178, 110, 0.18) 0%, transparent 65%)",
        }}
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 text-center sm:px-8 md:py-28 lg:py-32">
        <FadeUp>
          <h2 className="text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Your family is worth it. Your business is worth it. You're worth it.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#F5F1E8]/90 sm:text-lg">
            Book a 15-minute demo. We'll show you exactly what your week looks
            like with Bookr running in the background.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div>
            <BookDemoButton className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-navy transition-all duration-[120ms] hover:bg-white/90 active:scale-[0.98]">
              Book a 15-minute demo
            </BookDemoButton>
            <p className="mt-4 text-sm text-white/65">
              No credit card. No pressure. Just a quick look.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
