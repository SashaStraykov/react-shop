import React, { useContext } from "react";
import AdminPage from "../../Pages/AdminPage";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../../App/Context/Index";
import { PERSON_PAGE } from "../../constants/routes";
import { AUTHORIZATION_PAGE } from "../../constants/routes";
import { ADMIN_PAGE } from "../../constants/routes";

const PrivateLayoutAdminPage = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  if (user && user.role === "admin") {
    return (
      <Route path={`${PERSON_PAGE}${ADMIN_PAGE}`}>
        <AdminPage />
      </Route>
    );
  }
  return <Redirect to={AUTHORIZATION_PAGE} />;
};

export default PrivateLayoutAdminPage;
