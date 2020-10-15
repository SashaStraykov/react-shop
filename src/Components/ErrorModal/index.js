import React from 'react';
import PropTypes from 'prop-types';
import { BackGroundGrey, Container, H2 } from './Styled';

const ErrorModal = ({ title }) => (
  <BackGroundGrey>
    <Container>
      <H2>{title || "Sorry, but server doesn't response"}</H2>
    </Container>
  </BackGroundGrey>
);

ErrorModal.propTypes = {

  title: PropTypes.string.isRequired,

};

export default ErrorModal;
