"use client";
import { useContext } from "react";
import { SignUpContext } from "@/app/context/SignUpContext";

export default function NextButton() {
  // ✅ Destructure step and setStep from context
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("NextButton must be used within a SignUpProvider");
  }

  const { step, setStep } = context;

  return (
    <button
      onClick={() => setStep(step + 1)} // ✅ Pass a function to onClick
      className="w-[360px] h-[47px] flex justify-center items-center gap-[10px] bg-[#4F46E5] rounded-[8px] self-stretch"
    >
      <span className="w-[340px] h-[24px] font-inter font-medium text-[16px] leading-[24px] text-white text-center flex-grow order-0 cursor-pointer">
        Next
      </span>
    </button>
  );
}
