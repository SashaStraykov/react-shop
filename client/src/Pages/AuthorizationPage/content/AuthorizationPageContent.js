import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ModalForm from './ModalForm/ModalForm';
import { BackGroundGrey, H2 } from './styled';
import { AppContext } from '../../../App/Context/Index';
import { PERSON_PAGE } from '../../../constants/routes';

function AuthorizationPageContent() {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  if (user) {
    return <Redirect to={PERSON_PAGE} />;
  }

  return (
    <BackGroundGrey>
      <H2>Authorization Page</H2>

      <ModalForm />

    </BackGroundGrey>
  );
}

export default AuthorizationPageContent;
