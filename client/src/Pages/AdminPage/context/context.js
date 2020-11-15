import React, { createContext, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../../../App/Context/Index'
import axios from 'axios'

export const Context = createContext();

export const Provider = ({ children }) => {
  const {contextData} = useContext(AppContext)
  const { setUser, setErrorMessage, setOpenToast} = contextData;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [unApprovedItems, setUnApprovedItems] = useState([]);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [rejectedInput, setRejectedInput] = useState('');
  useEffect(() => {
    const req = async () => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
      await axios.get(`${process.env.REACT_APP_API_ITEMS_APPROVING}`)
        .then(({data}) => {
          setUnApprovedItems(data)})
          .catch((e) => {   
            setError(true)
            const authError = e.message.split(' ');
            const l = authError.length
            if(authError[l-1] === '511') {
              setUser(null)
            }
          });
    };
    req();
    setLoading(false);
    return setLoading(false)
  }, []);


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
          setErrorMessage(data.message)
          setOpenToast(true);
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
