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
import { RoutesPath } from "../../../RoutesPath";
import Spinner from "../../../Components/Spinner/Spinner";

function ItemPageContent() {
  const { contextDataItem } = useContext(ItemPageContext);
  const {
    item,
    user,
    loading,
    addItemToBucket,
    addedToBucket,
  } = contextDataItem;
  if (loading) {
    return <Spinner />;
  }
  return (
    <BackGroundGrey>
      {item.map(({ id, title, img, price, description }) => {
        return (
          <div key={id}>
            <Container>
              <H2>{title}</H2>
            </Container>
            <Container>
              <GridBox>
                <GridSlider>
                  {img.length === 0 ? null : <Slider img={img} />}
                </GridSlider>
                <ItemDescription>{description}</ItemDescription>
                <ItemPrice>{price}$</ItemPrice>
                {user ? (
                  <Button onClick={() => addItemToBucket(id)}>
                    {addedToBucket ? "Added" : "Add to bucket"}
                  </Button>
                ) : (
                  <Link to={RoutesPath.authorizationPage}>
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