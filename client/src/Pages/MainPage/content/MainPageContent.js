import React from 'react';
import { Link } from 'react-router-dom';
import {
  PERSON_PAGE,
  PRODUCTS_CATEGORY_PAGE,
  ADD_ANNOUNCMENT_PAGE,
} from '../../../constants/routes';
import {
  H1,
  H2,
  ButtonCustom,
  Screen,
  LeftPart,
  RightPart
} from './styled';

const MainPageContent = () => (
  <Screen>
    <LeftPart>
      <Link to={`${PERSON_PAGE}${ADD_ANNOUNCMENT_PAGE}`}>
        <ButtonCustom>SELL</ButtonCustom>
      </Link>
    </LeftPart>
    <RightPart>
      <Link to={PRODUCTS_CATEGORY_PAGE}>
        <ButtonCustom>BUY</ButtonCustom>
      </Link>
    </RightPart>
      {/* <H1>DataArt typ&apos;s shop</H1>
      <H2>What do you want?</H2> */}
  </Screen>
);

export default MainPageContent;
