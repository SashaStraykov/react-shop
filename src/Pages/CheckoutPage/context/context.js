import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const { user, cancelItem, checkoutUser, setCheckoutUser } = contextData;
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((e) => setError(true));
    };
    req();
    setLoading(false);
  }, []);

  useEffect(() => {
    const storage = [];
    const checkout = [];
    if (localStorage.getItem(user.id.toString())) {
      storage.push(...localStorage.getItem(user.id).split(","));
    }

    items.forEach((el) => {
      for (let key of storage) {
        if (key === el.id) {
          checkout.push(el);
        }
      }
    });
    setCheckoutUser(checkout);
  }, [items]);

  useEffect(() => {
    if (checkoutUser.length >= 0) {
      setTotalPrice(checkoutUser.reduce((acc, el) => acc + +el.price, 0));
    }
  }, [checkoutUser]);

  const checkoutContextData = {
    user: user,
    loading: loading,
    checkoutUser: checkoutUser,
    totalPrice: totalPrice,
    cancelItem: cancelItem,
    error: error,
    items: items,
  };
  return (
    <Context.Provider value={{ checkoutContextData }}>
      {children}
    </Context.Provider>
  );
};
