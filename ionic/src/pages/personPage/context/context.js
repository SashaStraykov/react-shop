import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {

  const personPageContextData = {

  };
  return (
    <Context.Provider value={{ personPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
