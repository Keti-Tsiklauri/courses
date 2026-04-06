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
      // remove if already selected
      setSelectedCategories(selectedCategories.filter((catId) => catId !== id));
    } else {
      // add to selected
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
          return (
            <div
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`flex items-center gap-2.5 px-3 py-2 border rounded-[12px] cursor-pointer transition
                ${isActive ? "bg-[#EEF2FF] border-[#4F46E5]" : "bg-white border-gray-200 hover:bg-gray-50"}`}
            >
              <Image
                src={`/categories-images/${getImageName(cat.name)}.svg`}
                alt={cat.name}
                width={24}
                height={24}
              />
              <span className="font-inter font-medium text-[16px] text-[#666666]">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
