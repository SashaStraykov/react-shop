import React, { useContext } from "react";
import AdminPage from "../../Pages/AdminPage";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../../App/Context/Index";
import { RoutesPath } from "../../RoutesPath";

const PrivateLayoutAdminPage = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;

  if (user && user.role === "admin") {
    return (
      <Route path={`${RoutesPath.personPage}${RoutesPath.adminPage}`}>
        <AdminPage />
      </Route>
    );
  }
  return <Redirect to={RoutesPath.authorizationPage} />;
};

export default PrivateLayoutAdminPage;
