import React, { useContext } from 'react';
import { IonSegment, IonLabel, IonSegmentButton, IonContent, IonPage, IonToast } from '@ionic/react';
import Header from '../../../layouts/header';
import BackGround from '../../../components/backGround';
import { Redirect } from 'react-router-dom';
import { AuthenticationPageContext } from '../context';
import SignIn from './signInForm';
import SignUp from './signUpForm';
import { HOME_PAGE } from '../../../constants';
import "./AuthenticationPageContent.css";
import { AppContext } from '../../../app/context';
import { PERSON_PAGE } from '../../../constants';

const AuthenticationPageContent = () => {
    const { authenticationPageContextData } = useContext(AuthenticationPageContext);
    const { authentification, setAuthentification, showToast, setShowToast, errorMessage } = authenticationPageContextData;
    const { appContextData } = useContext(AppContext);
    const { user } = appContextData;
    if(user) {
       return  <Redirect to={PERSON_PAGE}/>
    }

    return (
            <IonPage>
                <Header linkTo={HOME_PAGE}/>
                <IonContent>
                    <BackGround>
                        <IonSegment value={authentification} className="authenticationSegment" 
                        onIonChange={e =>  setAuthentification(e.detail.value)} 
                        
                        >
                        <IonSegmentButton value="SignIn" className="authenticationSegmentButton">
                                <IonLabel className="authenticationSegmentLabel">Sign In</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton  value="SignUp" className="authenticationSegmentButton">
                                <IonLabel className="authenticationSegmentLabel" >Sign Up</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <div className="authentificationSignBox">
                            {authentification==="SignIn" ? <SignIn/> : <SignUp/>}
                        </div>
                        <IonToast
                            isOpen={showToast}
                            onDidDismiss={() => setShowToast(false)}
                            message={errorMessage}
                            duration={2000}
                            color="secondary"
                            position="bottom"
                        />
                    </BackGround>
                </IonContent>
            </IonPage>


    )
}

export default AuthenticationPageContent
