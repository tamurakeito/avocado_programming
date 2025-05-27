"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type DartPadContextType = {
  isDartPad: boolean;
  toggleDartPad: () => void;
  gist: string;
  setGist: (gist: string) => void;
};

const DartPadContext = createContext<DartPadContextType | undefined>(undefined);

export const DartPadProvider = ({ children }: { children: ReactNode }) => {
  const [isDartPad, setIsDartPad] = useState<boolean>(false);
  const [gist, setGist] = useState<string>("");
  const toggleDartPad = () => setIsDartPad((prev) => !prev);

  return (
    <DartPadContext.Provider
      value={{ isDartPad, toggleDartPad, gist, setGist }}
    >
      {children}
    </DartPadContext.Provider>
  );
};

export const useDartPad = () => {
  const context = useContext(DartPadContext);
  if (!context) {
    throw new Error("useDartPad must be used within a DartPadProvider");
  }
  return context;
};
