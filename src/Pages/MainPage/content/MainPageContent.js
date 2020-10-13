import React from "react";
import BackGroundVideoMainPage from "../../../Components/BackGroundVideoComponent/BackGroundVideoComponent";

import night from "../../../Components/BackGroundVideoComponent/night.mp4";
import { Link } from "react-router-dom";
import { H1, H2, ButtonContainer, Container, ButtonCustom } from "./Styled";
import { PERSON_PAGE } from "../../../constants/routes";
import { PRODUCTS_CATEGORY_PAGE } from "../../../constants/routes";
import { ADD_ANNOUNCMENT_PAGE } from "../../../constants/routes";

function MainPageContent() {
  return (
    <BackGroundVideoMainPage video={night}>
      <Container>
        <H1>DataArt typ's shop</H1>
        <H2>What do you want?</H2>
        <ButtonContainer>
          <Link to={`${PERSON_PAGE}${ADD_ANNOUNCMENT_PAGE}`}>
            <ButtonCustom>SELL</ButtonCustom>
          </Link>
          <Link to={PRODUCTS_CATEGORY_PAGE}>
            <ButtonCustom>BUY</ButtonCustom>
          </Link>
        </ButtonContainer>
      </Container>
    </BackGroundVideoMainPage>
  );
}

export default MainPageContent;
