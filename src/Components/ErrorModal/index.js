import React from "react";
import { BackGroundGrey, Container, H2 } from "./Styled";

const ErrorModal = () => {
  return (
    <BackGroundGrey>
      <Container>
        <H2>Sorry, but server doesn't response</H2>
      </Container>
    </BackGroundGrey>
  );
};

export default ErrorModal;
