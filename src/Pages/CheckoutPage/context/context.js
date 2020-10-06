import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkoutUser, setCheckoutUser] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => setItems(data));
    };
    req();
    setLoading(false);
  }, []);

  const cancelItem = (id) => {
    const storage = [];
    let index;
    storage.push(...localStorage.getItem(user.id.toString()).split(","));
    storage.forEach((el, i) => {
      if (el === id) {
        index = i;
      }
    });
    storage.splice(index, 1);
    setCheckoutUser(storage);
    localStorage.setItem(user.id.toString(), storage);
  };

  useEffect(() => {
    const storage = [];
    const checkout = [];
    const checkoutPrice = [];
    storage.push(...localStorage.getItem(user.id).split(","));

    items.forEach((el) => {
      for (let key of storage) {
        if (key === el.id) {
          checkout.push(el);
          checkoutPrice.push(el.price);
        }
      }
    });
    setCheckoutUser(checkout);

    if (checkout.length > 0) {
      setTotalPrice(checkoutPrice.reduce((acc, el) => +acc + parseInt(el)));
    }
  }, [items]);

  const checkoutContextData = {
    user: user,
    loading: loading,
    checkoutUser: checkoutUser,
    totalPrice: totalPrice,
    cancelItem: cancelItem,
  };
  return (
    <Context.Provider value={{ checkoutContextData }}>
      {children}
    </Context.Provider>
  );
};
