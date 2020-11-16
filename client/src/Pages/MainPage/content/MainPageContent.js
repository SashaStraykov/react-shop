import React from 'react';
import {
  PERSON_PAGE,
  PRODUCTS_CATEGORY_PAGE,
  ADD_ANNOUNCMENT_PAGE,
} from '../../../constants/routes';
import {
  ButtonCustom,
  Screen,
  LeftPart,
  RightPart,
  LinkTo,
} from './styled';

const MainPageContent = () => (
  <Screen>
    <LeftPart>
      <LinkTo to={`${PERSON_PAGE}${ADD_ANNOUNCMENT_PAGE}`}>
        <ButtonCustom>SELL</ButtonCustom>
      </LinkTo>
    </LeftPart>
    <RightPart>
      <LinkTo to={PRODUCTS_CATEGORY_PAGE}>
        <ButtonCustom>BUY</ButtonCustom>
      </LinkTo>
    </RightPart>


  </Screen>
);

export default MainPageContent;
