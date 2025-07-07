"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ISharedContext {
  expInViews: Record<string, boolean>;
  setExpInViews: Dispatch<SetStateAction<{}>>;
  eduInViews: Record<string, boolean>;
  setEduInViews: Dispatch<SetStateAction<{}>>;
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (status: boolean) => void;
}

const SharedContext = createContext<ISharedContext | undefined>(undefined);

const queryClient = new QueryClient();

export function SharedContextProvider({ children }: { children: ReactNode }) {
  const [expInViews, setExpInViews] = useState({});
  const [eduInViews, setEduInViews] = useState({});
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <SharedContext.Provider
        value={{
          expInViews,
          setExpInViews,
          eduInViews,
          setEduInViews,
          isNavMenuOpen,
          setIsNavMenuOpen,
        }}
      >
        {children}
      </SharedContext.Provider>
    </QueryClientProvider>
  );
}

export default function useSharedContext() {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error(
      "sharedContext must be used within a SharedContextProvider"
    );
  }
  return context;
}
