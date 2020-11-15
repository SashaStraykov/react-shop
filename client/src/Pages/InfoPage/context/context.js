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
    const [comment, setComment] = useState('');


  const {contextData} = useContext(AppContext);
  const {user, setUser, setErrorMessage, setOpenToast, confirmComponent, setConfirmComponent, cart, setCart } = contextData;

    useEffect(()=> {
      const req = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
        await axios.get(`${process.env.REACT_APP_API_ITEMS}?id=${user.id}`)
          .then((res) => {
            setMyItems(res.data)
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

    const getComments = (comments, id) => {
      setItemComments({comments, itemId: id})
    }

    const postComment = async (e) => {
      e.preventDefault();
      if(comment.trim() === '') {
        return setComment('')
      }
      const nC = {
        login: user.login,
        comment,
        id: itemComments.itemId,
        timeStamp: Date()
      };
      const newComments = [...itemComments.comments];
      newComments.push(nC);
      setItemComments({...itemComments, comments: newComments})

      const postData = {
        login: user.login,
        comment,
        itemId: itemComments.itemId,
        timeStamp: Date()
      };

      await fetch(`${process.env.REACT_APP_API_ITEMS}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('DataUser')}`,
        },
        body: JSON.stringify(postData),
      })
        .then((res) => res.json())
        .then((data) => {
          setComment('');
          setCart(cart + 1);
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
      setItemComments,
      postComment,
      comment, 
      setComment
    }
    return (
        <Context.Provider value={{ infoContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };