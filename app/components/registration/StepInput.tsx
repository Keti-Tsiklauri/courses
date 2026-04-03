export default function StepInput() {
  return (
    <div className="flex flex-col w-[360px] gap-[16px]">
      {/* Email / Password / Username can be repeated */}
      <div className="flex flex-col w-[360px] gap-[2px]">
        <label className="text-[14px] leading-[17px] font-inter font-medium text-[#3D3D3D]">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[360px] h-[48px] px-[13px] py-[12px] border border-[#D1D1D1] rounded-[8px] focus:outline-none"
        />
      </div>
      <div className="flex flex-col w-[360px] gap-[2px]">
        <label className="text-[14px] leading-[17px] font-inter font-medium text-[#3D3D3D]">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-[360px] h-[48px] px-[13px] py-[12px] border border-[#D1D1D1] rounded-[8px] focus:outline-none"
        />
      </div>
    </div>
  );
}
