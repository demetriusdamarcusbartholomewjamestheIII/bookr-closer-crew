import { useEffect, useState, type ReactNode } from "react";
import { usePageReady } from "@/contexts/page-ready";

const FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const FORM_SRC =
  "https://api.leadconnectorhq.com/widget/form/HyUF0g5OS3M1aVYjGOek";
const FORM_ID = "HyUF0g5OS3M1aVYjGOek";
const FORM_REVEAL_DELAY_MS = 500;

export function BookrFormEmbed({
  label = "Book a 15-minute demo",
  embedId = "bookr-demo-form",
}: {
  label?: string;
  embedId?: string;
}) {
  const pageReady = usePageReady();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!pageReady) return;
    const timer = window.setTimeout(() => setShowForm(true), FORM_REVEAL_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pageReady]);

  useEffect(() => {
    if (!showForm) return;
    if (document.querySelector('script[data-bookr-embed="true"]')) return;
    const s = document.createElement("script");
    s.src = FORM_EMBED_SCRIPT;
    s.async = true;
    s.setAttribute("data-bookr-embed", "true");
    document.body.appendChild(s);
  }, [showForm]);

  const iframeId = `inline-${embedId}`;

  return (
    <div
      id={embedId}
      className={[
        "mx-auto w-full max-w-[520px] rounded-xl bg-white p-6 shadow-card transition-opacity duration-500 ease-out",
        showForm ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      aria-hidden={!showForm}
    >
      <p className="mb-4 text-sm font-semibold tracking-wide text-charcoal uppercase">
        {label}
      </p>
      <div className="w-full rounded-lg bg-white" style={{ minHeight: 720 }}>
        {showForm ? (
          <iframe
            src={FORM_SRC}
            style={{
              width: "100%",
              minHeight: 720,
              height: "100%",
              border: "none",
              borderRadius: 8,
              background: "#FFFFFF",
              display: "block",
            }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Bookr Demo Request"
            data-height="720"
            data-layout-iframe-id={iframeId}
            data-form-id={FORM_ID}
            title="Bookr Demo Request"
          />
        ) : null}
      </div>
    </div>
  );
}

export function BookDemoButton({
  className = "",
  children = "Book a 15-minute demo",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href="#bookr-demo-form"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("bookr-demo-form")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }}
      className={className}
    >
      {children}
    </a>
  );
}