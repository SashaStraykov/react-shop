import React, {
    createContext, useEffect, useState, 
    useContext
  } from 'react';
  import axios from 'axios';
  import PropTypes from 'prop-types';
  import {AppContext} from '../../../App/Context/Index'

  export const Context = createContext();

  export const Provider = ({ children }) => {
    const [rejectedItems, setRejectedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {contextData} = useContext(AppContext);
    const {user, setUser} = contextData;


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
    }, []);

    const rejectedItemsContextData = {
        rejectedItems,
        loading,
        error
    }
    return (
        <Context.Provider value={{ rejectedItemsContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };