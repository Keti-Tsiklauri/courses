"use client";

import { useState } from "react";
import Image from "next/image";
interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
}

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  helperText,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-[360px] gap-[2px]">
      {/* Label */}
      <label className="text-[14px] leading-[17px] font-inter font-medium text-[#3D3D3D]">
        {label}
      </label>

      {/* Input with icon */}
      <div className="relative w-[360px]">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-[48px] px-[13px] pr-[40px] py-[12px] border-[1.5px] border-[#D1D1D1] rounded-[8px] text-[14px] leading-[17px] text-[#8A8A8A] focus:outline-none"
        />

        {/* Eye icon */}

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-[13px] top-1/2 -translate-y-1/2"
        >
          <Image
            alt="toggle password visibility"
            width={24}
            height={24}
            src={
              showPassword ? "/images/open-eye.svg" : "/images/closed-eye.svg"
            }
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Helper text */}
      {helperText && (
        <p className="text-[12px] leading-[16px] text-[#ADADAD]">
          {helperText}
        </p>
      )}
    </div>
  );
}
