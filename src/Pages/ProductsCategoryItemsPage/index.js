import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsCategoryItemsPageContent from './content/ProductsCategoryItemsPageContent';
import { ProductsCategoryItemsPageContextProvider } from './Context/Index';

const ProductsCategoryItemsPage = () => {
  const { category } = useParams();
  return (
    <>
      <ProductsCategoryItemsPageContextProvider category={category}>
        <ProductsCategoryItemsPageContent />
      </ProductsCategoryItemsPageContextProvider>
    </>
  );
};
export default ProductsCategoryItemsPage;
