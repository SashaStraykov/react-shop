import React, { createContext, useEffect, useState , useContext } from 'react';
import { AppContext } from '../../../app/context';
import PropTypes from 'prop-types';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({ children, category }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState(1);
  const [disableInfiniteScroll, setDisableInfiniteScroll] = useState(false);
  const [postsPerPage] = useState(5);

  const { appContextData } = useContext(AppContext);
  const { search, reload, searchValue, setSearchValue } = appContextData;
  const [a, setA] = useState(1);


  useEffect(()=> {
    setLoading(true)
    setSearchValue(search);
    if(search) {
      if(a===0) {
        setCounter(1);
        setA(1);
      } 
    } else if(a===1){
      setCounter(1);
      setA(0);
    }
    const req = async () => {
    await axios.get(`${process.env.REACT_APP_API_ITEMS}/${category}?postsperpage=${postsPerPage}&&currentpage=${search && search!==searchValue ? 1 : counter}&&searchmatch=${search}`)
      .then(({data})=> {
      setProducts([...products, ...data.finalItems])
      setLoading(false);
      })
    }
    req();
    return setLoading(false);
  }, [counter, reload])

  const nextItems = (e) => {
      setCounter(counter+1);
      e.target.complete();
  }

  useEffect(()=> {
    setProducts([]);
    setCounter(1)
  }, [search])

  const productsPageContextData = {
    category,
    loading,
    products,
    nextItems,
    disableInfiniteScroll,
  };
  return (
    <Context.Provider value={{ productsPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
