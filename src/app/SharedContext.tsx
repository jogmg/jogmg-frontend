"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from "react";

type InViewProps = {
  isInView1: boolean;
  isInView2: boolean;
  isInView3: boolean;
  isInView4: boolean;
  isInView5: boolean;
  isInView6: boolean;
};

interface Props {
  isInView: InViewProps;
  setIsInView: (type: keyof InViewProps, inView: boolean) => void;
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (status: boolean) => void;
}

const SharedContext = createContext<Props | undefined>(undefined);

export function SharedContextProvider({ children }: { children: ReactNode }) {
  const initialState: InViewProps = {
    isInView1: false,
    isInView2: false,
    isInView3: false,
    isInView4: false,
    isInView5: false,
    isInView6: false,
  };

  function reducer(
    state: InViewProps,
    action: { type: keyof InViewProps; payload: boolean }
  ): InViewProps {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }

  const [isInView, dispatch] = useReducer(reducer, initialState);

  const setIsInView = (type: keyof InViewProps, inView: boolean) => {
    dispatch({ type, payload: inView });
  };

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <SharedContext.Provider
      value={{
        isInView,
        setIsInView,
        isNavMenuOpen,
        setIsNavMenuOpen,
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
