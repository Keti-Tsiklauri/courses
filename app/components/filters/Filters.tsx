import Image from "next/image";
import Categories from "./Categories";
import Topics from "./Topics";
import Instructors from "./Instructors";

export default function Filters() {
  return (
    <div className="flex flex-col gap-[56px] bg-[#F5F5F5]">
      <div className="flex justify-between items-center w-[309px]">
        {/* Filters */}
        <h1 className="font-inter font-semibold text-[40px] leading-[48px] text-[#0A0A0A] m-0">
          Filters
        </h1>

        {/* Clear All Filters */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="font-inter font-medium text-[16px] leading-[24px] text-[#8A8A8A]">
            Clear All Filters
          </span>
          <Image
            src="/images/close-icon.svg"
            alt="close"
            width={10}
            height={10}
          />
        </div>
      </div>

      <Categories />
      <Topics />
      <Instructors />
    </div>
  );
}
