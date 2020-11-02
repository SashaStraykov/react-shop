import React from 'react';
import { useParams } from 'react-router-dom';
import ItemPageContent from './content/ItemPageContent';
import { ItemPageContextProvider } from './Context';

const ItemPage = () => {
  const { itemid, category } = useParams();
  return (
    <ItemPageContextProvider category={category} itemid={itemid}>
      <ItemPageContent />
    </ItemPageContextProvider>
  );
};

export default ItemPage;
