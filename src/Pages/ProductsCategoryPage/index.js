import React from "react";
import ProductsCategoryPageContent from "./content/ProductsCategoryPageContent";
import { ProductsCategoryPageContextProvider } from "./context";

const ProductsCategoryPage = () => {
  return (
    <>
      <ProductsCategoryPageContextProvider>
        <ProductsCategoryPageContent />;
      </ProductsCategoryPageContextProvider>
    </>
  );
};

export default ProductsCategoryPage;
