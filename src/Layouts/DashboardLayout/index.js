import React, { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AppContext } from '../../App/Context/Index';
import { AUTHORIZATION_PAGE, PERSON_PAGE, CHECKOUT_PAGE } from '../../constants/routes';

import PersonPage from '../../Pages/PersonPage';
import CheckoutPage from '../../Pages/CheckoutPage';
import PrivateRoute from '../../Components/PrivateRoute';

const DashboardLayout = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  if (!user) {
    return <Redirect to={AUTHORIZATION_PAGE} />;
  }
  return (
    <Switch>
      <PrivateRoute path={PERSON_PAGE}>
        <PersonPage />
      </PrivateRoute>
      <PrivateRoute path={CHECKOUT_PAGE}>
        <CheckoutPage />
      </PrivateRoute>
    </Switch>
  );
};

export default DashboardLayout;
