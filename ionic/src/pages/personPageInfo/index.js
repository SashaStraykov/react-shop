import React from 'react';
import PersonPageInfoContent from './content/PersonPageInfoContent';
import { InfoPageContextProvider } from './context';

const InfoPage = () => (
  <InfoPageContextProvider>
    <PersonPageInfoContent />
  </InfoPageContextProvider>
);

export default InfoPage;
