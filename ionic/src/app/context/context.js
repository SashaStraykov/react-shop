import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { SQLite } from '@ionic-native/sqlite/';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export const Context = createContext();

export const Provider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState(1);
  const [checkoutUser, setCheckoutUser] = useState([]);
  const [added, setAdded] = useState(false);
  const [bucketItems, setBucketItems] = useState(0);
  const [amountItemsinBucket, setAmountItemsinBucket] = useState(0);

  const signOut = () => {
    if (user) {
      setUser(null);
    }
  };

  useEffect(() => {
    if (user) {
      const req = async () => {
        const checkBucketItems = await Storage.get({ key: user.id });
        if (checkBucketItems.value !== null) {
          setBucketItems([...checkBucketItems.value.split(',')]);
        }
      };
      req();
    }
  }, [user, cart]);

  useEffect(() => {
    if (bucketItems[0] === '' && bucketItems.length === 1) {
      setAmountItemsinBucket(0);
    } else {
      setAmountItemsinBucket(bucketItems.length);
    }
  }, [bucketItems]);

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
    added,
    setAdded,
    bucketItems,
    setBucketItems,
    amountItemsinBucket,
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
