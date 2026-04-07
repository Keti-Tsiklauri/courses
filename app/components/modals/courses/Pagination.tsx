"use client";
import { useFilter } from "@/app/context/FilterContext";
import { useEffect } from "react";
import Image from "next/image";

export default function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useFilter();

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (totalPages <= 1) return null; // hide pagination if only 1 page

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex items-center gap-2 mt-8 justify-center">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={!hasPrev}
        className={`w-[40px] h-[40px] border rounded-[4px] flex items-center justify-center transition
          ${
            !hasPrev
              ? "bg-gray-200 border-gray-300 cursor-not-allowed"
              : "bg-white border border-[#D1D1D1] hover:bg-[#DDDBFA]"
          } ${hasPrev ? "cursor-pointer" : ""}`}
      >
        <Image
          src={
            hasPrev
              ? "/images/arrow-pagination-left-purple.svg"
              : "/images/arrow-pagination-left.svg"
          }
          alt="Previous"
          width={15}
          height={23}
        />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-[40px] h-[40px] rounded-[4px] flex items-center justify-center text-[16px] font-medium transition cursor-pointer
              ${
                isActive
                  ? "bg-[#281ED2] text-white border border-[#4F46E5]"
                  : "bg-white text-[#4F46E5] border border-[#D1D1D1] hover:bg-[#DDDBFA]"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={!hasNext}
        className={`w-[40px] h-[40px] border rounded-[4px] flex items-center justify-center transition 
          ${
            !hasNext
              ? "bg-gray-200 border-gray-300 cursor-not-allowed"
              : "bg-white border border-[#D1D1D1] hover:bg-[#DDDBFA]"
          }  ${hasNext ? "cursor-pointer" : ""}`}
      >
        <Image
          src={
            hasNext
              ? "/images/arrow-pagination-right-purple.svg"
              : "/images/arrow-pagination-right.svg"
          }
          alt="Next"
          width={15}
          height={23}
        />
      </button>
    </div>
  );
}
