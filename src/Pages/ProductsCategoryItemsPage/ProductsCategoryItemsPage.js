import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsCategoryItem from "../../Components/ProducsCategoryItem/ProducsCategoryItem";
import H2Component from "../../Components/H2Component/H2Component";
import Container from "../../Components/Container/Container";
import BackGroundVideoComponent from "../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import SearchPannel from "../../Components/SearchPannel/SearchPannel";
import sky from "../../Components/BackGroundVideoComponent/sky.mp4";
import "./ProductsCategoryItemsPage.css";
import Pagination from "../../Components/Pagination/Pagination";

import { data } from "../../Data/Data";

function ProductsCategoryItemsPage({ category }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  useEffect(() => {
    const { items } = data;
    setPosts(items);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts
    .filter((post) => post.idCategory === category)
    .slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(currentPost);
  return (
    <BackGroundVideoComponent video={sky}>
      <Container white>
        <H2Component>
          Welcome to the {category.toUpperCase()} category
        </H2Component>
        <SearchPannel />
        {currentPost.map((item) => (
          <Link
            className="link"
            key={item.id}
            to={`/Products-Category-Page/${category}/${item.id}`}
          >
            <ProductsCategoryItem {...item} />
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
    </BackGroundVideoComponent>
  );
}

export default ProductsCategoryItemsPage;
