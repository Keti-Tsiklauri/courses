"use client";

import { useState } from "react";
import Image from "next/image";
import { useFilter } from "@/app/context/FilterContext";

export default function Instructors() {
  const [loading, setLoading] = useState(true);

  const { filteredInstructors, selectedInstructors, setSelectedInstructors } =
    useFilter();

  if (loading) return <p>Loading instructors...</p>;

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      {/* Title */}
      <h2 className="font-inter font-medium text-[18px] text-[#666666]">
        Instructors
      </h2>

      {/* List */}
      <div className="flex flex-col w-full gap-3">
        {filteredInstructors.map((inst) => {
          const isActive = selectedInstructors.includes(inst.id);

          return (
            <div
              key={inst.id}
              onClick={() => {
                if (isActive) {
                  setSelectedInstructors(
                    selectedInstructors.filter((id) => id !== inst.id),
                  );
                } else {
                  setSelectedInstructors([...selectedInstructors, inst.id]);
                }
              }}
              className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer transition
        ${isActive ? "bg-[#EEF2FF]" : "hover:bg-gray-50"}`}
            >
              <div
                className={`flex items-center gap-3 px-3 py-2 h-[46px] bg-white rounded-[12px] border
          ${isActive ? "border-[#4F46E5]" : "border-transparent"}`}
              >
                <div className="relative w-[30px] h-[30px] rounded-[4px] overflow-hidden">
                  <Image
                    src={inst.avatar}
                    alt={inst.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="font-inter font-medium text-[16px] text-[#666666]">
                  {inst.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
