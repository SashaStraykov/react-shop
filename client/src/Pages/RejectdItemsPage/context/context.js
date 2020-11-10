import React, {
    createContext, useEffect, useState, useContext,
  } from 'react';
  import PropTypes from 'prop-types';

  export const Context = createContext();

  export const Provider = ({ children }) => {
    const [rejectedItems, setRejectedItems] = useState([]);
    const [madePosts, setMadePosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);
    // useEffect(()=> {
    //   const req = async () => {
    //     await fetch(`${process.env.REACT_APP_API_ITEMS}`)
    //       .then((res) => res.json())
    //       .then((data) => setItems(data))
    //       .catch(() => setError(true));
    //   };

    //   req();
    //   setLoading(false);
    // }, []);

    const rejectedItemsContextData = {

    }
    return (
        <Context.Provider value={{ rejectedItemsContextData }}>{children}</Context.Provider>
      );
    };

    Provider.propTypes = {

        children: PropTypes.node.isRequired,
      
    };