import React, { createContext, useState, useEffect } from "react";
import { data } from "../../../Data/Data";

export const Context = createContext();
export const { Consumer } = Context;

export const Provider = ({ children, category }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts
    .filter((post) => post.idCategory === category)
    .slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const { items } = data;
    setPosts(items);
  }, []);

  const contextData = {
    posts: posts,
    postsPerPage: postsPerPage,
    paginate: paginate,
    category: category,
    currentPage: currentPage,
    currentPost: currentPost,
  };

  console.log(contextData.category);
  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
