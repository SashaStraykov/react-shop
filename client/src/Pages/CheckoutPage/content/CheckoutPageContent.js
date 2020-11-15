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
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    fontSize: '1.5em',
  },
});

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
  const classes = useStyles();
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
            <ButtonCancel onClick={() => cancelItem(id, items)}><RestoreFromTrashIcon className={classes.icon}/></ButtonCancel>
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
