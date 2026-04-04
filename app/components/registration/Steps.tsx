"use client";
import { SignUpContext } from "@/app/context/SignUpContext";
import { useContext } from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

export default function Steps() {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("NextButton must be used within a SignUpProvider");
  }

  const { step, setStep } = context;
  return (
    <div>
      {step === 1 && (
        <div>
          <Input label="Email*" placeholder="you@example.com" type="email" />
        </div>
      )}
      {step === 2 && (
        <div className="flex  flex-col gap-4">
          <PasswordInput label="Password*" placeholder="Password" />

          <PasswordInput
            label="Confirm Password*"
            placeholder="Repeat your password"
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <Input label="UserName*" placeholder="Username" type="text" />
        </div>
      )}
    </div>
  );
}
