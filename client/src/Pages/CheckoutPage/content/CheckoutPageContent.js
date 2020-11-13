import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutPageContext } from '../context';
import ProductsCategoryItem from '../../../Components/ProductsCategoryItem';
import Spinner from '../../../Components/Spinner';
import {
  BackGroundGrey,
  H2,
  Container,
  ItemBox,
  ButtonCancel,
  PriceBox,
} from './styled';
import ErrorModal from '../../../Components/ErrorModal';
import { PRODUCTS_CATEGORY_PAGE } from '../../../constants/routes';

const CheckoutPageContent = () => {
  const { checkoutContextData } = useContext(CheckoutPageContext);
  const {
    loading,
    checkoutUser,
    totalPrice,
    cancelItem,
    error,
    items,
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
            <Link to={`${PRODUCTS_CATEGORY_PAGE}/${idCategory}/${id}`}>
              <ProductsCategoryItem id={id} {...rest} />
            </Link>
            <ButtonCancel onClick={() => cancelItem(id, items)}>x</ButtonCancel>
          </ItemBox>
        ))}
      </Container>
      <Container>
        <PriceBox>
          Total value:
          {' '}
          {totalPrice}
          {' '}
          typs
        </PriceBox>
      </Container>
    </BackGroundGrey>
  );
};

export default CheckoutPageContent;
