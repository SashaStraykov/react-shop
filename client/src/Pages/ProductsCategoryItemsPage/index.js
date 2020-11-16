import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsCategoryItemsPageContent from './content/ProductsCategoryItemsPageContent';
import { ProductsCategoryItemsPageContextProvider } from './context';

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
