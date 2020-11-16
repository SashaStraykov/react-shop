import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ModalForm from './ModalForm/ModalForm';
import { BackGroundGrey } from './styled';
import { AppContext } from '../../../App/context';
import { INFO_PAGE, PERSON_PAGE } from '../../../constants/routes';
import Toast from '../../../Components/Toast';


function AuthorizationPageContent() {
  const { contextData } = useContext(AppContext);
  const { user, errorMessage } = contextData;    

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
