import React, { useContext } from "react";
import CheckoutPage from "../../Pages/CheckoutPage";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../../App/Context/Index";
import { AUTHORIZATION_PAGE } from "../../constants/routes";
import { CHECKOUT_PAGE } from "../../constants/routes";

const PrivateLayoutCheckoutPage = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  if (!user) {
    return <Redirect to={AUTHORIZATION_PAGE} />;
  }
  return (
    <Route path={CHECKOUT_PAGE}>
      <CheckoutPage />
    </Route>
  );
};

export default PrivateLayoutCheckoutPage;
