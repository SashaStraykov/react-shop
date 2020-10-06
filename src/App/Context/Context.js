import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    login: "qwe",
    password: "123",
    email: "qwert@mail.ru",
    typs: 25,
    role: "user",
    userItems: ["cat1", "cat2"],
  });
  const contextData = {
    user: user,
    setUser: setUser,
  };

  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
