"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useFilter } from "@/app/context/FilterContext";

interface Category {
  id: number;
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { selectedCategories, setSelectedCategories } = useFilter();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://api.redclass.redberryinternship.ge/api/categories",
      );
      const data = await res.json();
      setCategories(data.data || data);
    };
    fetchCategories();
  }, []);

  const getImageName = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

  const toggleCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((catId) => catId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      <h2 className="font-inter font-medium text-[18px] text-[#666666]">
        Categories
      </h2>

      <div className="flex flex-wrap gap-2 w-full">
        {categories.map((cat) => {
          const isActive = selectedCategories.includes(cat.id);
          const baseName = getImageName(cat.name);

          return (
            <div
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`
                group flex items-center justify-center gap-[10px]
                px-[12px] py-[8px] rounded-[12px] cursor-pointer transition-all
                
                ${
                  isActive
                    ? "bg-[#EEEDFC] border border-[#281ED2]"
                    : "bg-white border border-gray-200 hover:bg-[#DDDBFA]"
                }
              `}
            >
              {/* ICON */}
              <div className="relative w-[24px] h-[24px]">
                {/* Default icon */}
                <Image
                  src={`/categories-images/${baseName}.svg`}
                  alt={cat.name}
                  fill
                  className={`
      object-contain transition
      ${isActive ? "hidden" : "block group-hover:hidden"}
    `}
                />

                {/* Purple icon (hover + active) */}
                <Image
                  src={`/categories-images/${baseName}-purple.svg`}
                  alt={cat.name}
                  fill
                  className={`
      object-contain transition
      ${isActive ? "block" : "hidden group-hover:block"}
    `}
                />
              </div>

              {/* TEXT */}
              <span
                className={`
                  font-inter font-medium text-[16px] leading-[24px] text-center transition
                  ${
                    isActive
                      ? "text-[#281ED2]"
                      : "text-[#666666] group-hover:text-[#281ED2]"
                  }
                `}
              >
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
