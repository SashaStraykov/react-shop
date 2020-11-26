import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../../../layouts/header';
import { HOME_PAGE } from '../../../constants';
 
const CheckOutPageContent = () => {
    return (
        <IonPage>
            <Header linkTo={HOME_PAGE}/>
            <IonContent>
                <h1>Bucket</h1>
            </IonContent>
        </IonPage>
    )
}

export default CheckOutPageContent
