import React, { createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const contextData = {};
  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
