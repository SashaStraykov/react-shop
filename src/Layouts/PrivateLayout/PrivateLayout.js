import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PersonPage from "../../Pages/PersonPage";
import { AppContext } from "../../App/Context/Index";
import { RoutesPath } from "../../RoutesPath";

const PrivateLayout = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  if (!user) {
    return <Redirect to={RoutesPath.authorizationPage} />;
  }
  return (
    <Route path={RoutesPath.personPage}>
      <PersonPage />
    </Route>
  );
};

export default PrivateLayout;
