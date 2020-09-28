import React from "react";
import Header from "../../Header/Header";
import MainPage from "../../Pages/MainPage/MainPage";
import CheckoutPage from "../../Pages/CheckoutPage/CheckoutPage";
import PersonPage from "../../Pages/PersonPage/PersonPage";
import ProductsCategoryPage from "../../Pages/ProductsCategoryPage/ProductsCategoryPage";
import ProductsCategoryItemsPage from "../../Pages/ProductsCategoryItemsPage/ProductsCategoryItemsPage";
import ItemPage from "../../Pages/ItemPage/ItemPage";
import AuthorizationPage from "../../Pages/AuthorizationPage/AuthorizationPage";
import { Switch, Route } from "react-router-dom";

function PublickLayout() {
  return (
    <div>
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
        <Route path="/Products-Category-Page" exact>
          <ProductsCategoryPage />
        </Route>
        <Route
          path="/Products-Category-Page/:category/:itemid"
          render={({ match }) => {
            const { itemid } = match.params;
            return <ItemPage itemid={itemid} />;
          }}
        ></Route>
        <Route
          path="/Products-Category-Page/:category"
          render={({ match }) => {
            const { category } = match.params;
            return <ProductsCategoryItemsPage category={category} />;
          }}
        ></Route>
        <Route path="/Authorization-Page">
          <AuthorizationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PublickLayout;
