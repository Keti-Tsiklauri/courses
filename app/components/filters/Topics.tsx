"use client";

import { useEffect, useState } from "react";

import { Topic } from "@/app/types/types";
export default function Topics() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch(
          "https://api.redclass.redberryinternship.ge/api/topics",
        );
        const data = await res.json();
        setTopics(data.data || data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) return <p>Loading topics...</p>;

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      {/* Title */}
      <h2 className="font-inter font-medium text-[18px] leading-[22px] text-[#666666]">
        Topics
      </h2>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 w-full">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => setActiveId(topic.id)}
            className={`flex items-center justify-center px-3 py-2 rounded-[12px] cursor-pointer transition
              ${
                activeId === topic.id
                  ? "bg-[#4F46E5] text-white"
                  : "bg-white border border-gray-200 text-[#666666]"
              }`}
          >
            <span className="font-inter font-medium text-[16px] leading-[24px]">
              {topic.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
