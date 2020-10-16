import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppContext } from '../../App/Context/Index';
import { AUTHORIZATION_PAGE } from '../../constants/routes';

const PrivateRoute = ({ children, ...route }) => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  return user
    ? (
      <Route {...route}>
        {children}
      </Route>
    )
    : <Redirect to={AUTHORIZATION_PAGE} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
