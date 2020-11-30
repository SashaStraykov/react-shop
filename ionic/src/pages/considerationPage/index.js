import React from 'react';
import ConsiderationPageContent from './content/ConsiderationPageContent';
import { ConsiderationPageContextProvider } from './context';

const ConsiderationPage = () => (
  <ConsiderationPageContextProvider>
    <ConsiderationPageContent />
  </ConsiderationPageContextProvider>
);

export default ConsiderationPage;
