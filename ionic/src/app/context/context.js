import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [reload, setReload] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState(null);

  const signOut = () => {
    if(user) {
      setUser(null)
    }
  }

  const appContextData = {
    search,
    setSearch,
    reload,
    setReload,
    searchValue,
    setSearchValue,
    user,
    setUser,
    signOut,
    };

    return (
      <Context.Provider value={{ appContextData }}>
        {children}
      </Context.Provider>
    );
};
    
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};