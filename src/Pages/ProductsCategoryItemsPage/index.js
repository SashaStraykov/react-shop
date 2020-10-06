import React from "react";
import ProductsCategoryItemsPageContent from "./content/ProductsCategoryItemsPageContent";
import { ProductsCategoryItemsPageContextProvider } from "./Context/Index";
import { useParams } from "react-router-dom";

const ProductsCategoryItemsPage = () => {
  let { category } = useParams();
  return (
    <>
      <ProductsCategoryItemsPageContextProvider category={category}>
        <ProductsCategoryItemsPageContent />
      </ProductsCategoryItemsPageContextProvider>
    </>
  );
};
export default ProductsCategoryItemsPage;
