import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

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
      await fetch('http://localhost:3000/items')
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch(() => setError(true));
    };
    req();
    setLoading(false);
  }, []);

  useEffect(() => {
    const unApprovedItemsArray = [];
    const userItems = [];
    items.forEach((el) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of user.userItems) {
        if (key === el.id) {
          if (el.approved === false || el.approved === '') {
            unApprovedItemsArray.push(el);
          }
          userItems.push(el);
        }
      }
    });
    setUnApprovedItems(unApprovedItemsArray);
    setMadePosts(userItems);
    setLoading(false);
  }, [items, user.userItems]);

  const contextdataPersonPage = {
    user,
    setUser,
    loading,
    madePosts,
    unApprovedItems,
    error,
  };

  return (
    <Context.Provider value={{ contextdataPersonPage }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
