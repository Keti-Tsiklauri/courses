"use client";
import { useFilter } from "@/app/context/FilterContext";
import SortDropdownUI from "./SortDropDown";

export default function CoursesHeader() {
  const { currentPage, itemsPerPage, totalCourses } = useFilter();
  return (
    <div className="flex flex-row justify-between items-center w-[1170px]">
      <p className=" w-[200px] h-[24px]  font-inter font-medium text-[16px] leading-[24px] text-[#666666]">
        {/* Showing X-Y out of Z */}
        Showing {(currentPage - 1) * itemsPerPage + 1}-
        {Math.min(currentPage * itemsPerPage, totalCourses)} out of{" "}
        {totalCourses}
      </p>
      <SortDropdownUI />
    </div>
  );
}
