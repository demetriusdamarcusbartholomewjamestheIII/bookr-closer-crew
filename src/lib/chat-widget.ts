// Web-chat widget. __root.tsx injects it after the intro (desktop) or once scrolling
// settles (mobile); the hero's "message us" link can also load and open it on demand.

const WIDGET_ID = "6a275596cce0c0ecc8da236a";
export const CHAT_WIDGET_LOADER_URL = "https://beta.leadconnectorhq.com/loader.js";
const CHAT_WIDGET_RESOURCES_URL = "https://beta.leadconnectorhq.com/chat-widget/loader.js";

/** How long to wait for the widget before giving up (blocked by an extension, offline, …). */
const OPEN_TIMEOUT_MS = 6000;

type WidgetWindow = Window & {
  leadConnector?: { chatWidget?: { openWidget?: () => void } };
};

export function injectChatWidget() {
  if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) return;

  const script = document.createElement("script");
  script.src = CHAT_WIDGET_LOADER_URL;
  script.setAttribute("data-resources-url", CHAT_WIDGET_RESOURCES_URL);
  script.setAttribute("data-widget-id", WIDGET_ID);
  script.async = true;
  document.body.appendChild(script);
}

/**
 * Opens the chat widget, injecting it first if it hasn't loaded yet.
 * Calls `onUnavailable` if the widget's API never appears.
 */
export function openChatWidget(onUnavailable: () => void) {
  const widget = () => (window as WidgetWindow).leadConnector?.chatWidget;
  const ready = widget();
  if (ready?.openWidget) {
    ready.openWidget();
    return;
  }

  injectChatWidget();
  const startedAt = Date.now();
  const poll = window.setInterval(() => {
    const loaded = widget();
    if (loaded?.openWidget) {
      window.clearInterval(poll);
      loaded.openWidget();
    } else if (Date.now() - startedAt > OPEN_TIMEOUT_MS) {
      window.clearInterval(poll);
      onUnavailable();
    }
  }, 250);
}
