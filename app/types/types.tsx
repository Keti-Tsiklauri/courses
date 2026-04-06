export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: number;
  durationWeeks: number;
  isFeatured: boolean;
  avgRating: number | null;
  reviewCount: number;
  createdAt?: string;

  category: {
    id: number;
    name: string;
  };

  topic: {
    id: number;
    name: string;
  };

  instructor: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface CoursesResponse {
  data: Course[];
  meta: {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
  };
}
export interface Category {
  id: number;
  name: string;
}
const getImageName = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
export interface Topic {
  id: number;
  name: string;
}
export interface Instructor {
  id: number;
  name: string;
  avatar: string;
}
