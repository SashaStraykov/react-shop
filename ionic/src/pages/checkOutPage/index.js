import React from 'react';
import CheckOutPageContent from './content/CheckOutPageContent';
import { CheckOutPageContextProvider } from './context';

const CheckOutPage = () => (
  <CheckOutPageContextProvider>
    <CheckOutPageContent />
  </CheckOutPageContextProvider>
);

export default CheckOutPage;
