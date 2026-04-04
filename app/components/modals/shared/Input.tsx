import React from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  iconSrc?: string; // optional icon
  iconAlt?: string;
  onIconClick?: () => void; // optional click handler
  width?: string; // optional width prop, e.g., "360px" or "full"
}

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  helperText,
  iconSrc,
  iconAlt,
  onIconClick,
  width = "360px", // default width
}: InputProps) {
  return (
    <div className={`flex flex-col gap-[12px]`} style={{ width }}>
      {/* Label */}
      <label className="text-[14px] leading-[17px] font-inter font-medium text-[#3D3D3D]">
        {label}
      </label>

      {/* Input with optional icon */}
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-[48px] px-[13px] ${
            iconSrc ? "pr-[40px]" : "pr-[13px]"
          } py-[12px] border-[1.5px] border-[#D1D1D1] rounded-[8px] text-[14px] leading-[17px] text-[#8A8A8A] focus:outline-none`}
        />

        {iconSrc && (
          <div
            className="absolute right-[13px] top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={onIconClick}
          >
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              width={24}
              height={24}
            />
          </div>
        )}
      </div>

      {/* Helper Text */}
      {helperText && (
        <p className="text-[12px] leading-[16px] text-[#ADADAD]">
          {helperText}
        </p>
      )}
    </div>
  );
}
