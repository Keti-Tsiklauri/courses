import Image from "next/image";
export default function AvatarUpload() {
  return (
    <label className="flex flex-col w-[360px] gap-[12px] cursor-pointer">
      <span className="text-[14px] font-medium text-[#3D3D3D]">Avatar</span>

      <div className="w-[360px] h-[140px] border-[1.5px] border-[#D1D1D1] rounded-[8px] flex flex-col justify-center items-center gap-[8px] bg-white">
        <Image
          src="/images/avatar-upload.svg"
          alt="Upload"
          width={34}
          height={34}
        />

        <div className="flex flex-col items-center gap-[6px]">
          <p className="text-[14px] font-medium text-[#666666] text-center">
            Drag and drop or{" "}
            <span className="cursor-pointer text-[blue] underline">
              Upload file
            </span>
          </p>
          <p className="text-[12px] text-[#ADADAD] text-center">
            JPG, PNG or WebP
          </p>
        </div>
      </div>

      {/* Hidden input */}
      <input type="file" className="hidden" />
    </label>
  );
}
