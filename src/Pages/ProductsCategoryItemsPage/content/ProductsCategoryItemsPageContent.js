import React, { useContext } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ProductsCategoryItem from "../../../Components/ProducsCategoryItem/ProducsCategoryItem";
import SearchPannel from "../../../Components/SearchPannel/SearchPannel";
import Pagination from "../../../Components/Pagination/Pagination";
import { BackGroundGrey, Container, H2, ContainerItem } from "./Styled";
import { ProductsCategoryItemsPageContext } from "../Context/Index";

function ProductsCategoryItemsPageContent() {
  const { url } = useRouteMatch();
  const { contextData } = useContext(ProductsCategoryItemsPageContext);
  console.log(contextData);
  const {
    currentPage,
    postsPerPage,
    currentPost,
    posts,
    paginate,
    category,
  } = contextData;
  console.log(category);
  return (
    <div>
      <BackGroundGrey>
        <Container>
          <H2>Welcome to the {category.toUpperCase()} category</H2>
          <SearchPannel />
        </Container>
        <Container>
          {currentPost.map((item) => (
            <Link key={item.id} to={`${url}/${item.id}`}>
              <ContainerItem>
                <ProductsCategoryItem {...item} />
              </ContainerItem>
            </Link>
          ))}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            category={category}
            currentPage={currentPage}
          />
        </Container>
      </BackGroundGrey>
    </div>
  );
}

export default ProductsCategoryItemsPageContent;
