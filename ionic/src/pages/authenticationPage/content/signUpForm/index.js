import React, { useContext } from 'react';
import {
  IonItem, IonLabel, IonInput, IonToggle, IonButton,
} from '@ionic/react';
import { AuthenticationPageContext } from '../../context';
import './signUpForm.css';
import Spinner from '../../../../components/spinner';

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
    return <Spinner />;
  }
  return (
    <form>
      <IonItem className="signUp">
        <IonLabel className="signInLabel" position="floating">Email...</IonLabel>
        <IonInput className="signUpInput" inputmode="email" value={signUpEmail} onIonChange={(e) => setSignUpEmail(e.target.value)} />
      </IonItem>
      <IonItem className="signUp">
        <IonLabel className="signInLabel" position="floating">Login...</IonLabel>
        <IonInput className="signUpInput" value={signUpLogin} onIonChange={(e) => setSignUpLogin(e.target.value)} />
      </IonItem>
      <IonItem className="signInToggle">
        <IonLabel className="signInLabel" position="floating">Password...</IonLabel>
        <IonInput className="signUpInput" type={signUpCheckBox ? 'password' : 'text'} value={signUpPassword} onIonChange={(e) => setSignUpPassword(e.target.value)} />
        <IonToggle color="secondary" slot="end" checked={signUpCheckBox} onIonChange={() => setSignUpCheckBox(!signUpCheckBox)} />
      </IonItem>
      <IonItem className="signInToggle">
        <IonLabel className="signInLabel" position="floating">Repeat Password...</IonLabel>
        <IonInput className="signUpInput" type={signUpCheckBoxCheck ? 'password' : 'text'} value={signUpPasswordCheck} onIonChange={(e) => setSignUpPasswordCheck(e.target.value)} />
        <IonToggle color="secondary" slot="end" checked={signUpCheckBoxCheck} onIonChange={() => setSignUpCheckBoxCheck(!signUpCheckBoxCheck)} />
      </IonItem>
      <IonButton onClick={registration} className="signUpButton" color="secondary" expand="block" fill="outline">Submit</IonButton>
    </form>
  );
};

export default SignUp;
