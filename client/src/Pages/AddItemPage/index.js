import React from 'react';
import AddItemPageContent from './content/AddItemPageContent';
import { AddItemPageContextProvider } from './context';

const AddItemPage = () => (
  <AddItemPageContextProvider>
    <AddItemPageContent />
  </AddItemPageContextProvider>
);

export default AddItemPage;
