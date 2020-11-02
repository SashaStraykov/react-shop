import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const req = async () => {
      await fetch(`${process.env.REACT_APP_API_CATEGORY}`)
        .then((data) => data.json())
        .then((res) => {
          setCategory(res);
        })
        .catch(() => setError(true));
      setLoading(false);
    };
    req();
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
