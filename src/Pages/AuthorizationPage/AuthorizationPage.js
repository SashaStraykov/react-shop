import React from "react";
import fire from "../../Components/BackGroundVideoComponent/fire.mp4";
import BackGroundVideoComponent from "../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import Container from "../../Components/Container/Container";
import ModalForm from "../../Components/ModalForm/ModalForm";

function AuthorizationPage() {
  return (
    <BackGroundVideoComponent video={fire}>
      <Container white>
        <h1>Authorization PAge</h1>
        <ModalForm />
      </Container>
    </BackGroundVideoComponent>
  );
}

export default AuthorizationPage;
