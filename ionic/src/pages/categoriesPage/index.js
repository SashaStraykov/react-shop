import React from 'react';
import CategoriesPageContent from './content/CategoriesPageContent';
import { CategoriesPageContextProvider } from './context';

const CategoriesPage = () => {
    return (
        <CategoriesPageContextProvider>
          <CategoriesPageContent />
        </CategoriesPageContextProvider>
  )};

export default  CategoriesPage;
