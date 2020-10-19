import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemBox, Img, H2, Boxdate, BoxPrice,
} from './Styled';

function ProductsCategoryItem({
  title, price, date, img,
}) {
  return (
    <ItemBox>
      <Img src={img[0]} alt={img[0]} />
      <H2>{title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}</H2>
      <Boxdate>{date}</Boxdate>
      <BoxPrice>
        {price}
        typs
      </BoxPrice>
    </ItemBox>
  );
}

ProductsCategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,

};

export default ProductsCategoryItem;
