import React, { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children, itemid }) => {
  const { contextData } = useContext(AppContext);
  const { user, addItemToBucket, bucketItems, added, setAdded } = contextData;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

    return setAdded(false);
  }, []);

  const item = items.filter((el) => el.id === itemid);
  useEffect(() => {
    if (user && item.length > 0) {
      for (let key of bucketItems) {
        if (key === item[0].id) {
          setAdded(true);
        }
      }
    }
  }, [items]);

  const contextDataItem = {
    item: item,
    user: user,
    loading: loading,
    addItemToBucket: addItemToBucket,
    added: added,
    error: error,
    setAdded: setAdded,
  };

  return (
    <Context.Provider value={{ contextDataItem }}>{children}</Context.Provider>
  );
};
