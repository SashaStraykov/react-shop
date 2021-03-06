import React from 'react';
import './ProductComponent.css';
import PropTypes from 'prop-types';
import { logoUsd } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import dataArtPhoto from '../../assets/dataArtPhoto.png';

const ProductComponent = ({ title, img, price }) => (
  <div className="productComponentBox">
    <img className="productComponentImg" src={img.length > 0 ? `${process.env.REACT_APP_API_SERVER_PORT}${img[0]}` : dataArtPhoto} alt={img.length > 0 ? img[0] : 'new item'} />
    <div className="productComponentFlexBox">
      <div className="productComponentTitle">{title.toUpperCase()}</div>
      <div className="productComponentPrice ">
        <IonIcon icon={logoUsd} />
        {' '}
        {price}
      </div>
    </div>

  </div>
);

ProductComponent.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,

};

export default ProductComponent;
