import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../App/Context/Index';

export const Context = createContext();

export const Provider = ({ children }) => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
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
    console.log('onChange: ', imgs);

    const formData = new FormData();
    formData.append('file', imgs);
    const itemData = {
      idCategory: category,
      title,
      description,
      userId: id,
      price,
      img: formData,
      date: date(),

    };
    console.log(itemData);

    await fetch('http://localhost:3000/items', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
