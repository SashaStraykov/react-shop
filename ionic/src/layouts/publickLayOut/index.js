import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import {
  HOME_PAGE, CATEGORIES_PAGE, AUTHENTIFICATION_PAGE,
} from '../../constants';
import HomePage from '../../pages/homePage';
import CategoriesPage from '../../pages/categoriesPage';
import ProductsPage from '../../pages/productsPage';
import ItemPage from '../../pages/itemPage';
import AuthenticationPage from '../../pages/authenticationPage';
// import DashLayOut from '../dashLayout';

const PublickLayOut = () => (
  <IonRouterOutlet>
    <Switch>
      <Route path={HOME_PAGE} exact>
        <HomePage />
      </Route>
      <Route path={`${CATEGORIES_PAGE}/:category`} exact>
        <ProductsPage />
      </Route>
      <Route path={`${CATEGORIES_PAGE}/:category/:id`} exact>
        <ItemPage />
      </Route>
      <Route path={CATEGORIES_PAGE} exact>
        <CategoriesPage />
      </Route>
      <Route path={AUTHENTIFICATION_PAGE} exact>
        <AuthenticationPage />
      </Route>
      <Redirect exact from="/" to={HOME_PAGE} />
    </Switch>

    {/* <DashLayOut /> */}
  </IonRouterOutlet>
);

export default PublickLayOut;
