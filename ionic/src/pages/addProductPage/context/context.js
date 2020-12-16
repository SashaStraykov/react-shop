import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const { appContextData } = useContext(AppContext);
  const { user } = appContextData;
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    const req = async () => {
      await axios.get(process.env.REACT_APP_API_CATEGORY)
        .then(({ data }) => {
          setLoading(false);
          setCategory(data);
          setSelectCategory(data[0].title);
        })
        .catch((err) => {
          if (err && !err.response) {
            setLoading(false);
            return setError(true);
          }
        });
    };
    req();
    return () => {
      setLoading(false);
    };
  }, []);

  const date = () => {
    const a = new Date();
    const DATE = `${a.getDate()}.${a.getMonth() + 1}.${a.getFullYear()} `;
    return DATE;
  };

  const postData = async () => {
    setLoading(true);
    const formData = new FormData();
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < photos.length; i++) {
      formData.append('imgs', photos[i]);
    }
    formData.set('idCategory', selectCategory);
    formData.set('title', title);
    formData.set('description', description);
    formData.set('userId', user.id);
    formData.set('price', price);
    formData.set('date', date());

    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('DataUser')}`;
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    axios.post(process.env.REACT_APP_API_ITEMS, formData)
      .then(({ data }) => {
        setLoading(false);
        setDescription('');
        setTitle('');
        setPrice(0);
        setPhotos([]);
        setErrorMessage(data.message);
        setShowToast(true);
      })
      .catch((err) => {
        if (err && !err.response) {
          setLoading(false);
          return setError(true);
        }
      });

    return () => {
      setLoading(false);
    };
  };

  const addProductPageContextData = {
    loading,
    title,
    setTitle,
    category,
    selectCategory,
    setSelectCategory,
    price,
    setPrice,
    description,
    setDescription,
    photos,
    postData,
    setPhotos,
    error,
    errorMessage,
    setShowToast,
    showToast,
  };

  return (
    <Context.Provider value={{ addProductPageContextData }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,

};
