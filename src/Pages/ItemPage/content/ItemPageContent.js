import React, { useContext } from "react";
import Slider from "../../../Components/Slider/Slider";
import { ItemPageContext } from "../Context/Index";
import { Link } from "react-router-dom";
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
} from "./Styled";
import Spinner from "../../../Components/Spinner/Spinner";
import ErrorModal from "../../../Components/ErrorModal";
import { AUTHORIZATION_PAGE } from "../../../constants/routes";

function ItemPageContent() {
  const { contextDataItem } = useContext(ItemPageContext);
  const {
    item,
    user,
    loading,
    addItemToBucket,
    added,
    error,
    setAdded,
  } = contextDataItem;

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorModal />;
  }
  return (
    <BackGroundGrey>
      {item.map(({ id, title, img, price, description }) => {
        return (
          <div key={id}>
            <H2>{title}</H2>
            <Container>
              <GridBox>
                <GridSlider>
                  {img.length === 0 ? null : <Slider img={img} />}
                </GridSlider>
                <ItemDescription>{description}</ItemDescription>
                <ItemPrice>{price}$</ItemPrice>
                {user ? (
                  <Button onClick={() => addItemToBucket(id)}>
                    {added ? "Added" : "Add to bucket"}
                  </Button>
                ) : (
                  <Link to={AUTHORIZATION_PAGE}>
                    <ButtonSign>Sign in to buy</ButtonSign>
                  </Link>
                )}
              </GridBox>
            </Container>
          </div>
        );
      })}
    </BackGroundGrey>
  );
}

export default ItemPageContent;
