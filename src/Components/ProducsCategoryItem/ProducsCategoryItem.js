import React from "react";
import logo from "../../images/dataArtLogo.png";
import { ItemBox, Img, H2, Boxdate, BoxPrice } from "./Styled";

function ProducsCategoryItem({ title, description, price, date, img }) {
  return (
    <ItemBox>
      <Img src={img[0]} alt={logo} />
      <H2>{title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}</H2>
      <Boxdate>{date}</Boxdate>
      <BoxPrice>{price} typs</BoxPrice>
    </ItemBox>
  );
}

export default ProducsCategoryItem;
