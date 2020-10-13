import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import PersonPage from "../../Pages/PersonPage";
import { AppContext } from "../../App/Context/Index";
import { AUTHORIZATION_PAGE } from "../../constants/routes";
import { PERSON_PAGE } from "../../constants/routes";

const PrivateLayout = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  if (!user) {
    return <Redirect to={AUTHORIZATION_PAGE} />;
  }
  return (
    <Route path={PERSON_PAGE}>
      <PersonPage />
    </Route>
  );
};

export default PrivateLayout;
