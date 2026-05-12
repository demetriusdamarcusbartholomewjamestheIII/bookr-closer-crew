import { useEffect } from "react";

export function BookrFormEmbed({ label = "Book a 15-minute demo" }: { label?: string }) {
  useEffect(() => {
    if (document.querySelector('script[data-bookr-embed]')) return;
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.async = true;
    s.setAttribute("data-bookr-embed", "true");
    document.body.appendChild(s);
  }, []);

  return (
    <div className="mx-auto w-full max-w-[520px] rounded-xl bg-white p-6 shadow-card">
      <p className="mb-4 text-sm font-semibold tracking-wide text-charcoal uppercase">
        {label}
      </p>
      <div className="w-full rounded-lg bg-white" style={{ minHeight: 720 }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/HyUF0g5OS3M1aVYjGOek"
          style={{
            width: "100%",
            minHeight: 720,
            height: "100%",
            border: "none",
            borderRadius: 8,
            background: "#FFFFFF",
            display: "block",
          }}
          id="inline-HyUF0g5OS3M1aVYjGOek"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Bookr Demo Request"
          data-height="720"
          data-layout-iframe-id="inline-HyUF0g5OS3M1aVYjGOek"
          data-form-id="HyUF0g5OS3M1aVYjGOek"
          title="Bookr Demo Request"
        />
      </div>
    </div>
  );
}
