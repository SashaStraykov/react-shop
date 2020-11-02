import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children, itemid, category }) => {
  const { contextData } = useContext(AppContext);
  const {
    user, addItemToBucket, bucketItems, added, setAdded,
  } = contextData;

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);
  const [comment, setComment] = useState('');
  const [rejectedInput, setRejectedInput] = useState('');
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    const req = async () => {
      await fetch(`${process.env.REACT_APP_API_ITEMS}/${category}/${itemid}`)
        .then((res) => res.json())
        .then((data) => setItem(data))
        .catch(() => setError(true));
      setLoading(false);
    };
    req();

    return setAdded(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  useEffect(() => {
    if (user && item) {
      if (user && localStorage.getItem(user.id.toString()) !== null) {
        // eslint-disable-next-line no-restricted-syntax
        for (const key of bucketItems) {
          if (key === item.id) {
            setAdded(true);
          }
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  const postComment = async (e) => {
    e.preventDefault();
    const postData = {
      login: user.login,
      comment,
      itemId: item.id,
    };
    await fetch(`${process.env.REACT_APP_API_ITEMS}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        setComment('');
        setUpdate(update + 1);
      });
  };

  const contextDataItem = {
    item,
    user,
    loading,
    addItemToBucket,
    added,
    error,
    setAdded,
    comment,
    setComment,
    postComment,
    rejectedInput,
    setRejectedInput,
  };

  return (
    <Context.Provider value={{ contextDataItem }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  itemid: PropTypes.string.isRequired,

};
