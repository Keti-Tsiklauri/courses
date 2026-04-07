// app/context/FilterContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Course, Category, Instructor, Topic } from "@/app/types/types";

interface FilterContextType {
  courses: Course[];
  filteredCourses: Course[];
  categories: Category[];
  instructors: Instructor[];
  topics: Topic[];
  selectedCategories: number[];
  selectedInstructors: number[];
  selectedTopics: number[];
  sortOption: string;
  setSelectedCategories: (ids: number[]) => void;
  setSelectedInstructors: (ids: number[]) => void;
  setSelectedTopics: (ids: number[]) => void;
  setSortOption: (option: string) => void;
  filteredInstructors: Instructor[];
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedInstructors, setSelectedInstructors] = useState<number[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [filteredInstructors, setFilteredInstructors] = useState<Instructor[]>(
    [],
  );

  // Fetch all data
  useEffect(() => {
    async function fetchData() {
      try {
        const [courseRes, catRes, instRes, topicRes] = await Promise.all([
          fetch("https://api.redclass.redberryinternship.ge/api/courses"),
          fetch("https://api.redclass.redberryinternship.ge/api/categories"),
          fetch("https://api.redclass.redberryinternship.ge/api/instructors"),
          fetch("https://api.redclass.redberryinternship.ge/api/topics"),
        ]);

        const coursesData = await courseRes.json();
        const categoriesData = await catRes.json();
        const instructorsData = await instRes.json();
        const topicsData = await topicRes.json();

        setCourses(coursesData.data);
        setFilteredCourses(coursesData.data);
        setCategories(categoriesData.data);
        setInstructors(instructorsData.data);
        setTopics(topicsData.data);
        setFilteredInstructors(instructorsData.data); // initially show all instructors
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    let temp: Instructor[] = [...instructors];

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      const courseInstructorIds = courses
        .filter((c) => selectedCategories.includes(c.category.id))
        .map((c) => c.instructor.id);

      temp = temp.filter((inst) => courseInstructorIds.includes(inst.id));
    }

    // Filter by selected topics
    if (selectedTopics.length > 0) {
      const courseInstructorIds = courses
        .filter((c) => selectedTopics.includes(c.topic.id))
        .map((c) => c.instructor.id);

      temp = temp.filter((inst) => courseInstructorIds.includes(inst.id));
    }

    // Reset to all instructors if no filters are applied
    if (selectedCategories.length === 0 && selectedTopics.length === 0) {
      temp = [...instructors];
    }

    // Compare outside before setting
    const prevIds = filteredInstructors
      .map((i) => i.id)
      .sort()
      .join(",");
    const newIds = temp
      .map((i) => i.id)
      .sort()
      .join(",");

    if (prevIds !== newIds) {
      setFilteredInstructors(temp);
    }
  }, [selectedCategories, selectedTopics, instructors, courses]);

  // Filter courses based on selected categories, topics, instructors
  useEffect(() => {
    let temp = [...courses];

    // ✅ Filters
    if (selectedCategories.length > 0)
      temp = temp.filter((c) => selectedCategories.includes(c.category.id));

    if (selectedTopics.length > 0)
      temp = temp.filter((c) => selectedTopics.includes(c.topic.id));

    if (selectedInstructors.length > 0)
      temp = temp.filter((c) => selectedInstructors.includes(c.instructor.id));

    // ✅ Sorting
    if (sortOption === "priceLow") {
      temp.sort((a, b) => a.basePrice - b.basePrice);
    }

    if (sortOption === "priceHigh") {
      temp.sort((a, b) => b.basePrice - a.basePrice);
    }

    if (sortOption === "title") {
      temp.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortOption === "newest") {
      // keep original API order
      temp = [...temp];
    }

    if (sortOption === "popular") {
      // no data → fallback (same as newest)
      temp = [...temp];
    }

    setFilteredCourses(temp);
  }, [
    selectedCategories,
    selectedTopics,
    selectedInstructors,
    sortOption, // ✅ now actually used
    courses,
  ]);

  return (
    <FilterContext.Provider
      value={{
        courses,
        filteredCourses,
        categories,
        instructors,
        topics,
        selectedCategories,
        selectedInstructors,
        selectedTopics,
        sortOption,
        setSelectedCategories,
        setSelectedInstructors,
        setSelectedTopics,
        setSortOption,
        filteredInstructors,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used inside FilterProvider");
  return context;
};
