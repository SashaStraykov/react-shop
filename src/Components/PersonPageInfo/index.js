import React, { useContext } from "react";
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
} from "./Styled";
import ProductsCategoryItem from "../ProducsCategoryItem/ProducsCategoryItem";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../RoutesPath";
import Spinner from "../Spinner/Spinner";
import { PersonPageContext } from "../../Pages/PersonPage/context";

const PersonPageInfo = () => {
  const { contextdataPersonPage } = useContext(PersonPageContext);
  const { loading, user, madePosts } = contextdataPersonPage;
  return (
    <BackGroundGrey>
      <H2Title >Hello {user.login}</H2Title>
      <Container>
        <TypsBox>
          <TypsBoxLeft>You have {user.typs} typs</TypsBoxLeft>
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
              <Link
                to={`${RoutesPath.productsCategoryPage}/${el.idCategory}/${el.id}`}
              >
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
