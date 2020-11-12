import React, {
    createContext, useEffect, useState, 
  } from 'react';
  import axios from 'axios';
  import PropTypes from 'prop-types';

  export const Context = createContext();

  export const Provider = ({ children }) => {
    const [rejectedItems, setRejectedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(()=> {
      const req = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
        await axios.get(`${process.env.REACT_APP_API_REJECTED_ITEMS}`)
          .then((res) => {
            setRejectedItems(res.data)
          })
          .catch(() => setError(true));
      };
      req();
      setLoading(false);
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