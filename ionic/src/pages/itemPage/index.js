import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPageContent from './content/ItemPageContent';
import { ItemPageContextProvider } from './context';

const ItemPage = () => {
  const { category, id } = useParams();
  return (
    <ItemPageContextProvider category={category} itemId={id}>
      <ItemPageContent />
    </ItemPageContextProvider>
  );
};

export default ItemPage;
