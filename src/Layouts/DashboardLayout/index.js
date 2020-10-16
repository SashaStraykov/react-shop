import React from 'react';
import { Switch } from 'react-router-dom';

import { PERSON_PAGE, CHECKOUT_PAGE } from '../../constants/routes';

import PersonPage from '../../Pages/PersonPage';
import CheckoutPage from '../../Pages/CheckoutPage';
import PrivateRoute from '../../Components/PrivateRoute';

const DashboardLayout = () => (
  <Switch>
    <PrivateRoute path={PERSON_PAGE}>
      <PersonPage />
    </PrivateRoute>
    <PrivateRoute path={CHECKOUT_PAGE}>
      <CheckoutPage />
    </PrivateRoute>
  </Switch>
);

export default DashboardLayout;
