import React, { useContext } from "react";
import { CheckoutPageContext } from "../context";
import ProductsCategoryItem from "../../../Components/ProducsCategoryItem/ProducsCategoryItem";
import Spinner from "../../../Components/Spinner/Spinner";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../../RoutesPath";
import {
  BackGroundGrey,
  H2,
  Container,
  ItemBox,
  ButtonCancel,
  PriceBox,
} from "./Styled";
import ErrorModal from "../../../Components/ErrorModal";

const CheckoutPageContent = () => {
  const { checkoutContextData } = useContext(CheckoutPageContext);
  const {
    loading,
    checkoutUser,
    totalPrice,
    cancelItem,
    error,
  } = checkoutContextData;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <BackGroundGrey>
      <H2>CheckoutPage</H2>

      <Container>
        {checkoutUser.map(({ id, idCategory, ...rest }) => (
          <ItemBox key={id}>
            <Link to={`${RoutesPath.productsCategoryPage}/${idCategory}/${id}`}>
              <ProductsCategoryItem id={id} {...rest} />
            </Link>
            <ButtonCancel onClick={() => cancelItem(id)}>x</ButtonCancel>
          </ItemBox>
        ))}
      </Container>
      <Container>
        <PriceBox>Total value: {totalPrice} typs</PriceBox>
      </Container>
    </BackGroundGrey>
  );
};

export default CheckoutPageContent;
