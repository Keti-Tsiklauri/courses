"use client";

import { Topic } from "@/app/types/types";
import { useFilter } from "@/app/context/FilterContext";

export default function Topics() {
  const {
    topics,
    selectedCategories,
    selectedTopics,
    setSelectedTopics,
    courses,
  } = useFilter();

  const displayTopics =
    selectedCategories.length > 0
      ? Array.from(
          new Map(
            courses
              .filter((c) => selectedCategories.includes(c.category.id))
              .map((c) => [c.topic.id, c.topic]),
          ).values(),
        )
      : topics;

  const toggleTopic = (id: number) => {
    if (selectedTopics.includes(id)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== id));
    } else {
      setSelectedTopics([...selectedTopics, id]);
    }
  };

  if (!topics.length) return <p>Loading topics...</p>;

  return (
    <div className="flex flex-col items-start gap-6 w-[309px] bg-[#F5F5F5]">
      <h2 className="font-inter font-medium text-[18px] text-[#666666]">
        Topics
      </h2>

      <div className="flex flex-wrap gap-2 w-full">
        {displayTopics.map((topic) => {
          const isActive = selectedTopics.includes(topic.id);

          return (
            <div
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              className={`group flex items-center justify-center px-3 py-2 border rounded-[12px] cursor-pointer transition
                ${
                  isActive
                    ? "bg-[#EEEDFC] border-[#281ED2]"
                    : "bg-white border-gray-200 hover:bg-[#DDDBFA]"
                }`}
            >
              <span
                className={`font-inter font-medium text-[16px] transition
                  ${
                    isActive
                      ? "text-[#281ED2]"
                      : "text-[#666666] group-hover:text-[#281ED2]"
                  }`}
              >
                {topic.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
