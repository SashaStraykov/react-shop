import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../../../App/Context/Index'

export const Context = createContext();

export const Provider = ({ children }) => {
  const {contextData} = useContext(AppContext)
  const { setUser} = contextData;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [unApprovedItems, setUnApprovedItems] = useState([]);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [rejectedInput, setRejectedInput] = useState('');

  useEffect(() => {
    const req = async () => {
      await fetch(`${process.env.REACT_APP_API_ITEMS}`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch(() => setError(true));

      setLoading(false);
    };
    req();
  }, []);

  useEffect(() => {
    const unApprovedItemsArray = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key of items) {
      if (key.approved === '' || key.approved === null) {
        unApprovedItemsArray.push(key);
      }
    }
    setUnApprovedItems(unApprovedItemsArray);
  }, [items]);

  const statementItem = async (e, id) => {
    e.preventDefault();
    setModalConfirm(false)
    setRejectedInput('')

    const a=[];
    unApprovedItems.forEach((el)=>{
      if(el.id!==id) {
        a.push(el)
      }
    })
    setUnApprovedItems(a)
  
    const postData = {
      itemId: id,
      approved: e.target.name,
    };

    await fetch(`${process.env.REACT_APP_API_ITEMS}/statement`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('DataUser')}`,
        
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message.name === "TokenExpiredError") {
          setUser(null)
        }
        else {
          console.log(data)
        }
      });
  };

  const adminContextData = {
    error,
    loading,
    unApprovedItems,
    modalConfirm,
    setModalConfirm,
    statementItem,
    rejectedInput,
    setRejectedInput,
  };
  return (
    <Context.Provider value={{ adminContextData }}>{children}</Context.Provider>
  );
};
Provider.propTypes = {

  children: PropTypes.node.isRequired,

};
