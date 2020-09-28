import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsCategoryItem from "../../Components/ProducsCategoryItem/ProducsCategoryItem";
import H2Component from "../../Components/H2Component/H2Component";
import Container from "../../Components/Container/Container";
import BackGroundVideoComponent from "../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import SearchPannel from "../../Components/SearchPannel/SearchPannel";
import sky from "../../Components/BackGroundVideoComponent/sky.mp4";
import "./ProductsCategoryItemsPage.css";

import { data } from "../../Data/Data";

function ProductsCategoryItemsPage({ category }) {
  const { items } = data;
  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);
  // setPosts(items);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPost);

  return (
    <BackGroundVideoComponent video={sky}>
      <Container white>
        <H2Component>
          Welcome to the {category.toUpperCase()} category
        </H2Component>
        <SearchPannel />
        {items.map((item) =>
          item.idCategory === category ? (
            <Link
              className="link"
              key={item.id}
              to={`/Products-Category-Page/${category}/${item.id}`}
            >
              <ProductsCategoryItem {...item} />
            </Link>
          ) : null
        )}
      </Container>
    </BackGroundVideoComponent>
  );
}

export default ProductsCategoryItemsPage;
