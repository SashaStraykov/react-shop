import React from 'react';
import {
  IonButton, IonIcon, IonTitle,
} from '@ionic/react';
import { logoUsd, cube } from 'ionicons/icons';
import { CATEGORIES_PAGE } from '../../../constants';
import './homePage.css';
import Wrapper from '../../../components/wrapper';

const HomePageContent = () => (
  <Wrapper header={false}>
    <IonTitle className="title" size="large">Typ&#39;s Shop</IonTitle>
    <div className="buttonContainer">
      <IonButton color="secondary" shape="round" fill="outline" size="large" className="buttonStyle">
        <IonIcon className="iconStyle" icon={logoUsd} />
      </IonButton>
      <IonButton color="secondary" routerLink={CATEGORIES_PAGE} shape="round" fill="outline" size="large" className="buttonStyle">
        <IonIcon className="iconStyle" icon={cube} />
      </IonButton>
    </div>
  </Wrapper>
);

export default HomePageContent;
