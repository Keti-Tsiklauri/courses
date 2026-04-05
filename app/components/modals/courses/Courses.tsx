"use client";

import { useEffect, useState } from "react";
import { Course } from "@/app/types/types";
import Image from "next/image";
import Button from "../shared/Button";
export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          "https://api.redclass.redberryinternship.ge/api/courses?sort=newest&page=2",
        );

        const data = await res.json();
        setCourses(data.data);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.slice(0, 9).map((course) => (
        <div
          key={course.id}
          className="box-border flex flex-col items-start p-5 gap-6 w-[373px] h-[451px] bg-white border border-gray-100 rounded-xl"
        >
          {/* image */}
          <div className="relative w-full aspect-[333/181] rounded-[10px] overflow-hidden flex items-center justify-center">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          {/* course rating and instructor */}
          <div className="flex flex-wrap justify-between items-center gap-2 w-[333px] h-[18px]">
            <div className="flex items-center gap-2 w-[181px] h-[17px]">
              <p className="text-sm leading-[17px] font-medium text-gray-400">
                {course.instructor.name}
              </p>
              <div className="w-[2px] h-[14px] bg-gray-300 rounded-full"></div>
              <p className="text-sm leading-[17px] font-medium text-gray-400">
                {course.durationWeeks} Weeks
              </p>
            </div>
            <div className="flex items-center gap-1 w-[44px] h-[18px] relative">
              {/* Star icon */}
              <Image alt="star" width={18} height={18} src="/images/star.svg" />
              <p className="text-sm leading-[17px] font-medium text-gray-600">
                {course.avgRating}
              </p>
            </div>
          </div>
          {/* course title */}
          <div>
            <h3 className="w-full font-inter font-semibold text-[20px] text-[#0A0A0A] line-clamp-2">
              {course.title}
            </h3>
          </div>
          <div className="flex flex-row justify-center items-center px-3 py-2 gap-1.5 w-[150px] h-[40px] bg-[#F5F5F5] rounded-[12px] flex-none">
            {/* Category Name */}
            <span className="w-[102px] h-[24px] font-inter font-medium text-[16px] leading-[24px] text-center text-[#525252] flex-none">
              {course.category.name}
            </span>
          </div>
          {/* price and details button */}
          <div className="w-[333px] h-[48px] flex flex-row justify-between">
            <div className="flex flex-col justify-center items-start w-[144px] h-[44px]  flex-none">
              <span className="w-[76px] h-[15px] font-inter font-medium text-[12px] leading-[15px] text-[#ADADAD] flex-none">
                Starting from
              </span>

              <span className="w-[62px] h-[29px] font-inter font-semibold text-[24px] leading-[29px] text-right text-[#3D3D3D] flex-none">
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
