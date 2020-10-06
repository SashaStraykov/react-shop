import React, { useContext } from "react";
import ModalForm from "../../../Components/ModalForm/ModalForm";
import { BackGroundGrey, Container, H2 } from "./Styled";
import { AppContext } from "../../../App/Context/Index";
import { Redirect } from "react-router-dom";
import { RoutesPath } from "../../../RoutesPath";

function AuthorizationPageContent() {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  if (user) {
    return <Redirect to={RoutesPath.personPage} />;
  }
  return (
    <BackGroundGrey>
      <Container white>
        <H2>Authorization Page</H2>
      </Container>
      <Container>
        <ModalForm />
      </Container>
    </BackGroundGrey>
  );
}

export default AuthorizationPageContent;
