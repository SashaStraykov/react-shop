import React from 'react';
import { IonButton, IonContent, IonIcon, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { CATEGORIES_PAGE } from '../../../constants';
import { logoUsd, cube } from 'ionicons/icons';
import BackGround from '../../../components/backGround';
import './homePage.css';

const HomePageContent = () => {
    return (
        <IonPage>
            <IonContent fullscreen={true} >
                <BackGround>
                    <IonTitle className="title" size="large">Typ's Shop</IonTitle>
                    <div className="buttonContainer">
                        <IonButton color="secondary" shape="round" fill="outline" size="large" className="buttonStyle">
                            <IonIcon className="iconStyle" icon={logoUsd}/>
                        </IonButton>
                        <IonButton  color="secondary" routerLink={CATEGORIES_PAGE}  shape="round" fill="outline" size="large" className="buttonStyle">
                            <IonIcon className="iconStyle" icon={cube}/>
                        </IonButton>
                    </div>
                </BackGround>

            </IonContent>
        </IonPage>
    )
}

export default HomePageContent
