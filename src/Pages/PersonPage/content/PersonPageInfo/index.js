import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  BackGroundGrey,
  H2,
  Container,
  TypsBox,
  TypsBoxLeft,
  TypsBoxRight,
  ItemBox,
  ButtonCancel,
  H2Title,
} from './styled';
import ProductsCategoryItem from '../../../../Components/ProductsCategoryItem';
import Spinner from '../../../../Components/Spinner';
import { PersonPageContext } from '../../context';
import { PRODUCTS_CATEGORY_PAGE } from '../../../../constants/routes';

const PersonPageInfo = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const { loading, user, madePosts } = contextdataPersonPage;
  return (
    <BackGroundGrey>
      <H2Title>
        Hello
        {' '}
        {user.login}
      </H2Title>
      <Container>
        <TypsBox>
          <TypsBoxLeft>
            You have
            {' '}
            {user.typs}
            {' '}
            typs
          </TypsBoxLeft>
          <TypsBoxRight>Buy more Typs</TypsBoxRight>
        </TypsBox>
      </Container>
      <Container>
        <H2>Your announcement</H2>
        {loading ? (
          <Spinner />
        ) : (
          madePosts.map((el) => (
            <ItemBox key={el.id}>
              <Link to={`${PRODUCTS_CATEGORY_PAGE}/${el.idCategory}/${el.id}`}>
                <ProductsCategoryItem {...el} />
              </Link>
              <ButtonCancel id={el.id}>x</ButtonCancel>
            </ItemBox>
          ))
        )}
      </Container>
    </BackGroundGrey>
  );
};

export default PersonPageInfo;
