import React from "react";
import CategoryComponent from "../../../Components/CategoryComponent/CategoryComponent";
import { Link, useRouteMatch } from "react-router-dom";

import { data } from "../../../Data/Data";
import { DivGrid, BackGroundGrey, Container, H2 } from "./Styled";

function ProductsCategoryPageContent() {
  const { url } = useRouteMatch();
  const { category } = data;
  console.log(url);
  return (
    <>
      <BackGroundGrey>
        <Container>
          <H2>Choice Product Category</H2>
        </Container>
        <Container>
          <DivGrid>
            {category.map(({ idCategory, title }) => (
              <Link className="link" key={idCategory} to={`${url}/${title}`}>
                <CategoryComponent title={title} />
              </Link>
            ))}
          </DivGrid>
        </Container>
      </BackGroundGrey>
    </>
  );
}

export default ProductsCategoryPageContent;
