import React from 'react';
import PropsTypes from 'prop-types';
import {
  ItemBox, Img, H2, Boxdate, BoxPrice,
} from './Styled';

function ProducsCategoryItem({
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

ProducsCategoryItem.propTypes = {
  title: PropsTypes.string.isRequired,
  price: PropsTypes.string.isRequired,
  date: PropsTypes.string.isRequired,
  img: PropsTypes.arrayOf(
    PropsTypes.string,
  ).isRequired,

};

export default ProducsCategoryItem;
