import { createContext, useContext, type ReactNode } from "react";

const PageReadyContext = createContext(false);

export function PageReadyProvider({
  ready,
  children,
}: {
  ready: boolean;
  children: ReactNode;
}) {
  return (
    <PageReadyContext.Provider value={ready}>{children}</PageReadyContext.Provider>
  );
}

export function usePageReady() {
  return useContext(PageReadyContext);
}