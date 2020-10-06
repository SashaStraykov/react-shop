import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children, itemid }) => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => setItems(data));
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

      console.log(prevBucketItems);
      localStorage.setItem(user.id.toString(), prevBucketItems);
    } else {
      localStorage.setItem(user.id, id);
      console.log(false);
    }


    console.log(localStorage);
  };

  const item = items.filter((el) => el.id === itemid);
  const contextDataItem = {
    item: item,
    user: user,
    loading: loading,
    addItemToBucket,
  };

  return (
    <Context.Provider value={{ contextDataItem }}>{children}</Context.Provider>
  );
};
