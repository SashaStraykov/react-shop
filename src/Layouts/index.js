import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import PublicLayout from './PublicLayout/PublicLayout';
import DashboardLayout from './DashboardLayout';
import { PERSON_PAGE, HOME_PAGE } from '../constants/routes';

const Layouts = () => (
  <>
    <Header />
    <Route path={HOME_PAGE}>
      <PublicLayout />
    </Route>
    <Route path={PERSON_PAGE}>
      <DashboardLayout />
    </Route>
  </>
);

export default Layouts;
