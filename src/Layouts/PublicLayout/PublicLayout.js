import React from "react";
import Header from "../Header/Header";
import MainPage from "../../Pages/MainPage";
import AuthorizationPage from "../../Pages/AuthorizationPage";
import { Switch, Route } from "react-router-dom";
import PrivateLayout from "../PrivateLayout/PrivateLayout";
import ProductsLayout from "../ProductsLayout/ProductsLayout";
import PrivateLayoutCheckoutPage from "../PrivateLayoutCheckoutPage/PrivateLayoutCheckoutPage";
import { HOME_PAGE } from "../../constants/routes";
import { PERSON_PAGE } from "../../constants/routes";
import { CHECKOUT_PAGE } from "../../constants/routes";
import { PRODUCTS_CATEGORY_PAGE } from "../../constants/routes";
import { AUTHORIZATION_PAGE } from "../../constants/routes";

function PublicLayout() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={HOME_PAGE} exact>
          <MainPage />
        </Route>
        <Route path={PERSON_PAGE}>
          <PrivateLayout />
        </Route>
        <Route path={CHECKOUT_PAGE}>
          <PrivateLayoutCheckoutPage />
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
