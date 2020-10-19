import React from 'react';
// import PropTypes from 'prop-types';
import {
  BackGroundGrey, Container, H2, IMG,
} from './Styled';
import errorIMG from '../../assets/images/error.png';

const ErrorModal = ({ title }) => (
  <BackGroundGrey>
    <Container>
      <H2>{title || "Sorry, but server doesn't response"}</H2>
      <IMG src={errorIMG} />
    </Container>
  </BackGroundGrey>
);

// ErrorModal.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default ErrorModal;
