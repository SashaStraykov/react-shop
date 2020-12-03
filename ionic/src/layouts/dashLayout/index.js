import React from 'react';
import { Switch } from 'react-router';
import { PERSON_PAGE, CHECKOUT_PAGE, ADMIN_PAGE } from '../../constants';
import PrivateRoute from '../../components/privateRoute';
import PersonPage from '../../pages/personPage';
import CheckOutPage from '../../pages/checkOutPage';
import PrivateRouteAdmin from '../../components/privateRouteAdmin';
import AdminPage from '../../pages/adminPage';

const DashLayOut = () => (
  <>
    <Switch>
      <PrivateRoute path={PERSON_PAGE}>
        <PersonPage />
      </PrivateRoute>
      <PrivateRoute path={CHECKOUT_PAGE}>
        <CheckOutPage />
      </PrivateRoute>
      <PrivateRouteAdmin path={ADMIN_PAGE}>
        <AdminPage />
      </PrivateRouteAdmin>
    </Switch>

  </>
);

export default DashLayOut;
