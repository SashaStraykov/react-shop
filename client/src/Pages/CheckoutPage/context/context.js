import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/context';
import axios from 'axios'

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const {
    user, cancelItem, checkoutUser, setCheckoutUser, cart, setCart
  } = contextData;
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const bucketItems = localStorage.getItem(user.id)
    if(bucketItems) {
      const req = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
        await axios.post(`${process.env.REACT_APP_API_ITEMS_BUCKET}`, {bucketItems})
          .then((res) => {
            const a = bucketItems.split(',')
            if(a.length!==res.data.length) {
              const  result = [];
                a.forEach(el=> {
                  res.data.forEach(({id})=> {
                    if(el===id) {
                      result.push(el)
                    }
                  })
                })
              localStorage.setItem(user.id, result)
              setCart(cart+1);  
            }
            setItems(res.data)})
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

  const checkoutContextData = {
    user,
    loading,
    checkoutUser,
    totalPrice,
    cancelItem,
    error,
    items,
  };
  return (
    <Context.Provider value={{ checkoutContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
