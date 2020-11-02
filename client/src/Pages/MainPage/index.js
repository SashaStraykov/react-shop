import React from 'react';
import { Route } from 'react-router-dom';
import MainPageContent from './content/MainPageContent';
import { MainPageContextProvider } from './context';
import { HOME_PAGE } from '../../constants/routes';

const MainPage = () => (
  <Route exact path={HOME_PAGE}>
    <MainPageContextProvider>
      <MainPageContent />
    </MainPageContextProvider>
  </Route>
);

export default MainPage;
