import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const req = async () => {
      await fetch('http://localhost:3000/category')
        .then((data) => data.json())
        .then((res) => {
          setCategory(res);
        })
        .catch(() => setError(true));
    };
    req();
    setLoading(false);
  }, []);
  const productsCategoryPageContextData = {
    category,
    loading,
    error,
  };
  return (
    <Context.Provider value={{ productsCategoryPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
