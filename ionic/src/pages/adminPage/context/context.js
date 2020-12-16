import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [unApprovedItems, setUnApprovedItems] = useState([]);
  const [error, setError] = useState(false);
  const [idStateAnnouncement, setIdStateAnnouncement] = useState('');
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const { appContextData } = useContext(AppContext);
  const {
    setUser, setErrorMessage,
    errorMessage,
  } = appContextData;
  useEffect(() => {
    setLoading(true);
    const req = async () => {
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
      await axios.get(`${process.env.REACT_APP_API_ITEMS_APPROVING}`)
        .then(({ data }) => {
          setLoading(false);
          setUnApprovedItems(data);
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
    // eslint-disable-next-line
  }, []);

  const onStateButtonCard = (id, title) => {
    setIdStateAnnouncement(id); setAlert(true); setAlertMessage(title);
  };

  const onChangeState = (id, approved, remark) => {
    const req = async () => {
      const a = [];
      unApprovedItems.forEach((el) => {
        if (el.id !== id) {
          a.push(el);
        }
      });
      setUnApprovedItems(a);
      const postData = {
        itemId: id,
        approved,
        remark,
      };
      axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      await axios.put(`${process.env.REACT_APP_API_ITEMS}/statement`, postData)
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
    req();
  };

  const adminPageContextData = {
    loading,
    unApprovedItems,
    error,
    onStateButtonCard,
    alert,
    setAlert,
    alertMessage,
    idStateAnnouncement,
    onChangeState,
    showToast,
    setShowToast,
    errorMessage,
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
