import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemBox, Img, H2, Boxdate, BoxPrice,
} from './Styled';
import emptyPhoto from '../../assets/images/emptyPhoto.jpg';

function ProductsCategoryItem({
  title, price, date, img,
}) {
  return (
    <ItemBox>
      <Img src={img.length > 0 ? img[0] : emptyPhoto} alt={img.length > 0 ? img[0] : emptyPhoto} />
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
