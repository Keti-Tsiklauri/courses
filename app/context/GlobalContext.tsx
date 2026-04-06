"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Types
export type Instructor = { id: number; name: string; avatar: string };
export type Category = { id: number; name: string };
export type Topic = { id: number; name: string };
export type DataItem = {
  id: number;
  title: string;
  category_id: number;
  topic_id: number;
  instructor_id: number;
  date: string;
  price: number;
};

type GlobalContextType = {
  data: DataItem[];
  categories: Category[];
  topics: Topic[];
  instructors: Instructor[];
  filters: {
    categoryIds: number[];
    topicIds: number[];
    instructorIds: number[];
    sortBy: "newest" | "oldest" | "priceLow" | "priceHigh" | "popular" | "aToZ";
  };
  setFilters: React.Dispatch<
    React.SetStateAction<GlobalContextType["filters"]>
  >;
  setData: React.Dispatch<React.SetStateAction<DataItem[]>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [filters, setFilters] = useState<GlobalContextType["filters"]>({
    categoryIds: [],
    topicIds: [],
    instructorIds: [],
    sortBy: "newest",
  });

  // Fetch all data on mount
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [dataRes, catRes, topicRes, instRes] = await Promise.all([
          fetch("https://api.redclass.redberryinternship.ge/api/courses"),
          fetch("https://api.redclass.redberryinternship.ge/api/categories"),
          fetch("https://api.redclass.redberryinternship.ge/api/topics"),
          fetch("https://api.redclass.redberryinternship.ge/api/instructors"),
        ]);

        const dataJson = await dataRes.json();
        const catJson = await catRes.json();
        const topicJson = await topicRes.json();
        const instJson = await instRes.json();

        setData(dataJson.data || dataJson);
        setCategories(catJson.data || catJson);
        setTopics(topicJson.data || topicJson);
        setInstructors(instJson.data || instJson);
      } catch (err) {
        console.error("Error fetching global data:", err);
      }
    };

    fetchAll();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data,
        categories,
        topics,
        instructors,
        filters,
        setFilters,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Hook to use context
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }
  return context;
}
