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
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  totalCourses: number;
  itemsPerPage: number;
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCourses, setTotalCourses] = useState<number>(0);

  const itemsPerPage = 10; // match API perPage

  // Fetch categories, instructors, topics once
  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, instRes, topicRes] = await Promise.all([
          fetch("https://api.redclass.redberryinternship.ge/api/categories"),
          fetch("https://api.redclass.redberryinternship.ge/api/instructors"),
          fetch("https://api.redclass.redberryinternship.ge/api/topics"),
        ]);
        const categoriesData = await catRes.json();
        const instructorsData = await instRes.json();
        const topicsData = await topicRes.json();

        setCategories(categoriesData.data);
        setInstructors(instructorsData.data);
        setTopics(topicsData.data);
        setFilteredInstructors(instructorsData.data); // initially show all
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  // Fetch courses whenever filters, sort, or page change
  useEffect(() => {
    async function fetchCourses() {
      try {
        // Build query parameters
        const params = new URLSearchParams();
        params.append("sort", sortOption);
        params.append("page", currentPage.toString());
        if (selectedCategories.length > 0)
          params.append("categories", selectedCategories.join(","));
        if (selectedTopics.length > 0)
          params.append("topics", selectedTopics.join(","));
        if (selectedInstructors.length > 0)
          params.append("instructors", selectedInstructors.join(","));

        const res = await fetch(
          `https://api.redclass.redberryinternship.ge/api/courses?${params.toString()}`,
        );
        const data = await res.json();

        setCourses(data.data ?? []);
        setFilteredCourses(data.data ?? []);

        // Safe access with fallback
        setTotalPages(data.meta?.lastPage ?? 1);
        setTotalCourses(data.meta?.total ?? data.data?.length ?? 0);
      } catch (err) {
        console.error(err);
        // fallback in case of fetch error
        setCourses([]);
        setFilteredCourses([]);
        setTotalPages(1);
        setTotalCourses(0);
      }
    }

    fetchCourses();
  }, [
    selectedCategories,
    selectedTopics,
    selectedInstructors,
    sortOption,
    currentPage,
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
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,
        totalCourses,
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
