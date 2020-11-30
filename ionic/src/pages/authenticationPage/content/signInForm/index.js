import React, { useContext } from 'react';
import {
  IonItem, IonLabel, IonInput, IonToggle, IonButton, IonSpinner,
} from '@ionic/react';
import { AuthenticationPageContext } from '../../context';
import './signInForm.css';

const SignIn = () => {
  const { authenticationPageContextData } = useContext(AuthenticationPageContext);
  const {
    signInPassword,
    setSignInPassword,
    signInLogin,
    setSignInLogin,
    signInCheckBox,
    setSignInCheckBox,
    authorization,
    loading,
  } = authenticationPageContextData;
  if (loading) {
    return <IonSpinner className="ionSpinner" />;
  }
  return (
    <form>
      <IonItem className="signInItem">
        <IonLabel position="floating">Login...</IonLabel>
        <IonInput value={signInLogin} onIonChange={(e) => setSignInLogin(e.detail.value)} />
      </IonItem>
      <IonItem className="signInToggle">
        <IonLabel position="floating">Password...</IonLabel>
        <IonInput type={signInCheckBox ? 'password' : 'text'} value={signInPassword} onIonChange={(e) => setSignInPassword(e.detail.value)} />
        <IonToggle color="secondary" slot="end" checked={signInCheckBox} onIonChange={() => setSignInCheckBox(!signInCheckBox)} />
      </IonItem>
      <IonButton onIonFocus={authorization} className="signInButton" color="secondary" expand="block" fill="outline">Submit</IonButton>
    </form>
  );
};

export default SignIn;
