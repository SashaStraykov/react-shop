import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [unApprovedItems, setUnApprovedItems] = useState([]);
  const [error, setError] = useState(false);

  const { appContextData } = useContext(AppContext);
  const {
    user, setUser, setErrorMessage, setShowToast,
  } = appContextData;

  useEffect(() => {
    const req = async () => {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
      await axios.get(`${process.env.REACT_APP_API_ITEMS_APPROVING}`)
        .then(({ data }) => {
          setUnApprovedItems(data);
        })
        .catch((e) => {
          setError(true);
          const authError = e.message.split(' ');
          const l = authError.length;
          if (authError[l - 1] === '511') {
            setUser(null);
          }
        });
    };
    req();
    setLoading(false);
    return setLoading(false);
    // eslint-disable-next-line
  }, []);

  const adminPageContextData = {
    loading,
    unApprovedItems,
    error,
  };
  return (
    <Context.Provider value={{ adminPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
