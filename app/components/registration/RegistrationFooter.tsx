export default function RegistrationFooter() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[360px] h-[46px]">
      {/* Horizontal line */}
      <div className="relative w-[320px] flex items-center justify-center">
        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full border-t border-[#D1D1D1] -translate-y-1/2"></div>

        {/* OR text */}
        <span className="px-[10px] bg-white text-[18px] leading-[17px] font-inter font-medium text-[#8A8A8A]">
          or
        </span>
      </div>

      {/* Footer Text */}
      <div className="flex flex-row justify-center items-end w-[360px] gap-2 px-[60px]">
        <p className="text-[12px] leading-[15px] text-[#666666] text-center">
          Dont have an account?
        </p>
        <p className="text-[14px] leading-[17px] font-inter font-medium text-[#141414] underline cursor-pointer">
          Log In
        </p>
      </div>
    </div>
  );
}
