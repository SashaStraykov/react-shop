import React from 'react';
import ProductsCategoryPageContent from './content/ProductsCategoryPageContent';
import { ProductsCategoryPageContextProvider } from './context';

const ProductsCategoryPage = () => (
  <>
    <ProductsCategoryPageContextProvider>
      <ProductsCategoryPageContent />
      ;
    </ProductsCategoryPageContextProvider>
  </>
);

export default ProductsCategoryPage;
