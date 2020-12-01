import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import { Plugins } from '@capacitor/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

const { Storage } = Plugins;

export const Context = createContext();

export const Provider = ({ children, category, itemId }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { appContextData } = useContext(AppContext);
  const {
    added, setAdded, bucketItems, setBucketItems, user, cart, setCart,
  } = appContextData;

  const cleanUp = () => {
    setLoading(false);
    setAdded(false);
  };

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      await axios.get(`${process.env.REACT_APP_API_ITEMS}/${category}/${itemId}`)
        .then(({ data }) => {
          setItem(data);
          setLoading(false);
        });
    };
    req();
    return cleanUp();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const req = async () => {
      if (user && item) {
        const currentItem = await Storage.get({ key: user.id });
        if (user && currentItem.value !== null) {
          // eslint-disable-next-line no-restricted-syntax
          for (const key of bucketItems) {
            if (key === item.id) {
              return setAdded(true);
            }
          }
        }
      }
    };
    req();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const addItemToBucket = async (id) => {
    if (user) {
      const bucketItem = await Storage.get({ key: user.id });
      if (bucketItem.value !== null) {
        if (bucketItems.some((el) => el === id)) {
          return bucketItems;
        }
        setBucketItems(bucketItems.push(id));

        Storage.set({ key: user.id, value: bucketItems });
      } else {
        Storage.set({ key: user.id, value: id });
      }
      setAdded(true);

      setCart(cart + 1);
    }
  };

  const itemPageContextData = {
    category,
    loading,
    item,
    addItemToBucket,
    added,
  };
  return (
    <Context.Provider value={{ itemPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
