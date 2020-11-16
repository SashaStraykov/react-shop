import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import PublicLayout from './PublicLayout/PublicLayout';
import DashboardLayout from './DashboardLayout';
import { PERSON_PAGE, HOME_PAGE } from '../constants/routes';
import { Wrapper } from './styled';
import Footer from './Footer';

const Layouts = () => (
  <>
    <Header />
    <Wrapper>
      <Route path={HOME_PAGE}>
        <PublicLayout />
      </Route>
      <Route path={PERSON_PAGE}>
        <DashboardLayout />
      </Route>
    </Wrapper>
    <Footer />
  </>
);

export default Layouts;
