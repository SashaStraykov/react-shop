import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();
export const { Consumer } = Context;

export const Provider = ({ children, category }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const items = [];
    const dataRequest = async () => {
      await fetch("http://localhost:3000/items")
        .then((data) => data.json())
        .then((response) => {
          for (let key of response) {
            if (key.approved === true) {
              items.push(key);
            }
          }
          setPosts(items);
        });
    };
    dataRequest();
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts
    .filter((post) => post.idCategory === category)
    .slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const searchItems = (items, search) => {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const finalItems = searchItems(currentPost, search);

  const ProductsCategoryItemsPageContextData = {
    posts: posts,
    postsPerPage: postsPerPage,
    paginate: paginate,
    category: category,
    currentPage: currentPage,
    currentPost: currentPost,
    loading: loading,
    search: search,
    setSearch: setSearch,
    finalItems: finalItems,
  };

  return (
    <Context.Provider value={{ ProductsCategoryItemsPageContextData }}>
      {children}
    </Context.Provider>
  );
};
