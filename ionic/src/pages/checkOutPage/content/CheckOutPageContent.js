import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../../../layouts/header';
import { HOME_PAGE } from '../../../constants';
import './CheckOutPageContent.css';

const CheckOutPageContent = () => (
  <IonPage>
    <Header linkTo={HOME_PAGE} />
    <IonContent>
      <div className="checkOutTitle">Checkout Products</div>
    </IonContent>
  </IonPage>
);

export default CheckOutPageContent;
