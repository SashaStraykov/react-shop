import React, { useContext } from 'react';
import {
  Logs, SignUpBox, ErrorSignUp, ButtonSignUp, InputC,
} from './Styled';
import { AuthorizationPageContext } from '../../context';

const SignUp = () => {
  const { authorizationContextData } = useContext(AuthorizationPageContext);
  const {
    loginSignUp,
    setLoginSignUp,
    passwordSignUp,
    setPasswordSignUp,
    emailSignUp,
    setEmailSignUp,
    postData,
  } = authorizationContextData;
  return (
    <SignUpBox>
      <form onSubmit={postData}>
        <Logs>Email or phone number</Logs>
        <InputC
          value={emailSignUp}
          onChange={(e) => setEmailSignUp(e.target.value)}
        />
        <ErrorSignUp>*error</ErrorSignUp>
        <Logs>Your login</Logs>
        <InputC
          value={loginSignUp}
          onChange={(e) => setLoginSignUp(e.target.value)}
        />
        <ErrorSignUp>*error</ErrorSignUp>
        <Logs> your password</Logs>
        <InputC
          value={passwordSignUp}
          onChange={(e) => setPasswordSignUp(e.target.value)}
        />
        <ErrorSignUp>*error</ErrorSignUp>
        <ButtonSignUp> Sign up</ButtonSignUp>
      </form>
    </SignUpBox>
  );
};

export default SignUp;
