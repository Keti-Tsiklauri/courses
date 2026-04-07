import SortDropdownUI from "./SortDropDown";

export default function CoursesHeader() {
  return (
    <div className="flex flex-row justify-between items-center w-[1170px]">
      <p className=" w-[159px] h-[24px]  font-inter font-medium text-[16px] leading-[24px] text-[#666666]">
        Showing 9 out of 90
      </p>
      <SortDropdownUI />
    </div>
  );
}
