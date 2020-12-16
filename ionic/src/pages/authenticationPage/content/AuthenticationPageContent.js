import React, { useContext } from 'react';
import {
  IonSegment, IonLabel, IonSegmentButton, IonToast,
} from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { AuthenticationPageContext } from '../context';
import SignIn from './signInForm';
import SignUp from './signUpForm';
import { HOME_PAGE, PERSON_PAGE } from '../../../constants';
import './AuthenticationPageContent.css';
import { AppContext } from '../../../app/context';
import Wrapper from '../../../components/wrapper';
import ErrorPage from '../../../components/error';

const AuthenticationPageContent = () => {
  const { authenticationPageContextData } = useContext(AuthenticationPageContext);
  const {
    authentification, setAuthentification, showToast, setShowToast, errorMessage,
    error,
  } = authenticationPageContextData;
  const { appContextData } = useContext(AppContext);
  const { user } = appContextData;
  if (user) {
    return <Redirect to={PERSON_PAGE} />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <Wrapper link={HOME_PAGE}>
      <IonSegment
        value={authentification}
        className="authenticationSegment"
        onIonChange={(e) => setAuthentification(e.detail.value)}
      >
        <IonSegmentButton value="SignIn" className="authenticationSegmentButton">
          <IonLabel className="authenticationSegmentLabel">Sign In</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="SignUp" className="authenticationSegmentButton">
          <IonLabel className="authenticationSegmentLabel">Sign Up</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <div className="authentificationSignBox">
        {authentification === 'SignIn' ? <SignIn /> : <SignUp />}
      </div>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={errorMessage}
        duration={2000}
        color="secondary"
        position="bottom"
      />
    </Wrapper>
  );
};

export default AuthenticationPageContent;
