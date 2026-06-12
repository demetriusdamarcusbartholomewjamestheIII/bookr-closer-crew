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
      { name: "theme-color", content: "#FFFFFF" },
      { title: "Bookr — Realtors close deals. We do everything else." },
      { name: "description", content: "Done-for-you lead handling for real estate agents. Bookr replies, qualifies, and books appointments on your calendar — automatically." },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Bookr — Realtors close deals. We do everything else." },
      { name: "twitter:title", content: "Bookr — Realtors close deals. We do everything else." },
      { property: "og:description", content: "Done-for-you lead handling for real estate agents. Bookr replies, qualifies, and books appointments on your calendar — automatically." },
      { name: "twitter:description", content: "Done-for-you lead handling for real estate agents. Bookr replies, qualifies, and books appointments on your calendar — automatically." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b11dfc51-a1f3-4af9-b63a-c3fa76f3b273/id-preview-fab62ca9--39125925-7c08-477a-833c-0c9422ed0dfd.lovable.app-1778555090244.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b11dfc51-a1f3-4af9-b63a-c3fa76f3b273/id-preview-fab62ca9--39125925-7c08-477a-833c-0c9422ed0dfd.lovable.app-1778555090244.png" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://api.leadconnectorhq.com" },
      { rel: "preconnect", href: "https://link.msgsndr.com" },
      { rel: "preconnect", href: "https://beta.leadconnectorhq.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap",
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

    const timer = window.setTimeout(injectChatWidget, 150);
    return () => window.clearTimeout(timer);
  }, [pageLoad.ready]);

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
