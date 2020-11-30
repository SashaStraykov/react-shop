import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const { appContextData } = useState(AppContext);
  const {
    user, cart, setCart, checkoutUser, setCheckoutUser,
  } = appContextData;
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const bucketItems = localStorage.getItem(user.id);
    if (bucketItems) {
      const req = async () => {
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
        await axios.post(`${process.env.REACT_APP_API_ITEMS_BUCKET}`, { bucketItems })
          .then((res) => {
            const a = bucketItems.split(',');
            if (a.length !== res.data.length) {
              const result = [];
              a.forEach((el) => {
                res.data.forEach(({ id }) => {
                  if (el === id) {
                    result.push(el);
                  }
                });
              });
              localStorage.setItem(user.id, result);
              setCart(cart + 1);
            }
            setItems(res.data);
          })
          .catch(() => setError(true));
      };
      req();
    }

    setLoading(false);
    return setLoading(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const storage = [];
    const checkout = [];
    if (localStorage.getItem(user.id.toString())) {
      storage.push(...localStorage.getItem(user.id).split(','));
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    if (checkoutUser.length >= 0) {
      setTotalPrice(checkoutUser.reduce((acc, el) => acc + +el.price, 0));
    }
  }, [checkoutUser]);

  const checkOutPageContextData = {
    loading,
    checkoutUser,
    totalPrice,
    error,
    items,
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
