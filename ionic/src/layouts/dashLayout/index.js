import React from 'react';
import { PERSON_PAGE, CHECKOUT_PAGE } from '../../constants';
import PrivateRoute from '../../components/privateRoute';
import PersonPage from '../../pages/personPage';
import CheckOutPage from '../../pages/checkOutPage';

const DashLayOut = () => (
  <>
    <PrivateRoute path={PERSON_PAGE}>
      <PersonPage />
    </PrivateRoute>
    <PrivateRoute path={CHECKOUT_PAGE}>
      <CheckOutPage />
    </PrivateRoute>

  </>
);

export default DashLayOut;
