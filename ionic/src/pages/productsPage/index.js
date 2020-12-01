import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsPageContent from './content/ProductsPageContent';
import { ProductsPageContextProvider } from './context';

const ItemPage = () => {
  const { category } = useParams();
  return (
    <ProductsPageContextProvider category={category}>
      <ProductsPageContent />
    </ProductsPageContextProvider>
  );
};

export default ItemPage;
