import React, {
  createContext, 
} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {

  const contextdataPersonPage = {

  };

  return (
    <Context.Provider value={{ contextdataPersonPage }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
