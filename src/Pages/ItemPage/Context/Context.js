import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children, itemid }) => {
  const { contextData } = useContext(AppContext);
  const {
    user, addItemToBucket, bucketItems, added, setAdded,
  } = contextData;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    const req = async () => {
      await fetch('http://localhost:3000/items')
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch(() => setError(true));
      setLoading(false);
    };
    req();

    return setAdded(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const item = items.filter((el) => el.id === itemid);
  useEffect(() => {
    if (user && item.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of bucketItems) {
        if (key === item[0].id) {
          setAdded(true);
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const contextDataItem = {
    item,
    user,
    loading,
    addItemToBucket,
    added,
    error,
    setAdded,
  };

  return (
    <Context.Provider value={{ contextDataItem }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  itemid: PropTypes.string.isRequired,

};
