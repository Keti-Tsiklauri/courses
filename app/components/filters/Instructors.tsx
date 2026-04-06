"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instructor } from "@/app/types/types";
export default function Instructors() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await fetch(
          "https://api.redclass.redberryinternship.ge/api/instructors",
        );
        const data = await res.json();
        setInstructors(data.data || data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  if (loading) return <p>Loading instructors...</p>;

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      {/* Title */}
      <h2 className="font-inter font-medium text-[18px] text-[#666666]">
        Instructors
      </h2>

      {/* List */}
      <div className="flex flex-col  w-full">
        {instructors.map((inst) => (
          <div
            key={inst.id}
            onClick={() => setActiveId(inst.id)}
            className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer transition
              ${activeId === inst.id ? "bg-[#EEF2FF]" : "hover:bg-gray-50"}`}
          >
            {/* Avatar */}
            <div className="flex items-center gap-3 px-3 py-2  h-[46px] bg-white rounded-[12px]">
              {/* Avatar */}
              <div className="relative w-[30px] h-[30px] rounded-[4px] overflow-hidden">
                <Image
                  src={inst.avatar}
                  alt={inst.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <span className=" h-[24px] font-inter font-medium text-[16px] leading-[24px] text-[#666666]">
                {inst.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
