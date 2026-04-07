import Filters from "../components/filters/Filters";

import Courses from "../components/modals/courses/Courses";
import CoursesHeader from "../components/modals/courses/CoursesHeader";
import Pagination from "../components/modals/courses/Pagination";
import SortDropdownUI from "../components/modals/courses/SortDropDown";
import { FilterProvider } from "../context/FilterContext";

export default function Browse({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FilterProvider>
          <div className="flex flex-row  gap-20 justify-center bg-[#F5F5F5]">
            <Filters />
            <div className="min-h-[1200px] px-4">
              {/* Header */}
              <CoursesHeader />

              {/* Courses grid */}
              <Courses />

              {/* Pagination + Showing X-Y out of Z */}
              <div className="flex flex-col items-center mt-8 gap-2">
                <Pagination />
                {/* Showing X-Y out of Z */}
              </div>
            </div>
          </div>
        </FilterProvider>
      </body>
    </html>
  );
}
