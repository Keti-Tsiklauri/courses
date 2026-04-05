export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  basePrice: string;
  durationWeeks: number;
  isFeatured: boolean;
  avgRating: number | null;
  reviewCount: number;

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
