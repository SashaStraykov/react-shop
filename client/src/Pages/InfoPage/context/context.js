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
    const [itemComments, setItemComments] = useState({comments:[],itemId: null})


  const {contextData} = useContext(AppContext);
  const {user, setUser, setErrorMessage, setOpenToast, confirmComponent, setConfirmComponent, cart} = contextData;

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
      // eslint-disable-next-line
    }, [cart]);

    useEffect(()=> {
      if(itemComments.comments.length>0) {
        myItems.forEach(el=> {
          if(el.id===itemComments.itemId) {
            setItemComments({...itemComments, comments: el.comments})
          }
        })
      }
    // eslint-disable-next-line
    }, [myItems])

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

    const getComments = (comments, id) => {
      setItemComments({comments, itemId: id})
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
      confirmInfo,
      getComments, 
      itemComments, 
      setItemComments
    }
    return (
        <Context.Provider value={{ infoContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };