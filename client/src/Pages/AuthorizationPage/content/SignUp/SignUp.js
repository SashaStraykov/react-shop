import React, { useContext } from 'react';
import {
   SignUpBox, ButtonSignUp, InputC, Form
} from './styled';
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
      <Form onSubmit={postData}>
        <InputC
          value={emailSignUp}
          onChange={(e) => setEmailSignUp(e.target.value)}
          placeholder='Email...'
        />
        <InputC
          value={loginSignUp}
          onChange={(e) => setLoginSignUp(e.target.value)}
          placeholder='Login...'
        />
        <InputC
          value={passwordSignUp}
          onChange={(e) => setPasswordSignUp(e.target.value)}
          placeholder='Password...'
        />
        <ButtonSignUp onClick={() => postData}> Sign up</ButtonSignUp>
      </Form>
    </SignUpBox>
  );
};

export default SignUp;

