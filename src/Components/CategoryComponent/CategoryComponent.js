import React from "react";
import { Box, Img, H2 } from "./Styled";
import l1 from "../../images/1.jpeg";

function CategoryComponent({ title }) {
  return (
    <Box>
      <Img src={l1} alt={l1} />
      <H2 className="categoryComponentTitle">{title.toUpperCase()}</H2>
    </Box>
  );
}

export default CategoryComponent;
