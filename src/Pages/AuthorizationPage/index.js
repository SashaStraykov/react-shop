import React from "react";
import AuthorizationPageContent from "./content/AuthorizationPageContent";
import { AuthorizationPageProvider } from "./context";

const AuthorizationPage = () => {
  return (
    <AuthorizationPageProvider>
      <AuthorizationPageContent />
    </AuthorizationPageProvider>
  );
};

export default AuthorizationPage;
