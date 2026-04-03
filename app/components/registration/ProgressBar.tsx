"use client";

import { SignUpContext } from "@/app/context/SignUpContext";
import { useContext } from "react";

export default function ProgressBar() {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("NextButton must be used within a SignUpProvider");
  }

  const { step } = context;
  return (
    <div className="flex flex-row w-[360px] h-[8px] gap-[8px]">
      {[1, 2, 3].map((s) => (
        <div key={s} className="relative flex-1 h-full">
          <div
            className={`absolute left-0 top-0 h-full w-full rounded-full ${
              s < step
                ? "bg-[#4F46E5]" // already passed
                : s === step
                  ? "bg-[#B7B3F4]" // active step
                  : "bg-[#EEEDFC]" // not reached
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
}
