import React from "react";
import BackGroundVideoMainPage from "../../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import ButtonCustom from "../../../Components/ButtonCustom/ButtonCustom";
import night from "../../../Components/BackGroundVideoComponent/night.mp4";
import { Link } from "react-router-dom";
import { H1, H2, ButtonContainer, Container } from "./Styled";
import { RoutesPath } from "../../../RoutesPath";

function MainPageContent() {
  return (
    <BackGroundVideoMainPage video={night}>
      <Container>
        <H1>DataArt typ's shop</H1>
        <H2>What do you want?</H2>
        <ButtonContainer>
          <Link to={RoutesPath.personPage}>
            <ButtonCustom>SELL</ButtonCustom>
          </Link>
          <Link to={RoutesPath.productsCategoryPage}>
            <ButtonCustom>BUY</ButtonCustom>
          </Link>
        </ButtonContainer>
      </Container>
    </BackGroundVideoMainPage>
  );
}

export default MainPageContent;
