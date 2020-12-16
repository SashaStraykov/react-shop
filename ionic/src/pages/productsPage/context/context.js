import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children, category }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);
  const [postsPerPage] = useState(5);
  const [error, setError] = useState(false);

  const { appContextData } = useContext(AppContext);
  const {
    search, reload,
  } = appContextData;

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      await axios.get(`${process.env.REACT_APP_API_ITEMS}/${category}?postsperpage=${postsPerPage}&&currentpage=${counter}&&searchmatch=${search}`)
        .then(({ data }) => {
          setProducts([...products, ...data.finalItems]);
          setLoading(false);
        })
        .catch((err) => {
          if (err && !err.response) {
            setLoading(false);
            return setError(true);
          }
        });
    };
    req();
    return setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, reload]);

  const nextItems = (e) => {
    setCounter(counter + 1);
    e.target.complete();
  };

  useEffect(() => {
    setProducts([]);
    setCounter(1);
  }, [search]);

  const productsPageContextData = {
    category,
    loading,
    products,
    nextItems,
    disableInfiniteScroll,
    error,
  };
  return (
    <Context.Provider value={{ productsPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,

};
