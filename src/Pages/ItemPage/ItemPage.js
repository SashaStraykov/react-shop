import React, { useContext } from "react";
import Slider from "../../Components/Slider/Slider";
import { data } from "../../Data/Data";
import { AppContext } from "../../App/Context/Index";
import { ItemPageContext } from "./Context/Index";
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

function ItemPage({ itemid }) {
  const { items } = data;
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  // console.log(user);
  const item = items.filter((el) => el.id === itemid);
  // const { contextDataItem } = useContext(ItemPageContext);
  // const { item } = contextDataItem;
  return (
    <BackGroundGrey>
      {item.map((el) => {
        return (
          <div key="test1">
            <Container>
              <H2>{el.title}</H2>
            </Container>
            <Container>
              <GridBox>
                <GridSlider>
                  {el.img.length === 0 ? null : <Slider img={el.img} />}
                </GridSlider>
                <ItemDescription>{el.description}</ItemDescription>
                <ItemPrice>{el.price}$</ItemPrice>
                {user ? (
                  <Button>BUY</Button>
                ) : (
                  <Link to="/Authorization-Page">
                    <ButtonSign>Sighn in to buy</ButtonSign>
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

export default ItemPage;
