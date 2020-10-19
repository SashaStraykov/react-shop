import React from 'react';
import PropTypes from 'prop-types';
import { Box, Img, H2 } from './styled';

function CategoryComponent({ img, title }) {
  return (
    <Box>
      <Img src={img} alt={img} />
      <H2 className="categoryComponentTitle">{title.toUpperCase()}</H2>
    </Box>
  );
}

CategoryComponent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};

export default CategoryComponent;
