"use client";

import Image from "next/image";
import { useFilter } from "@/app/context/FilterContext";

export default function Instructors() {
  const { filteredInstructors, selectedInstructors, setSelectedInstructors } =
    useFilter();

  const toggleInstructor = (id: number) => {
    if (selectedInstructors.includes(id)) {
      setSelectedInstructors(selectedInstructors.filter((i) => i !== id));
    } else {
      setSelectedInstructors([...selectedInstructors, id]);
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      <h2 className="font-inter font-medium text-[18px] text-[#666666]">
        Instructors
      </h2>

      {/* 🔑 IMPORTANT CHANGE */}
      <div className="flex flex-wrap gap-2">
        {filteredInstructors.map((inst) => {
          const isActive = selectedInstructors.includes(inst.id);

          return (
            <div
              key={inst.id}
              onClick={() => toggleInstructor(inst.id)}
              className={`
                group flex items-center gap-[10px]
                px-[12px] py-[8px] rounded-[12px]
                cursor-pointer transition-all
                w-fit   /* 👈 makes width based on content */

                ${
                  isActive
                    ? "bg-[#EEEDFC] border border-[#281ED2]"
                    : "bg-white border border-gray-200 hover:bg-[#DDDBFA]"
                }
              `}
            >
              {/* Avatar */}
              <div className="relative w-[24px] h-[24px] rounded-[4px] overflow-hidden flex-shrink-0">
                <Image
                  src={inst.avatar}
                  alt={inst.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <span
                className={`
                  font-inter font-medium text-[16px] leading-[24px] whitespace-nowrap transition
                  ${
                    isActive
                      ? "text-[#281ED2]"
                      : "text-[#666666] group-hover:text-[#281ED2]"
                  }
                `}
              >
                {inst.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
