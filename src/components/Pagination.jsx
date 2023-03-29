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
    <div className="flex flex-wrap justify-center mt-4">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 font-semibold text-lg mx-2 rounded-md transition-colors duration-300 ${
              page === currentPage
                ? "bg-yellow-400 text-black"
                : "bg-transparent text-white border-2 border-white hover:bg-yellow-400"
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
