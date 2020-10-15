import React from 'react';

import { UlPagination, LiPagination, SpanPagination } from './Styled';

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
    <UlPagination>
      {pageNumbers.map((number) => (
        <LiPagination
          onClick={() => paginate(number)}
          active={number === currentPage}
          key={number}
        >
          <SpanPagination>{number}</SpanPagination>
        </LiPagination>
      ))}
    </UlPagination>
  );
};

export default Pagination;
