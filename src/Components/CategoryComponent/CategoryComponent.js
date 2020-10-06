import React from "react";
import { Box, Img, H2 } from "./Styled";

function CategoryComponent({ img, title }) {
  return (
    <Box>
      <Img src={img} alt={img} />
      <H2 className="categoryComponentTitle">{title.toUpperCase()}</H2>
    </Box>
  );
}

export default CategoryComponent;
