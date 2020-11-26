import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({ children, category, itemId }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      await axios.get(`${process.env.REACT_APP_API_ITEMS}/${category}/${itemId}`)
        .then(({ data }) => {
          setItem(data);
          setLoading(false);
        });
    };
    req();
    return setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const itemPageContextData = {
    category,
    loading,
    item,
  };
  return (
    <Context.Provider value={{ itemPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
