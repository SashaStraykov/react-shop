import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState(1);
  const [user, setUser] = useState(null);
  const [bucketItems, setBucketItems] = useState(null);
  const [added, setAdded] = useState(false);

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
  };
  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
