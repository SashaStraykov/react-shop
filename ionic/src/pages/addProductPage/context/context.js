import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { base64FromPath } from '@ionic/react-hooks/filesystem';
import { useCamera } from '@ionic/react-hooks/camera';
import {
  CameraResultType,
  Plugins,
} from '@capacitor/core';
import { AppContext } from '../../../app/context';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [ablePhoto, setAblePhoto] = useState(1);
  const { appContextData } = useContext(AppContext);
  const { user } = appContextData;

  const { getPhoto, photo } = useCamera();
  const [photos, setPhotos] = useState([]);

  const { Camera } = Plugins;

  useEffect(() => {
    const req = async () => {
      await axios.get(process.env.REACT_APP_API_CATEGORY)
        .then(({ data }) => {
          setCategory(data);
          setSelectCategory(data[0].title);
          setLoading(false);
        });
    };
    req();
    return setLoading(false);
  }, []);

  const takePhoto = async () => {
    // if (availableFeatures.getPhoto) {
    //   getPhoto({
    //     quality: 100,
    //     allowEditing: false,
    //     resultType: CameraResultType.DataUrl,
    //   });
    // }
    await getPhoto({
      resultType: CameraResultType.Uri,
      allowEditing: false,
      quality: 100,
      encodingType: Camera.jpeg,
    })
      .then(() => {
        // console.log(pic);
      // const base64 = base64FromPath(photo);
      // // eslint-disable-next-line no-param-reassign
      // pic.data = base64;
      });
    setAblePhoto(ablePhoto + 1);
  };

  useEffect(() => {
    const fileName = `${new Date().getTime()}.jpeg`;
    if (photo) {
      // console.log(photo);
      const req = async () => {
        const base64 = await base64FromPath(photo);
        const newPhotos = [{
          filepath: fileName,
          webviewPath: photo.webPath,
          data: base64.replace(/text[/]html/g, 'image/jpeg'),
        }, ...photos];
        setPhotos(newPhotos);
      };
      req();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ablePhoto]);

  const date = () => {
    const a = new Date();
    const DATE = `${a.getDate()}.${a.getMonth() + 1}.${a.getFullYear()} `;
    return DATE;
  };

  const postData = async () => {
    setLoading(true);
    const formData = new FormData();

    // eslint-disable-next-line no-plusplus
    // for (let i = 0; i < photos.length; i++) {
    //   formData.append('imgs', photos[i].data);
    // }

    const a = await base64FromPath(photos[0].webPath);
    formData.append('imgs', a);
    // console.log(a);

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
        console.log(data);
        setDescription('');
        setTitle('');
        setPrice(0);
      });
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
    takePhoto,
    photos,
    postData,
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
