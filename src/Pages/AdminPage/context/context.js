import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [unApprovedItems, setUnApprovedItems] = useState([]);

  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch(() => setError(true));

      setLoading(false);
    };
    req();
  }, []);

  useEffect(() => {
    const unApprovedItemsArray = [];
    for (let key of items) {
      if (key.approved === "" || key.approved === null) {
        unApprovedItemsArray.push(key);
      }
    }
    setUnApprovedItems(unApprovedItemsArray);
  }, [items]);

  const adminContextData = {
    error: error,
    loading: loading,
    unApprovedItems: unApprovedItems,
  };
  return (
    <Context.Provider value={{ adminContextData }}>{children}</Context.Provider>
  );
};
