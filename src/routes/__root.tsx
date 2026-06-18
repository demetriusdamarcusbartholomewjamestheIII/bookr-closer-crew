import { useCallback, useEffect, useState } from "react";
import { PageReadyProvider } from "../contexts/page-ready";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { BrandLoader } from "../components/BrandLoader";
import { useIsMobile } from "../hooks/use-mobile";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#3B4A6B" },
      { title: "Bookr — Every lead, answered in seconds" },
      {
        name: "description",
        content:
          "Bookr replies to every new lead in seconds, in English or Spanish, qualifies them, and books them on your calendar. Done for you.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Bookr — Every lead, answered in seconds" },
      { name: "twitter:title", content: "Bookr — Every lead, answered in seconds" },
      {
        property: "og:description",
        content:
          "A bilingual lead desk for realtors. Replies, qualifies, and books — day and night.",
      },
      {
        name: "twitter:description",
        content:
          "A bilingual lead desk for realtors. Replies, qualifies, and books — day and night.",
      },
      { property: "og:image", content: "https://heybookr.com/og-image.svg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://heybookr.com/og-image.svg" },
      { property: "og:url", content: "https://heybookr.com" },
      { property: "og:site_name", content: "Bookr" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://api.leadconnectorhq.com" },
      { rel: "preconnect", href: "https://link.msgsndr.com" },
      { rel: "preconnect", href: "https://beta.leadconnectorhq.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const loaderBootScript = `(function(){try{var s=sessionStorage.getItem("bookr-loader-seen");var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(s||r){document.documentElement.classList.add("bookr-skip-loader");return;}document.documentElement.classList.add("bookr-loading");}catch(e){}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: "#FFFFFF" }}>
      <head>
        <HeadContent />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html.bookr-loading #bookr-page-content{visibility:hidden}html.bookr-skip-loader .brand-loader{display:none!important}",
          }}
        />
        <script dangerouslySetInnerHTML={{ __html: loaderBootScript }} />
      </head>
      <body style={{ backgroundColor: "#FFFFFF" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function injectChatWidget() {
  if (document.querySelector('script[data-widget-id="6a275596cce0c0ecc8da236a"]')) return;

  const script = document.createElement("script");
  script.src = "https://beta.leadconnectorhq.com/loader.js";
  script.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
  script.setAttribute("data-widget-id", "6a275596cce0c0ecc8da236a");
  script.async = true;
  document.body.appendChild(script);
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const isMobile = useIsMobile();
  const [pageLoad, setPageLoad] = useState({ ready: false, preload: false });

  useEffect(() => {
    if (!pageLoad.preload) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "script";
    link.href = "https://beta.leadconnectorhq.com/loader.js";
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [pageLoad.preload]);

  useEffect(() => {
    if (!pageLoad.ready) return;

    if (!isMobile) {
      const timer = window.setTimeout(injectChatWidget, 150);
      return () => window.clearTimeout(timer);
    }

    let injected = false;
    let scrollEndTimer: ReturnType<typeof setTimeout> | undefined;

    const injectOnce = () => {
      if (injected) return;
      injected = true;
      injectChatWidget();
    };

    const onScroll = () => {
      if (scrollEndTimer) window.clearTimeout(scrollEndTimer);
      scrollEndTimer = window.setTimeout(injectOnce, 3000);
    };

    const fallback = window.setTimeout(injectOnce, 20000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimer) window.clearTimeout(scrollEndTimer);
      window.clearTimeout(fallback);
    };
  }, [pageLoad.ready, isMobile]);

  const startPreload = useCallback(() => {
    setPageLoad((s) => (s.preload ? s : { ...s, preload: true }));
  }, []);

  const finishLoader = useCallback(() => {
    document.documentElement.classList.remove("bookr-loading");
    setPageLoad((s) => ({ ...s, ready: true, preload: true }));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PageReadyProvider state={pageLoad}>
        <BrandLoader onFadeStart={startPreload} onFinished={finishLoader} />
        <div id="bookr-page-content">
          <Outlet />
        </div>
      </PageReadyProvider>
    </QueryClientProvider>
  );
  } 
