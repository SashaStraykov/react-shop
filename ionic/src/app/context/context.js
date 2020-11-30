import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState(1);
  const [checkoutUser, setCheckoutUser] = useState([]);

  const signOut = () => {
    if (user) {
      setUser(null);
    }
  };

  const appContextData = {
    search,
    setSearch,
    reload,
    setReload,
    user,
    setUser,
    signOut,
    showToast,
    setShowToast,
    errorMessage,
    setErrorMessage,
    cart,
    setCart,
    checkoutUser,
    setCheckoutUser,
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
