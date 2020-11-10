import React from 'react';
import InfoPageContent from './content/infoPageContent';
import { InfoPageContextProvider } from './context';

const InfoPage = () => (
  <InfoPageContextProvider>
    <InfoPageContent />
  </InfoPageContextProvider>
);

export default InfoPage;
