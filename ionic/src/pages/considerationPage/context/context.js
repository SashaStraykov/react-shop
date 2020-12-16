import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [considerationProducts, setConsiderationProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [idDeleteAnnouncement, setIdDeleteAnnouncement] = useState(null);
  const { appContextData } = useContext(AppContext);
  const {
    user, setUser, setErrorMessage, setShowToast,
  } = appContextData;

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
      await axios.get(`${process.env.REACT_APP_API_REJECTED_ITEMS}?id=${user.id}`)
        .then(({ data }) => {
          setLoading(false);
          setConsiderationProducts(data);
        })
        .catch((e) => {
          setLoading(false);
          setError(true);
          const authError = e.message.split(' ');
          const l = authError.length;
          if (authError[l - 1] === '511') {
            setUser(null);
          }
        });
    };
    req();
    return () => {
      setLoading(false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async (id) => {
    const newPosts = [];
    considerationProducts.forEach((el) => {
      if (el.id !== id) {
        newPosts.push(el);
      }
    });
    setConsiderationProducts(newPosts);
    const postData = {
      data: {
        id,
      },
    };
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    await axios.delete(process.env.REACT_APP_API_ITEMS, postData)
      .then(({ data }) => {
        setErrorMessage(data.message);
        setShowToast(true);
      })
      .catch((err) => {
        if (err && !err.response) {
          setLoading(false);
          return setError(true);
        }
        if (err.response.data.message) {
          setErrorMessage(err.response.data.message);
          setShowToast(true);
        }
      });
  };

  const onDeleteButtonCard = (id, title) => {
    setIdDeleteAnnouncement(id); setAlert(true); setAlertMessage(title);
  };
  const considerationPageContextData = {
    loading,
    considerationProducts,
    error,
    onDelete,
    alert,
    setAlert,
    alertMessage,
    setAlertMessage,
    idDeleteAnnouncement,
    setIdDeleteAnnouncement,
    onDeleteButtonCard,
  };
  return (
    <Context.Provider value={{ considerationPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
