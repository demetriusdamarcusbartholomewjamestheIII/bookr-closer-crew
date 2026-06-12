import { useEffect, useState, type ReactNode } from "react";
import { usePageLoad } from "@/contexts/page-ready";

const FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const FORM_SRC =
  "https://api.leadconnectorhq.com/widget/form/HyUF0g5OS3M1aVYjGOek";
const FORM_ID = "HyUF0g5OS3M1aVYjGOek";

function FormSkeleton() {
  return (
    <div className="space-y-4 px-1 py-2" aria-hidden="true">
      <div className="h-4 w-2/5 rounded bg-charcoal/8" />
      <div className="h-11 rounded-lg bg-charcoal/6" />
      <div className="h-4 w-1/3 rounded bg-charcoal/8" />
      <div className="h-11 rounded-lg bg-charcoal/6" />
      <div className="h-4 w-2/5 rounded bg-charcoal/8" />
      <div className="h-11 rounded-lg bg-charcoal/6" />
      <div className="h-4 w-1/4 rounded bg-charcoal/8" />
      <div className="h-24 rounded-lg bg-charcoal/6" />
      <div className="h-11 rounded-lg bg-navy/20" />
    </div>
  );
}

export function BookrFormEmbed({
  label = "Book a 15-minute demo",
  embedId = "bookr-demo-form",
}: {
  label?: string;
  embedId?: string;
}) {
  const { ready: pageReady, preload: pagePreload } = usePageLoad();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [formReady, setFormReady] = useState(false);
  const shouldLoad = pagePreload || pageReady;

  useEffect(() => {
    if (!shouldLoad) return;
    if (document.querySelector('script[data-bookr-embed="true"]')) return;
    const s = document.createElement("script");
    s.src = FORM_EMBED_SCRIPT;
    s.async = true;
    s.setAttribute("data-bookr-embed", "true");
    document.body.appendChild(s);
  }, [shouldLoad]);

  useEffect(() => {
    if (!pageReady || !iframeLoaded) return;
    const timer = window.setTimeout(() => setFormReady(true), 120);
    return () => window.clearTimeout(timer);
  }, [pageReady, iframeLoaded]);

  const iframeId = `inline-${embedId}`;

  return (
    <div
      id={embedId}
      className="mx-auto w-full max-w-[520px] rounded-xl bg-white p-6 shadow-card"
    >
      <p className="mb-4 text-sm font-semibold tracking-wide text-charcoal uppercase">
        {label}
      </p>
      <div className="relative w-full overflow-hidden rounded-lg bg-white" style={{ minHeight: 720 }}>
        {pageReady && !formReady && (
          <div className="absolute inset-0 z-10 bg-white">
            <FormSkeleton />
          </div>
        )}
        {shouldLoad && (
          <iframe
            src={FORM_SRC}
            onLoad={() => setIframeLoaded(true)}
            style={{
              width: "100%",
              minHeight: 720,
              height: 720,
              border: "none",
              borderRadius: 8,
              background: "#FFFFFF",
              display: "block",
              opacity: formReady ? 1 : 0,
              transition: "opacity 250ms ease-out",
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
        )}
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