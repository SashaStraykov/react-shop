import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState("SAS");
  const contextData = {
    user: user,
  };

  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
