import React from 'react'
import { IonItem, IonInput , IonContent, IonList, IonLabel, IonPage } from '@ionic/react';
import Header from '../../../layouts/header';
import { HOME_PAGE } from '../../../constants';
import Tabs from '../../../components/tabs';
import './PersonPage.css';

const PersonPageContent = () => {
    return (
        <>
        <IonPage>
            <Header linkTo={HOME_PAGE}/>
            <h2>Person Page</h2>
            <IonContent >
                <IonList>
                    <IonItem>
                        <IonLabel>Default Label</IonLabel>
                        <IonInput   placeholder="placeholder"></IonInput>
                    </IonItem>
                </IonList>
                <Tabs/>
            </IonContent>
        </IonPage>
        <Tabs/>
        </>
    )
}

export default PersonPageContent
