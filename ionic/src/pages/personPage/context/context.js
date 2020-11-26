import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [myAnouncement, setMyAnouncement] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [idDeleteAnnouncement, setIdDeleteAnnouncement] = useState('');

  const { appContextData } = useContext(AppContext);
  const { user, setUser } = appContextData;

  useEffect(() => {
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

  const onDelete = async (e, id) => {
    // e.preventDefault();
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
        console.log(data);
      })
      .catch((err) => {
        if (err.response.data.message) {
          console.log(err.response.data.message);
          // setErrorMessage (e.response.data.message)
          // setShowToast(true);
          // setLoading(false);
        }
      });
  };

  const personPageContextData = {
    loading,
    myAnouncement,
    alert,
    setAlert,
    alertMessage,
    setIdDeleteAnnouncement,
    idDeleteAnnouncement,
    onDelete,
  };
  return (
    <Context.Provider value={{ personPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
