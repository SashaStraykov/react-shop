import React from "react";
import Container from "../../Components/Container/Container";
import BackGroundVideoComponent from "../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import river from "../../Components/BackGroundVideoComponent/river.mp4";
import CategoryComponent from "../../Components/CategoryComponent/CategoryComponent";
import { Link } from "react-router-dom";
import H2Component from "../../Components/H2Component/H2Component";
import "./ProductsCategoryPage.css";
import { data } from "../../Data/Data";

function ProductsCategoryPage() {
  const { category } = data;
  return (
    <BackGroundVideoComponent video={river}>
      <Container white={true}>
        <H2Component>
        Choice Product Category
        </H2Component>
        <div className="wrapFlex">
          {category.map(({ idCategory, title }) => (
            <Link
              className="link"
              key={idCategory}
              to={`/Products-Category-Page/${title}`}
            >
              <CategoryComponent title={title} />
            </Link>
          ))}
        </div>
      </Container>
    </BackGroundVideoComponent>
  );
}

export default ProductsCategoryPage;
