import React from "react";
import "./Pagination.css";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  category,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="ulPagination">
      {pageNumbers.map((number) => (
        <li
          className={
            number === currentPage ? "liPagination active" : "liPagination"
          }
          key={number}
        >
          <span
            className=".aPagination"
            onClick={() => paginate(number)}
            href={category}
          >
            {number}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
