import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const req = async () => {
      await axios.get(process.env.REACT_APP_API_CATEGORY)
        .then(({ data }) => {
          setCategory(data);
          setSelectCategory(data[0].title);
          setLoading(false);
        });
    };
    req();
    return setLoading(false);
  }, []);

  const addProductPageContextData = {
    loading,
    title,
    setTitle,
    category,
    selectCategory,
    setSelectCategory,
    price,
    setPrice,
    description,
    setDescription,
  };

  return (
    <Context.Provider value={{ addProductPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
