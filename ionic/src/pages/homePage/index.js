import React from 'react';
import HomePageContent from './content/HomePageContent';
import { HomePageContextProvider } from './context';

const HomePage = () => (
  <HomePageContextProvider>
    <HomePageContent />
  </HomePageContextProvider>
);

export default HomePage;
