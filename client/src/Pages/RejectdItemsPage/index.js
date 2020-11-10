import React from 'react';
import RejectedItemsPageContent from './content/RejectedItemsPageContent';
import { RejectedItemsPageContextProvider } from './context';

const RejectedItemsPage = () => (
  <RejectedItemsPageContextProvider>
    <RejectedItemsPageContent/>
  </RejectedItemsPageContextProvider>
);

export default RejectedItemsPage;
