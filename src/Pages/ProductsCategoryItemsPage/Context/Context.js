import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
export const { Consumer } = Context;

export const Provider = ({ children, category }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const items = [];
    const dataRequest = async () => {
      await fetch('http://localhost:3000/items')
        .then((data) => data.json())
        .then((response) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const key of response) {
            if (key.approved === true) {
              items.push(key);
            }
          }
          setPosts(items);
        })
        .catch(() => setError(true));
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

  // eslint-disable-next-line no-shadow
  const searchItems = (items, search) => {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
  };

  searchItems.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    search: PropTypes.string.isRequired,
  };

  const finalItems = searchItems(currentPost, search);

  const ProductsCategoryItemsPageContextData = {
    posts,
    postsPerPage,
    paginate,
    category,
    currentPage,
    currentPost,
    loading,
    search,
    setSearch,
    finalItems,
    error,
  };

  return (
    <Context.Provider value={{ ProductsCategoryItemsPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,

};
