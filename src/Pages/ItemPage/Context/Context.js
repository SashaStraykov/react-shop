import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children, itemid }) => {
  const { contextData } = useContext(AppContext);
  const { user, setCart, cart } = contextData;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedToBucket, setAddedToBucket] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((e) => setError(true));
      setLoading(false);
    };
    req();
  }, []);

  const addItemToBucket = (id) => {
    if (localStorage.getItem(user.id.toString())) {
      const prevBucketItems = [];
      prevBucketItems.push(
        ...localStorage.getItem(user.id.toString()).split(",")
      );
      if (prevBucketItems.some((el) => el === id)) {
        return prevBucketItems;
      } else {
        prevBucketItems.push(id);
      }
      localStorage.setItem(user.id.toString(), prevBucketItems);
    } else {
      localStorage.setItem(user.id, id);
    }
    setAddedToBucket(true);
    setCart(cart + 1);
  };

  const item = items.filter((el) => el.id === itemid);
  const contextDataItem = {
    item: item,
    user: user,
    loading: loading,
    addItemToBucket: addItemToBucket,
    addedToBucket: addedToBucket,
    error: error,
  };

  return (
    <Context.Provider value={{ contextDataItem }}>{children}</Context.Provider>
  );
};
