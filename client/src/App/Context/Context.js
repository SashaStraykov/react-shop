import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [cart, setCart] = useState(1);
  const [user, setUser] = useState(null);
  const [bucketItems, setBucketItems] = useState(null);
  const [added, setAdded] = useState(false);
  const [checkoutUser, setCheckoutUser] = useState([]);
  const [amountItemsinBucket, setAmountItemsinBucket] = useState(0);
  const [openToast, setOpenToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [confirmComponent, setConfirmComponent] = useState(false);

  useEffect(() => {

    if (user) {
      if (localStorage.getItem(user.id) !== null) {
        const getLS = localStorage.getItem(user.id).split(','); 
        if (getLS[0] === '') {
          setAmountItemsinBucket(0);
        } else {
          setAmountItemsinBucket(getLS.length);
        }
      } else {
        setAmountItemsinBucket(0);
      }
    }
  }, [cart, user]);

  useEffect(() => {
    if (localStorage.getItem('DataUser')) {
      const req = async () => {
        const userToken = {
          tokenUser: localStorage.getItem('DataUser'),
        };
        await fetch(`${process.env.REACT_APP_API_USERS}/checkUser`, {
          method: 'post',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('DataUser')}`,
          },
          body: JSON.stringify(userToken),
        })
          .then((data) => data.json())
          .then((res) => {
            if(res.message) {
              return;
            } else {
              setUser(res)
            }
           });
      };
      req();
    }
  }, []);

  useEffect(() => {
    if (user && localStorage.getItem(user.id.toString()) !== null) {
      setBucketItems([...localStorage.getItem(user.id.toString()).split(',')]);
    }
  }, [user, cart]);

  // eslint-disable-next-line consistent-return
  const addItemToBucket = (id) => {
    if (localStorage.getItem(user.id.toString())) {
      if (bucketItems.some((el) => el === id)) {
        return bucketItems;
      }
      setBucketItems(bucketItems.push(id));

      localStorage.setItem(user.id.toString(), bucketItems);
    } else {
      localStorage.setItem(user.id, id);
    }
    setAdded(true);

    setCart(cart + 1);
  };

  const cancelItem = (id, items) => {
    const storage = [];
    const newCheckoutItems = [];
    let index;
    storage.push(...localStorage.getItem(user.id.toString()).split(','));
    storage.forEach((el, i) => {
      if (el === id) {
        index = i;
      }
    });
    storage.splice(index, 1);
    items.forEach((el) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const key of storage) {
        if (key === el.id) {
          newCheckoutItems.push(el);
        }
      }
    });
    setCheckoutUser(newCheckoutItems);
    localStorage.setItem(user.id.toString(), storage);
    setCart(cart - 1);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('DataUser');
  };

  addItemToBucket.propTypes = {
    id: PropTypes.string.isRequired,
  };

  cancelItem.propTypes = {
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const deleteComment =  async(itemId, commentId) => {
const postData = {
  itemId,
  commentId
}
    await fetch(`${process.env.REACT_APP_API_ITEMS}/deletecomment`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('DataUser')}`,
        
      },
      body: JSON.stringify(postData),
    })
    .then(data=>data.json())
    .then(res=>setCart(cart+1))
  }
  const contextData = {
    user,
    setUser,
    cart,
    setCart,
    addItemToBucket,
    bucketItems,
    amountItemsinBucket,
    setBucketItems,
    added,
    setAdded,
    cancelItem,
    checkoutUser,
    setCheckoutUser,
    signOut,
    openToast,
    setOpenToast,
    errorMessage,
    setErrorMessage,
    confirmComponent,
    setConfirmComponent,
    deleteComment
  };
  return (
    <Context.Provider value={{ contextData }}>{children}</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
