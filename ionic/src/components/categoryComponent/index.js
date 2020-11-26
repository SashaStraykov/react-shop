import React from 'react';
// import { Link } from 'react-router-dom';
import './CategoryComponent.css';
import PropTypes from 'prop-types';

const CategoryCompomnent = ({
  img, title, url,
}) => (
  <a to={url} className="divFlex">
    <img src={img} alt={img} className="img" />
    <span className="spanTitle">{title.toUpperCase()}</span>
  </a>

);

CategoryCompomnent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CategoryCompomnent;
