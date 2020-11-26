import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const homePageContextData = {

  };
  return (
    <Context.Provider value={{ homePageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
