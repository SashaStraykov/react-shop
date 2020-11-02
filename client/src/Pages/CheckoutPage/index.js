import React from 'react';
import CheckoutPageContent from './content/CheckoutPageContent';
import { CheckoutPageContextProvider } from './context';

const CheckoutPage = () => (
  <CheckoutPageContextProvider>
    <CheckoutPageContent />
  </CheckoutPageContextProvider>
);

export default CheckoutPage;
