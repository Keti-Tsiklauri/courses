"use client";

import { useState } from "react";
import Image from "next/image";

const options = [
  "Newest First",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular",
  "Title: A-Z",
];

export default function SortDropdownUI() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="relative w-[234px]">
      {/* Trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between px-5 py-[7px] h-[49px] bg-white border border-gray-100 rounded-[10px] cursor-pointer"
      >
        <div className="flex items-center gap-2 w-[calc(100%-30px)]">
          <span className="text-[16px] text-gray-500 font-medium shrink-0">
            Sort By:
          </span>
          <span className="text-[16px] font-medium text-[#4F46E5] truncate overflow-hidden text-ellipsis">
            {selected}
          </span>
        </div>

        <Image
          src="/images/arrow-down.svg"
          alt="arrow"
          width={20}
          height={20}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[55px] left-0 w-full bg-white border border-gray-100 rounded-[10px] z-10">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`px-5 py-2 cursor-pointer rounded-[10px] transition
                ${selected === opt ? "bg-[#DDDBFA] text-[#4F46E5]" : "text-gray-500 hover:bg-gray-50"}
              `}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
