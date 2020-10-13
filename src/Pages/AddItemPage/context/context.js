import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/category")
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((e) => setError(true));
    };

    req();
    setLoading(false);
  }, []);

  const contextDataAddItemPage = {
    loading: loading,
    error: error,
    items: items,
  };

  return (
    <Context.Provider value={{ contextDataAddItemPage }}>
      {children}
    </Context.Provider>
  );
};
