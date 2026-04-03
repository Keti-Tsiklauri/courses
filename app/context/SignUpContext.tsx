"use client";

import { createContext, useState, ReactNode } from "react";

// 1️⃣ Define the type for your context value
interface SignUpContextType {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  // add other shared signup states here
}

// 2️⃣ Create context with a default value (can be null initially)
export const SignUpContext = createContext<SignUpContextType | undefined>(
  undefined,
);

// 3️⃣ Define the props type for your provider
interface SignUpProviderProps {
  children: ReactNode;
}

// 4️⃣ Provider component
export function SignUpProvider({ children }: SignUpProviderProps) {
  const [step, setStep] = useState(1);

  const value: SignUpContextType = {
    step,
    setStep,
  };

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
}
