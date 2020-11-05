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
  //   const reqUser = async () => {
  //     await fetch(`${process.env.REACT_APP_API_USERS}/checkUser`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if(!data.message) {
  //         console.log(data)
  //         setUser(data)
  //       }
  //     })
  //     .catch(() => setError(true));
  // };
    
    const req = async () => {
      await fetch(`${process.env.REACT_APP_API_ITEMS}`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch(() => setError(true));
    };
    // reqUser();
    req();
    setLoading(false);
  }, []);

  useEffect(() => {
    const unApprovedItemsArray = [];
    const approvedUserItems = []
    items.forEach((el) => {
      // eslint-disable-next-line no-restricted-syntax
      if (el.userId === user.id) {
        if (el.approved === 'rejected' || el.approved === '') {
          unApprovedItemsArray.push(el);
        } else {
          approvedUserItems.push(el)
        }
      }
    }); 
    setUnApprovedItems(unApprovedItemsArray);
    setMadePosts(approvedUserItems);
    setLoading(false);
  }, [items, user.userItems]);

  const onDelete = async (e, id) => {
    e.preventDefault();
    console.log('first made posts', madePosts.length)
    console.log(madePosts)
    const newPosts = [];

    madePosts.forEach((el)=> {
      if(el.id!==id) {
        console.log(el.title)
       newPosts.push(el)
      }
    })
    console.log('new posts', newPosts.length)
    setMadePosts(newPosts)
    console.log('final length madeposts', madePosts.length)

    await fetch(`${process.env.REACT_APP_API_ITEMS}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('DataUser')}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
       if(data.message.name === "TokenExpiredError") {
         setUser(null)
       } else {
         console.log(data)
       }

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
