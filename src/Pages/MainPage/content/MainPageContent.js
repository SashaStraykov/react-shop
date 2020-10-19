import React from 'react';
import { Link } from 'react-router-dom';
import BackGroundVideoMainPage from '../../../Components/BackGroundVideoComponent';

import night from '../../../assets/video/night.mp4';
import {
  H1, H2, ButtonContainer, Container, ButtonCustom,
} from './styled';
import { PERSON_PAGE, PRODUCTS_CATEGORY_PAGE, ADD_ANNOUNCMENT_PAGE } from '../../../constants/routes';

function MainPageContent() {
  return (
    <BackGroundVideoMainPage video={night}>
      <Container>
        <H1>DataArt typ&apos;s shop</H1>
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
