import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPageContent from './content/ItemPageContent';
import { ItemPageContextProvider } from './Context/Index';

const ItemPage = () => {
  const { itemid } = useParams();
  return (
    <ItemPageContextProvider itemid={itemid}>
      <ItemPageContent />
    </ItemPageContextProvider>
  );
};

export default ItemPage;
