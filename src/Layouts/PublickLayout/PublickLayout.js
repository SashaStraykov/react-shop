import React from "react";
import Header from "../../Header/Header";
import MainPage from "../../Pages/MainPage";
import AuthorizationPage from "../../Pages/AuthorizationPage";
import { Switch, Route } from "react-router-dom";

import PrivateLayout from "../PrivateLayout/PrivateLayout";
import ProductsLayout from "../ProductsLayout/ProductsLayout";
import { RoutesPath } from "../../RoutesPath";
import PrivateLayoutCheckoutPage from "../PrivateLayoutCheckoutPage/PrivateLayoutCheckoutPage";
import PrivateLayoutAdminPage from "../PrivateLayoutAdminPage";

import AdminHeader from "../../Components/AdminHeader";

function PublickLayout() {
  return (
    <>
      <Header />

      <Switch>
        <Route path={RoutesPath.adminPage}>
          <PrivateLayoutAdminPage />
        </Route>
        <Route path={RoutesPath.mainPage} exact>
          <MainPage />
        </Route>
        <Route path={RoutesPath.personPage}>
          <PrivateLayout />
        </Route>
        <Route path={RoutesPath.checkoutPage}>
          <PrivateLayoutCheckoutPage />
        </Route>
        <Route path={RoutesPath.productsCategoryPage}>
          <ProductsLayout />
        </Route>
        <Route path={RoutesPath.authorizationPage}>
          <AuthorizationPage />
        </Route>
      </Switch>
      <AdminHeader />
    </>
  );
}

export default PublickLayout;
