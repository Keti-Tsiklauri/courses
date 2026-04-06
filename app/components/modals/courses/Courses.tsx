"use client";
import { useFilter } from "@/app/context/FilterContext";
import Image from "next/image";
import Button from "../shared/Button";

export default function Courses() {
  const { filteredCourses } = useFilter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.slice(0, 9).map((course) => (
        <div
          key={course.id}
          className="flex flex-col items-start p-5 gap-6 w-[373px] h-[451px] bg-white border border-gray-100 rounded-xl"
        >
          {/* Course content */}
          <div className="relative w-full aspect-[333/181] rounded-[10px] overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-center w-[333px]">
            <p className="text-sm text-gray-400">{course.instructor.name}</p>
            <p className="text-sm text-gray-400">
              {course.durationWeeks} Weeks
            </p>
          </div>
          <h3 className="font-inter font-semibold text-[20px] text-[#0A0A0A] line-clamp-2">
            {course.title}
          </h3>
          <div className="flex justify-center items-center px-3 py-2 gap-1.5 w-[150px] h-[40px] bg-[#F5F5F5] rounded-[12px]">
            <span className="font-inter font-medium text-[16px] text-[#525252]">
              {course.category.name}
            </span>
          </div>
          <div className="flex justify-between items-center w-[333px]">
            <div>
              <span className="text-[12px] text-[#ADADAD]">Starting from</span>
              <span className="font-semibold text-[24px] text-[#3D3D3D]">
                ${course.basePrice}
              </span>
            </div>
            <Button width="100px" height="48px" text="Details" />
          </div>
        </div>
      ))}
    </div>
  );
}
