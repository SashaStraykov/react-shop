import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState(1);
  const [user, setUser] = useState({
    id: 2,
    login: "asd",
    password: "qwe",
    email: "qwert@mail.ru",
    typs: 599,
    role: "user",
    userItems: ["cat3", "cat4"],
  });

  const contextData = {
    user: user,
    setUser: setUser,
    cart: cart,
    setCart: setCart,
  };
  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};
