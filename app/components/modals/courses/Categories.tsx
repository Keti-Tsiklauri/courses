"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

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

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      {/* Title */}
      <h2 className="font-inter font-medium text-[18px] text-[#666666]">
        Categories
      </h2>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 w-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center gap-2.5 px-3 py-2 bg-white border border-gray-200 rounded-[12px] hover:bg-gray-50 cursor-pointer transition"
          >
            {/* Icon */}
            <Image
              src={`/categories-images/${getImageName(cat.name)}.svg`}
              alt={cat.name}
              width={24}
              height={24}
            />

            {/* Text */}
            <span className="font-inter font-medium text-[16px] text-[#666666]">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
