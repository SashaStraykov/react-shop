import React, { createContext, useContext } from "react";
import { data } from "../../../Data/Data";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children, itemid }) => {
  const { items } = data;
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  const item = items.filter((el) => el.id === itemid);
  const contextDataItem = {
    item: item,
    user: user,
  };

  return <Provider value={{ contextDataItem }}>{children}</Provider>;
};
