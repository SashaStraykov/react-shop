import React from "react";
import Header from "../../Header/Header";
import MainPage from "../../Pages/MainPage";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
import PersonPage from "../../Pages/PersonPage/PersonPage";

import AuthorizationPage from "../../Pages/AuthorizationPage/AuthorizationPage";
import { Switch, Route } from "react-router-dom";

import { ItemPageContextProvider } from "../../Pages/ItemPage/Context/Index";
import LolPage from "../../Pages/LolPage";
import ProductsLayout from "../ProductsLayout/ProductsLayout";

function PublickLayout() {
  const routes = {
    MainPage: "/",
    PerspnPage: "/person-page",
  };
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/Person-Page">
          <PersonPage />
        </Route>
        <Route path="/Checkout-Page">
          <CheckoutPage />
        </Route>
        <ProductsLayout />
        <Route path="/Authorization-Page">
          <AuthorizationPage />
        </Route>
        <Route path="/lol">
          <LolPage />
        </Route>
      </Switch>
    </>
  );
}

export default PublickLayout;
