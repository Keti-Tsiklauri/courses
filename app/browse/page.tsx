import Filters from "../components/filters/Filters";

import Courses from "../components/modals/courses/Courses";
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
              <div className="flex flex-row justify-between items-center">
                <p className=" w-[159px] h-[24px]  font-inter font-medium text-[16px] leading-[24px] text-[#666666]">
                  Showing 9 out of 90
                </p>
                <SortDropdownUI />
              </div>
              <Courses />
            </div>
          </div>
        </FilterProvider>
      </body>
    </html>
  );
}
