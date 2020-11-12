import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ModalForm from './ModalForm/ModalForm';
import { BackGroundGrey } from './styled';
import { AppContext } from '../../../App/Context/Index';
import { INFO_PAGE, PERSON_PAGE } from '../../../constants/routes';
import Toast from '../../../Components/Toast'
import {AuthorizationPageContext} from '../context'


function AuthorizationPageContent() {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  const {authorizationContextData} = useContext(AuthorizationPageContext);
  const {errorMessage} = authorizationContextData;

  if (user) {
    return <Redirect to={`${PERSON_PAGE}${INFO_PAGE}`} />;
  }

  return (
    <BackGroundGrey>
      {errorMessage && <Toast message={errorMessage}/>}
      <ModalForm />
    </BackGroundGrey>
  );
}

export default AuthorizationPageContent;
