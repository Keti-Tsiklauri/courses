import Filters from "../components/filters/Filters";

import Courses from "../components/modals/courses/Courses";
import CoursesHeader from "../components/modals/courses/CoursesHeader";
import SortDropdownUI from "../components/modals/courses/SortDropDown";
import { FilterProvider } from "../context/FilterContext";

export default function Browse({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FilterProvider>
          <div className="flex flex-row  gap-20 justify-center bg-[#F5F5F5]">
            <Filters />
            <div>
              <CoursesHeader />
              <Courses />
            </div>
          </div>
        </FilterProvider>
      </body>
    </html>
  );
}
