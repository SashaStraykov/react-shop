import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import PropTypes from 'prop-types';
import dataArtPhoto from '../../assets/dataArtPhoto.png';
import './slider.css';

const Slider = ({ img }) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  return (
    <IonSlides pager options={slideOpts}>
      {img.map((el) => (
        <IonSlide key={el}>
          <img src={img.length > 0 ? `${process.env.REACT_APP_API_SERVER_PORT}${el}` : dataArtPhoto} className="sliderImg" alt={img.length > 0 ? img[0] : 'new item'} />
        </IonSlide>
      ))}
    </IonSlides>
  );
};

Slider.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Slider;
