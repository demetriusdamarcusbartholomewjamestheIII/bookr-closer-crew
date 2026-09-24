import { useRouterState } from "@tanstack/react-router";

/**
 * Href for a landing-page section that works from any route. On the home page it stays a
 * bare fragment, so jumping to a section never reloads the page or drops the query string
 * (UTM tags from ads); elsewhere it points back at the home page.
 */
export function useSectionHref() {
  const onHome = useRouterState({ select: (state) => state.location.pathname === "/" });
  return (id: string) => (onHome ? `#${id}` : `/#${id}`);
}
