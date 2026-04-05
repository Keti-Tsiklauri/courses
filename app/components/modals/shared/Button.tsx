"use client";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  width?: string;
  height?: string;
}

export default function Button({
  text,
  onClick,
  type = "button",
  className = "",
  width = "",
  height = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ width, height }}
      className={`flex justify-center items-center gap-[10px] bg-[#4F46E5] rounded-[8px] cursor-pointer ${className}`}
    >
      <span className="font-inter font-medium text-[16px] leading-[24px] text-white text-center">
        {text}
      </span>
    </button>
  );
}
