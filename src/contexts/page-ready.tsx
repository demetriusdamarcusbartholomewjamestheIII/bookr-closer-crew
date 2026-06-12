import { createContext, useContext, type ReactNode } from "react";

type PageLoadState = {
  ready: boolean;
  preload: boolean;
};

const defaultState: PageLoadState = { ready: false, preload: false };

const PageLoadContext = createContext<PageLoadState>(defaultState);

export function PageReadyProvider({
  state,
  children,
}: {
  state: PageLoadState;
  children: ReactNode;
}) {
  return (
    <PageLoadContext.Provider value={state}>{children}</PageLoadContext.Provider>
  );
}

export function usePageLoad() {
  return useContext(PageLoadContext);
}

export function usePageReady() {
  return useContext(PageLoadContext).ready;
}

export function usePagePreload() {
  return useContext(PageLoadContext).preload;
}