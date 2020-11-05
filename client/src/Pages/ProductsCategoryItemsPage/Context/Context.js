import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
export const { Consumer } = Context;

export const Provider = ({ children, category }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [totalPosts, setTotalPosts]=useState(0);
  const [cart, setCart]=useState(1)


  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataRequest = async () => {
      await fetch(`${process.env.REACT_APP_API_ITEMS}/${category}?postsperpage=${postsPerPage}&&currentpage=${currentPage}&&searchmatch=${search}`)
        .then((data) => data.json())
        .then((res) => {
          setTotalPosts(res.totalAmount)
          setPosts(res.finalItems);
        })
        .catch(() => setError(true));
        setLoading(false);
    };
    dataRequest();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, cart]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

// useEffect(()=> {
 
//   const searchItems = (items, search) => {
//     if (search.length === 0) {
//       return items
//     }
//     const result =items.filter((item) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1);
//     setTotalPosts(result.length)
//     return result;
//   };
//   setFinalItems(searchItems(posts, search))

//   searchItems.propTypes = {
//     items: PropTypes.arrayOf(
//       PropTypes.object,
//     ).isRequired,
//     search: PropTypes.string.isRequired,
//   };

// },[posts, search])





  const ProductsCategoryItemsPageContextData = {
    posts,
    postsPerPage,
    paginate,
    category,
    currentPage,
    loading,
    search,
    setSearch,
    error,
    totalPosts,
    cart,
    setCart
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
