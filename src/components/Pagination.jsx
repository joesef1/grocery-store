import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center my-10">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`w-8 bg-[#212121]  h-8 font-semibold text-sm mx-2 rounded-md transition-colors duration-300 ${
              page === currentPage
                ? "bg-[#212121] text-white"
                : "bg-transparent text-black border-2 border-white hover:bg-[#212121] hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
