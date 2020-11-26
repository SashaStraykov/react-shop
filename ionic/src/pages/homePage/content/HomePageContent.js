import React from 'react';
import {
  IonButton, IonContent, IonIcon, IonPage, IonTitle,
} from '@ionic/react';
import { logoUsd, cube } from 'ionicons/icons';
import { CATEGORIES_PAGE } from '../../../constants';
import BackGround from '../../../components/backGround';
import './homePage.css';

const HomePageContent = () => (
  <IonPage>
    <IonContent fullscreen>
      <BackGround>
        <IonTitle className="title" size="large">Typ&#39;s Shop</IonTitle>
        <div className="buttonContainer">
          <IonButton color="secondary" shape="round" fill="outline" size="large" className="buttonStyle">
            <IonIcon className="iconStyle" icon={logoUsd} />
          </IonButton>
          <IonButton color="secondary" routerLink={CATEGORIES_PAGE} shape="round" fill="outline" size="large" className="buttonStyle">
            <IonIcon className="iconStyle" icon={cube} />
          </IonButton>
        </div>
      </BackGround>

    </IonContent>
  </IonPage>
);

export default HomePageContent;
