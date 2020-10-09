import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContext } from "../../../App/Context/Index";

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const { user, setUser } = contextData;
  const [items, setItems] = useState([]);
  const [madePosts, setMadePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unApprovedItems, setUnApprovedItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const req = async () => {
      await fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((e) => setError(true));
    };
    req();
    setLoading(false);
  }, []);

  useEffect(() => {
    const unApprovedItemsArray = [];
    const userItems = [];
    items.forEach((el) => {
      for (let key of user.userItems) {
        if (key === el.id) {
          if (el.approved === false) {
            unApprovedItemsArray.push(el);
          }
          userItems.push(el);
        }
      }
      // for (let i = 0; i < localStorage.length; i++) {
      //   if (localStorage.key(i) === el.id) {
      //     if (el.approved === false) {
      //       unApprovedItemsArray.push(el);
      //     }
      //   }
      // }
    });
    setUnApprovedItems(unApprovedItemsArray);
    setMadePosts(userItems);
    setLoading(false);
  }, [items, user.userItems]);

  const contextdataPersonPage = {
    user: user,
    setUser: setUser,
    loading: loading,
    madePosts: madePosts,
    unApprovedItems: unApprovedItems,
    error: error,
  };

  return (
    <Context.Provider value={{ contextdataPersonPage }}>
      {children}
    </Context.Provider>
  );
};
