import React, { useContext } from "react";
import CheckoutPage from "../../Pages/CheckoutPage";
import { Route, Redirect } from "react-router-dom";
import { RoutesPath } from "../../RoutesPath";
import { AppContext } from "../../App/Context/Index";

const PrivateLayoutCheckoutPage = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  if (!user) {
    return <Redirect to={RoutesPath.authorizationPage} />;
  }
  return (
    <Route path={RoutesPath.CheckoutPage}>
      <CheckoutPage />
    </Route>
  );
};

export default PrivateLayoutCheckoutPage;
