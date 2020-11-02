import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const {
    user, setUser,
  } = contextData;
  const [items, setItems] = useState([]);
  const [madePosts, setMadePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unApprovedItems, setUnApprovedItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const req = async () => {
      await fetch(`${process.env.REACT_APP_API_ITEMS}`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch(() => setError(true));
    };
    req();
    setLoading(false);
  }, []);

  useEffect(() => {
    const unApprovedItemsArray = [];
    items.forEach((el) => {
      // eslint-disable-next-line no-restricted-syntax
      if (el.userId === user.id) {
        if (el.approved === 'rejected' || el.approved === '') {
          unApprovedItemsArray.push(el);
        }
      }
    });
    setUnApprovedItems(unApprovedItemsArray);
    // setMadePosts(userItems);
    setLoading(false);
  }, [items, user.userItems]);

  const onDelete = async (e, id) => {
    e.preventDefault();
    let index;
    const newPosts = [...madePosts];
    await fetch(`${process.env.REACT_APP_API_ITEMS}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        madePosts.forEach((el, i) => {
          if (id === el.id) {
            index = i;
          }
        });
        newPosts.splice(index, 1);
        setMadePosts(newPosts);
      });
  };

  const contextdataPersonPage = {
    user,
    setUser,
    loading,
    madePosts,
    unApprovedItems,
    error,
    onDelete,
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
