import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const { user, setOpenToast, setErrorMessage} = contextData;
  const { id } = user;

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [imgs, setImgs] = useState([]);
  

  useEffect(() => {
    const req = async () => {
      await fetch(`${process.env.REACT_APP_API_CATEGORY}`)
        .then((response) => response.json())
        .then((data) => {
          setCategory(data[0].idCategory);
          setItems(data);
        })
        .catch(() => setError(true));
    };

    req();
    setLoading(false);
  }, []);

  const date = () => {
    const a = new Date();
    const DATE = `${a.getDate()}.${a.getMonth() + 1}.${a.getFullYear()} `;
    return DATE;
  };

  const postData = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
  for (let i=0; i<imgs.length; i++) {
    formData.append('imgs', imgs[i]);
  }
      
    formData.set('idCategory', category);
    formData.set('title', title);
    formData.set('description', description);
    formData.set('userId', id);
    formData.set('price', price);
    formData.set('date', date());

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('DataUser')}` 
    axios.defaults.headers.common['Content-Type']= 'multipart/form-data'
    axios.post(process.env.REACT_APP_API_ITEMS, formData)
    .then(({data})=>{
      setLoading(false)
      setErrorMessage(data.message)
      setOpenToast(true)
      console.log(data)
    })
  };

  const contextDataAddItemPage = {
    loading,
    error,
    items,
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    imgs,
    setImgs,
    postData,
    price,
    setPrice,
  };

  return (
    <Context.Provider value={{ contextDataAddItemPage }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {

  children: PropTypes.node.isRequired,

};
