import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../../Pages/MainPage';
import AuthorizationPage from '../../Pages/AuthorizationPage';
import ProductsLayout from '../ProductsLayout/ProductsLayout';
import { HOME_PAGE, PRODUCTS_CATEGORY_PAGE, AUTHORIZATION_PAGE } from '../../constants/routes';

function PublicLayout() {
  return (
    <>
      <Switch>
        <Route path={HOME_PAGE} exact>
          <MainPage />
        </Route>
        <Route path={PRODUCTS_CATEGORY_PAGE}>
          <ProductsLayout />
        </Route>
        <Route path={AUTHORIZATION_PAGE}>
          <AuthorizationPage />
        </Route>
      </Switch>
    </>
  );
}

export default PublicLayout;
