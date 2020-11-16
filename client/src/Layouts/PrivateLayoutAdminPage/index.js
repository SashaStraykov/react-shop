import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AdminPage from '../../Pages/AdminPage';
import { AppContext } from '../../App/context';
import { PERSON_PAGE, AUTHORIZATION_PAGE, ADMIN_PAGE } from '../../constants/routes';

import PrivateRoute from '../../Components/PrivateRoute';

const PrivateLayoutAdminPage = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  if (user && user.role === 'admin') {
    return (
      <PrivateRoute path={`${PERSON_PAGE}${ADMIN_PAGE}`}>
        <AdminPage />
      </PrivateRoute>
    );
  }
  return <Redirect to={AUTHORIZATION_PAGE} />;
};

export default PrivateLayoutAdminPage;
