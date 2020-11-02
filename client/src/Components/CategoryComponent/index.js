import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Title,
  ImgWrapper,
} from './styled';

const CategoryComponent = ({ img, title, url }) => (
  <Box to={url}>
    <ImgWrapper img={img} />
    <Title className="categoryComponentTitle">
      {title.toUpperCase()}
    </Title>
  </Box>
);

CategoryComponent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CategoryComponent;
