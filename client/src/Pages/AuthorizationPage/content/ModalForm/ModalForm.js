import React, { useState, useContext } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { ModalBox, ModalButtonBox, ModalButton, SignInBox, SignUpBox, TextArea,
} from './styled';
import ErrorModal from '../../../../Components/ErrorModal';
import { AuthorizationPageContext } from '../../context';
import Spinner from '../../../../Components/Spinner';

function ModalForm() {
  const { authorizationContextData } = useContext(AuthorizationPageContext);
  const { error, loading } = authorizationContextData;
  const [sign, setSign] = useState(true);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <ModalBox>
      <ModalButtonBox sign={sign} >
        <ModalButton  onClick={() => setSign(!sign)} sign={!sign}>
          {sign?'Sign up' : 'Sign in'}
        </ModalButton>
      </ModalButtonBox>
      <SignInBox sign={sign}>
        <TextArea>Sign in to Typ's Shop</TextArea>
        <SignIn />
      </SignInBox>
      <SignUpBox sign={sign}>
      <TextArea>Create Account</TextArea>
        <SignUp />
      </SignUpBox>

    </ModalBox>
  );
}

export default ModalForm;
