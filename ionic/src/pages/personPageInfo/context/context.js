import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [myAnouncement, setMyAnouncement] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [idDeleteAnnouncement, setIdDeleteAnnouncement] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [personPageSegment, setPersonPageSegment] = useState('personProducts');

  const { appContextData } = useContext(AppContext);
  const {
    user, setUser, setErrorMessage, setShowToast,
  } = appContextData;

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
      await axios.get(`${process.env.REACT_APP_API_ITEMS}?id=${user.id}`)
        .then(({ data }) => {
          setMyAnouncement(data);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = async (id) => {
    const newPosts = [];
    myAnouncement.forEach((el) => {
      if (el.id !== id) {
        newPosts.push(el);
      }
    });
    setMyAnouncement(newPosts);
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
        if (err.response.data.message) {
          setErrorMessage(err.response.data.message);
          setShowToast(true);
        }
      });
  };

  const infoPageContextData = {
    loading,
    myAnouncement,
    setMyAnouncement,
    alert,
    setAlert,
    alertMessage,
    setIdDeleteAnnouncement,
    idDeleteAnnouncement,
    onDelete,
    setAlertMessage,
    personPageSegment,
    setPersonPageSegment,
    error,
  };
  return (
    <Context.Provider value={{ infoPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
