import React from 'react';
import AddProductPageContent from './content/AddProductPageContent';
import { AddProductPageContextProvider } from './context';

const AddProductPage = () => (
  <AddProductPageContextProvider>
    <AddProductPageContent />
  </AddProductPageContextProvider>
);

export default AddProductPage;
