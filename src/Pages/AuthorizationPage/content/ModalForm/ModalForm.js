import React, { useState, useContext } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { ModalBox, ModalButtonBox, ModalButton } from './Styled';
import ErrorModal from '../../../../Components/ErrorModal';
import { AuthorizationPageContext } from '../../context';
import Spinner from '../../../../Components/Spinner/Spinner';

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
      <ModalButtonBox>
        <ModalButton sign={sign} onClick={() => setSign(true)}>
          Sign in
        </ModalButton>
        <ModalButton onClick={() => setSign(false)} sign={!sign}>
          Sign up
        </ModalButton>
      </ModalButtonBox>
      {sign ? <SignIn /> : <SignUp />}
    </ModalBox>
  );
}

export default ModalForm;
