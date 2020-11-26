import React from 'react';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonMenuToggle, IonIcon,
} from '@ionic/react';
import { menu, chevronBack } from 'ionicons/icons';
import PropTypes from 'prop-types';
import Logo from '../../assets/dataArtLogo.png';
import './header.css';

const Header = ({ linkTo }) => (
  <IonHeader>
    <IonToolbar className="header">
      <IonButtons slot="start" className="backButton">
        <IonBackButton text="" icon={chevronBack} color="secondary" defaultHref={linkTo} />
      </IonButtons>
      <IonButtons slot="end">
        <IonMenuToggle>
          <IonButton>
            <IonIcon color="secondary" slot="icon-only" icon={menu} />
          </IonButton>
        </IonMenuToggle>
      </IonButtons>
      <IonTitle>
        <div className="logo">
          <img src={Logo} alt={Logo} />
        </div>
      </IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;

Header.propTypes = {
  linkTo: PropTypes.string.isRequired,
};
