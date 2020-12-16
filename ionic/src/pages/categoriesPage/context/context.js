import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      await axios.get(process.env.REACT_APP_API_CATEGORY)
        .then(({ data }) => {
          setCategories(data);
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
    return () => {
      setLoading(false);
    };
  }, []);

  const categoriesPageContextData = {
    loading,
    categories,
    error,
  };
  return (
    <Context.Provider value={{ categoriesPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
