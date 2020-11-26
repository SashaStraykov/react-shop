import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const checkOutPageContextData = {

  };
  return (
    <Context.Provider value={{ checkOutPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
