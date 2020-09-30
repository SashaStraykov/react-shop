import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext({});
export const { Consumer } = Context;

export const Provider = ({ children }) => {
  const contextData = {
    // Your data and functions
    name: 'Alex',
  };

  return (
    <Context.Provider value={{ contextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  username: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
