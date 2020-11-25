import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import dataArtPhoto from '../../assets/dataArtPhoto.png';
import PropTypes from 'prop-types';
import './slider.css';

const Slider = ({img}) => {
    const slideOpts = {
        initialSlide: 1,
        speed: 400
      };
    return (
        <IonSlides  pager={true} options={slideOpts}>
        {img.map(el=> {
            return (
                <IonSlide key={el}>
                    <img src={img.length> 0 ?`${process.env.REACT_APP_API_SERVER_PORT}${el}`: dataArtPhoto} className="sliderImg"/>
                </IonSlide>
                )
        })}
    </IonSlides>
    )
}

Slider.propTypes = {
    img: PropTypes.arrayOf(
      PropTypes.string,
    ).isRequired,
  };

export default Slider
