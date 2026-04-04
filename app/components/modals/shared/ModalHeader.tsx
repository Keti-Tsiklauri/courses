"use client";

import Image from "next/image";
import { SignUpContext } from "@/app/context/SignUpContext";
import { useContext } from "react";

interface ModalHeaderProps {
  showBack?: boolean; // whether to show the back button
  onBack?: () => void; // function to run on back click
  onClose?: () => void; // function to run on close click
}

export default function ModalHeader({
  showBack = false,
  onBack,
  onClose,
}: ModalHeaderProps) {
  const context = useContext(SignUpContext);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (context && context.step > 1) {
      context.setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-between items-center w-[420px] bg-white">
      {/* Back button */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        {showBack && (
          <button onClick={handleBack}>
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

      {/* Close button */}
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <button onClick={onClose}>
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
