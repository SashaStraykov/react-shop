import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppContext } from '../../app/context';
import { AUTHENTIFICATION_PAGE } from '../../constants';

const PrivateRoute = ({ children, path }) => {
  const { appContextData } = useContext(AppContext);
  const { user } = appContextData;

  if (!user) return <Redirect from={path} to={AUTHENTIFICATION_PAGE} />;

  return (
    <Route path={path}>
      {children}
    </Route>

  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
