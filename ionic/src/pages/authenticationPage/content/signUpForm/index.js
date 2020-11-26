import React, { useContext } from 'react';
import {
  IonItem, IonLabel, IonInput, IonToggle, IonButton, IonSpinner,
} from '@ionic/react';
import { AuthenticationPageContext } from '../../context';
import './signUpForm.css';

const SignUp = () => {
  const { authenticationPageContextData } = useContext(AuthenticationPageContext);
  const {
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpLogin,
    setSignUpLogin,
    signUpCheckBox,
    setSignUpCheckBox,
    signUpPasswordCheck,
    setSignUpPasswordCheck,
    signUpCheckBoxCheck,
    setSignUpCheckBoxCheck,
    registration,
    loading,
  } = authenticationPageContextData;
  if (loading) {
    return <IonSpinner className="ionSpinner" />;
  }
  return (
    <form>
      <IonItem className="signUp">
        <IonLabel position="floating">Email...</IonLabel>
        <IonInput inputmode="email" value={signUpEmail} onIonChange={(e) => setSignUpEmail(e.target.value)} />
      </IonItem>
      <IonItem className="signUp">
        <IonLabel position="floating">Login...</IonLabel>
        <IonInput value={signUpLogin} onIonChange={(e) => setSignUpLogin(e.target.value)} />
      </IonItem>
      <IonItem className="signInToggle">
        <IonLabel position="floating">Password...</IonLabel>
        <IonInput type={signUpCheckBox ? 'password' : 'text'} value={signUpPassword} onIonChange={(e) => setSignUpPassword(e.target.value)} />
        <IonToggle color="secondary" slot="end" checked={signUpCheckBox} onIonChange={() => setSignUpCheckBox(!signUpCheckBox)} />
      </IonItem>
      <IonItem className="signInToggle">
        <IonLabel position="floating">Repeat Password...</IonLabel>
        <IonInput type={signUpCheckBoxCheck ? 'password' : 'text'} value={signUpPasswordCheck} onIonChange={(e) => setSignUpPasswordCheck(e.target.value)} />
        <IonToggle color="secondary" slot="end" checked={signUpCheckBoxCheck} onIonChange={() => setSignUpCheckBoxCheck(!signUpCheckBoxCheck)} />
      </IonItem>
      <IonButton onIonFocus={registration} className="signUpButton" color="secondary" expand="block" fill="outline">Submit</IonButton>
    </form>
  );
};

export default SignUp;
