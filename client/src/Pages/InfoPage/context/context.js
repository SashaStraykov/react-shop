import React, {
    createContext, useEffect, useState, useContext,
  } from 'react';
  import PropTypes from 'prop-types';

  export const Context = createContext();

  export const Provider = ({ children }) => {

    const infoContextData = {

    }
    return (
        <Context.Provider value={{ infoContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };