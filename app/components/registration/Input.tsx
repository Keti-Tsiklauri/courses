import React from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  helperText,
}: InputProps) {
  return (
    <div className="flex flex-col w-[360px] gap-[2px]">
      {/* Label */}
      <label className="text-[14px] leading-[17px] font-inter font-medium text-[#3D3D3D]">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[360px] h-[48px] px-[13px] py-[12px] border-[1.5px] border-[#D1D1D1] rounded-[8px] text-[14px] leading-[17px] text-[#8A8A8A] focus:outline-none"
      />

      {/* Helper Text */}
      {helperText && (
        <p className="text-[12px] leading-[16px] text-[#ADADAD]">
          {helperText}
        </p>
      )}
    </div>
  );
}
