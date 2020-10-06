import React from "react";
import CheckoutPageContent from "./content/CheckoutPageContent";
import { CheckoutPageContextProvider } from "./context";

const CheckoutPage = () => {
  return (
    <CheckoutPageContextProvider>
      <CheckoutPageContent />
    </CheckoutPageContextProvider>
  );
};

export default CheckoutPage;
