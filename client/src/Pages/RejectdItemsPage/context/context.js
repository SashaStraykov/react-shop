import React, {
    createContext, useEffect, useState, 
    useContext
  } from 'react';
  import axios from 'axios';
  import PropTypes from 'prop-types';
  import {AppContext} from '../../../App/context'

  export const Context = createContext();

  export const Provider = ({ children }) => {
    const [rejectedItems, setRejectedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [confirmInfo, setConfirmInfo] = useState(null);
    const {contextData} = useContext(AppContext);
    const { user, setUser, errorMessage, confirmComponent, setConfirmComponent, setErrorMessage, openToast, setOpenToast, cart, setCart } = contextData;


    useEffect(()=> {
      const req = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
        await axios.get(`${process.env.REACT_APP_API_REJECTED_ITEMS}?id=${user.id}`)
          .then((res) => {
            setRejectedItems(res.data)
          })
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
      // eslint-disable-next-line
    }, [cart]);

    const onDelete = async (e, id) => {
      e.preventDefault();
      setConfirmComponent(false)


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
          setCart(cart+1)
         if(data.message.name === "TokenExpiredError") {
           setUser(null)
         } else {
          setErrorMessage(data.message)
           setOpenToast(true)
         }
  
        })
        .catch((e) => {   
          setError(true)
          const authError = e.message.split(' ');
          const l = authError.length
          if(authError[l-1] === '511') {
            setUser(null)
          }
        });
    };

    const addConfirmComponent = (id, title) => {
      setConfirmInfo({id, title, onDelete})
      setConfirmComponent(true)
    }

    const rejectedItemsContextData = {
        rejectedItems,
        loading,
        error,
        onDelete,
        confirmComponent,
        addConfirmComponent,
        confirmInfo,
        openToast,
        errorMessage
    }
    return (
        <Context.Provider value={{ rejectedItemsContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };