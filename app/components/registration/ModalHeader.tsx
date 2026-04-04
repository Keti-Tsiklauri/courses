"use client";

import Image from "next/image";
import { SignUpContext } from "@/app/context/SignUpContext";
import { useContext } from "react";

export default function ModalHeader() {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("ModalHeader must be used within a SignUpProvider");
  }

  const { step, setStep } = context;

  return (
    <div className="flex justify-between items-center w-[420px] bg-white">
      {/* Back button container */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        {step > 1 && (
          <button onClick={() => setStep((prev) => prev - 1)}>
            <Image
              src="/images/arrow-left.svg"
              alt="Back"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </button>
        )}
      </div>

      {/* Close button container */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <button>
          <Image
            src="/images/close-icon.svg"
            alt="Close"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
