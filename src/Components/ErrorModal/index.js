import React from "react";
import { BackGroundGrey, Container, H2 } from "./Styled";

const ErrorModal = ({ props }) => {
  return (
    <BackGroundGrey>
      <Container>
        <H2>{props ? props.title : "Sorry, but server doesn't response"}</H2>
      </Container>
    </BackGroundGrey>
  );
};

export default ErrorModal;
