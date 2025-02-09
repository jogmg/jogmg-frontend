"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  isInView1: boolean;
  setIsInView1: (inView: boolean) => void;
  isInView2: boolean;
  setIsInView2: (inView: boolean) => void;
  isInView3: boolean;
  setIsInView3: (inView: boolean) => void;
  isInView4: boolean;
  setIsInView4: (inView: boolean) => void;
  isInView5: boolean;
  setIsInView5: (inView: boolean) => void;
  isInView6: boolean;
  setIsInView6: (inView: boolean) => void;
}

const SharedContext = createContext<Props | undefined>(undefined);

export function SharedContextProvider({ children }: { children: ReactNode }) {
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);
  const [isInView4, setIsInView4] = useState(false);
  const [isInView5, setIsInView5] = useState(false);
  const [isInView6, setIsInView6] = useState(false);

  return (
    <SharedContext.Provider
      value={{
        isInView1,
        setIsInView1,
        isInView2,
        setIsInView2,
        isInView3,
        setIsInView3,
        isInView4,
        setIsInView4,
        isInView5,
        setIsInView5,
        isInView6,
        setIsInView6,
      }}
    >
      {children}
    </SharedContext.Provider>
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
