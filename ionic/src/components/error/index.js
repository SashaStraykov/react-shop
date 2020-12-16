import React from 'react';
import Wrapper from '../wrapper';
import { HOME_PAGE } from '../../constants';
import './Error.css';
import Errormsg from '../../assets/error.webp';

const ErrorPage = () => (
  <Wrapper link={HOME_PAGE}>
    <img className="errorImg" src={Errormsg} alt="error" />
    <div className="errorTitle">Sorry, server does not response</div>
  </Wrapper>
);

export default ErrorPage;
