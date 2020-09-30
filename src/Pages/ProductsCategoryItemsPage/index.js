import React from "react";
import ProductsCategoryItemsPageContent from "./content/ProductsCategoryItemsPageContent";
import { ProductsCategoryItemsPageContextProvider } from "./Context/Index";
import { Route, Switch } from "react-router-dom";

const ProductsCategoryItemsPage = ({ category }) => {
  return (
    <>
      <ProductsCategoryItemsPageContextProvider category={category}>
        <ProductsCategoryItemsPageContent />
      </ProductsCategoryItemsPageContextProvider>
    </>
  );
};
export default ProductsCategoryItemsPage;
