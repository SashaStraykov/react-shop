import React from 'react';
import AuthenticationPageContent from './content/AuthenticationPageContent';
import { AuthenticationPageContextProvider } from './context';

const AuthenticationPage = () => (
  <AuthenticationPageContextProvider>
    <AuthenticationPageContent />
  </AuthenticationPageContextProvider>
);

export default AuthenticationPage;
