import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../../Components/Slider';
import { ItemPageContext } from '../Context/Index';
import {
  BackGroundGrey,
  Container,
  GridBox,
  GridSlider,
  ItemDescription,
  ItemPrice,
  H2,
  Button,
  ButtonSign,
} from './styled';
import Spinner from '../../../Components/Spinner';
import ErrorModal from '../../../Components/ErrorModal';
import { AUTHORIZATION_PAGE } from '../../../constants/routes';
import Chat from '../../../Components/Chat';

function ItemPageContent() {
  const { contextDataItem } = useContext(ItemPageContext);
  const {
    item,
    user,
    loading,
    addItemToBucket,
    added,
    error,
  } = contextDataItem;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <BackGroundGrey>
      {item.map(({
        id, title, img, price, description,
      }) => (
        <div key={id}>
          <H2>{title}</H2>
          <Container>
            <GridBox>
              <GridSlider>
                {img.length === 0 ? null : <Slider img={img} />}
              </GridSlider>
              <ItemDescription>{description}</ItemDescription>
              <ItemPrice>
                {price}
                $
              </ItemPrice>
              {user ? (
                <Button onClick={() => addItemToBucket(id)}>
                  {added ? 'Added' : 'Add to bucket'}
                </Button>
              ) : (
                <Link to={AUTHORIZATION_PAGE}>
                  <ButtonSign>Sign in to buy</ButtonSign>
                </Link>
              )}
            </GridBox>
          </Container>

          <Chat item={item} />

        </div>
      ))}
    </BackGroundGrey>
  );
}

export default ItemPageContent;
