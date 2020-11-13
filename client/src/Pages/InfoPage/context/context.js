import React, {
    createContext, useEffect, useState, useContext,
  } from 'react';
  import axios from 'axios';
  import PropTypes from 'prop-types';
  import {AppContext} from '../../../App/Context/Index'

  export const Context = createContext();

  export const Provider = ({ children }) => {
    const [myItems, setMyItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [confirmInfo, setConfirmInfo] = useState(null);

  const {contextData} = useContext(AppContext);
  const {user, setUser, setErrorMessage, setOpenToast, confirmComponent, setConfirmComponent} = contextData;

    useEffect(()=> {
      const req = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
        await axios.get(`${process.env.REACT_APP_API_ITEMS}?id=${user.id}`)
          .then((res) => {
            setMyItems(res.data)
          })
          .catch(() => setError(true));
      };
      req();
      setLoading(false);
    }, []);

    const onDelete = async (e, id) => {
      e.preventDefault();
      setConfirmComponent(false)
      const newPosts = [];
  
      myItems.forEach((el)=> {
        if(el.id!==id) {
         newPosts.push(el)
        }
      })
      setMyItems(newPosts)

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
          setErrorMessage(data.message)
           setOpenToast(true)
           console.log(data.message)

         }
  
        });
    };

    const addConfirmComponent = (id, title) => {
      setConfirmInfo({id, title, onDelete})
      setConfirmComponent(true)
    }


    const infoContextData = {
      myItems,
      loading,
      error,
      user,
      onDelete,
      confirmComponent,
      setConfirmComponent,
      addConfirmComponent,
      confirmInfo
    }
    return (
        <Context.Provider value={{ infoContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };