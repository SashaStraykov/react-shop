import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState(1);
  const [user, setUser] = useState(null);
  const [bucketItems, setBucketItems] = useState(null);
  const [added, setAdded] = useState(false);
  const [checkoutUser, setCheckoutUser] = useState([]);

  useEffect(() => {
    if (user) {
      setBucketItems([...localStorage.getItem(user.id.toString()).split(",")]);
    }
  }, [user, cart]);

  const addItemToBucket = (id) => {
    if (localStorage.getItem(user.id.toString())) {
      if (bucketItems.some((el) => el === id)) {
        return bucketItems;
      } else {
        setBucketItems(bucketItems.push(id));
      }
      localStorage.setItem(user.id.toString(), bucketItems);
    } else {
      localStorage.setItem(user.id, id);
    }
    setAdded(true);

    setCart(cart + 1);
  };

  const cancelItem = (id, items) => {
    const storage = [];
    const newCheckoutItems = [];
    let index;
    storage.push(...localStorage.getItem(user.id.toString()).split(","));
    storage.forEach((el, i) => {
      if (el === id) {
        index = i;
      }
    });
    storage.splice(index, 1);
    items.forEach((el) => {
      for (let key of storage) {
        if (key === el.id) {
          newCheckoutItems.push(el);
        }
      }
    });
    setCheckoutUser(newCheckoutItems);
    localStorage.setItem(user.id.toString(), storage);
    setCart(cart - 1);
  };
  const contextData = {
    user: user,
    setUser: setUser,
    cart: cart,
    setCart: setCart,
    addItemToBucket: addItemToBucket,
    bucketItems: bucketItems,
    setBucketItems: setBucketItems,
    added: added,
    setAdded: setAdded,
    cancelItem: cancelItem,
    checkoutUser: checkoutUser,
    setCheckoutUser: setCheckoutUser,
  };
  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
