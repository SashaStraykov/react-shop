import React from 'react';
import PropTypes from 'prop-types';
import { UlPagination, LiPagination, SpanPagination } from './Styled';

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
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
Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
