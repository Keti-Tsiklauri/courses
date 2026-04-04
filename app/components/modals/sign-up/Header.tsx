"use client";

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string; // optional additional classes for the wrapper
}

export default function Header({ title, subtitle, className }: HeaderProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-[360px] gap-[6px] ${className ?? ""}`}
    >
      <h2 className="w-[360px] text-[32px] leading-[39px] font-inter font-semibold text-[#141414] text-center">
        {title}
      </h2>
      {subtitle && (
        <p className="w-[360px] text-[14px] leading-[17px] font-inter font-medium text-[#666666] text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}
