import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { Plugins } from '@capacitor/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

const { Storage } = Plugins;

export const Context = createContext();

export const Provider = ({ children }) => {
  const { appContextData } = useContext(AppContext);
  const {
    user, cart, setCart, checkoutUser, setCheckoutUser,
    setErrorMessage, errorMessage, setShowToast, showToast,
  } = appContextData;
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [idDeleteAnnouncement, setIdDeleteAnnouncement] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const getBucketItems = async () => {
      const bucketItem = await Storage.get({ key: user.id });
      const bucketItems = bucketItem.value;
      if (bucketItems !== null) {
        const req = async () => {
          axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
          await axios.post(`${process.env.REACT_APP_API_ITEMS_BUCKET}`, { bucketItems })
            .then(({ data }) => {
              const a = bucketItems.split(',');
              if (a.length !== data.length) {
                const result = [];
                a.forEach((el) => {
                  data.forEach(({ id }) => {
                    if (el === id) {
                      result.push(el);
                    }
                  });
                });
                Storage.set({ key: user.id, value: result });
                setCart(cart + 1);
              }
              setItems(data);
            })
            .catch(() => setError(true));
        };
        req();
      }
    };
    getBucketItems();
    setLoading(false);
    return setLoading(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // const storage = [];
    let storage;
    const checkout = [];
    const check = async () => {
      const getStorageItems = await Storage.get({ key: user.id });
      if (getStorageItems.value !== null) {
        storage = getStorageItems.value.split(',');
      }
      items.forEach((el) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const key of storage) {
          if (key === el.id) {
            checkout.push(el);
          }
        }
      });
      setCheckoutUser(checkout);
    };
    check();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    if (checkoutUser.length >= 0) {
      setTotalPrice(checkoutUser.reduce((acc, el) => acc + +el.price, 0));
    }
  }, [checkoutUser]);

  const cancelItem = (id, array) => {
    const storage = [];
    const newCheckoutItems = [];
    let index;
    const reqStorage = async () => {
      const lStorage = await Storage.get({ key: user.id });
      storage.push(...lStorage.value.split(','));
      storage.forEach((el, i) => {
        if (el === id) {
          index = i;
        }
      });
      storage.splice(index, 1);
      array.forEach((el) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const key of storage) {
          if (key === el.id) {
            newCheckoutItems.push(el);
          }
        }
      });
      setCheckoutUser(newCheckoutItems);
      Storage.set({ key: user.id, value: storage });
      setCart(cart - 1);
      setErrorMessage('Product removed from bucket');
      setShowToast(true);
    };
    reqStorage();
  };

  const checkOutPageContextData = {
    loading,
    checkoutUser,
    totalPrice,
    error,
    idDeleteAnnouncement,
    setIdDeleteAnnouncement,
    alertMessage,
    setAlertMessage,
    alert,
    setAlert,
    cancelItem,
    items,
    showToast,
    setShowToast,
    errorMessage,
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
