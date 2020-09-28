import React, { useContext } from "react";
import Slider from "../../Components/Slider/Slider";
import BackGroundVideoComponent from "../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import "./ItemPage.css";
import Container from "../../Components/Container/Container";
import H2Component from "../../Components/H2Component/H2Component";
import ocean from "../../Components/BackGroundVideoComponent/ocean.mp4";
import { Context } from "../../App/Context/Context";
import { Link } from "react-router-dom";

import { data } from "../../Data/Data.js";

function ItemPage({ itemid }) {
  const { items } = data;
  const { user } = useContext(Context);
  const item = items.filter((el) => el.id === itemid);
  return (
    <BackGroundVideoComponent video={ocean}>
      {item.map((el) => {
        return (
          <Container key="test1" white>
            <H2Component>{el.title}</H2Component>
            <div className="gridBox">
              <div className="gridSlider">
                {el.img.length === 0 ? null : <Slider img={el.img} />}
              </div>
              <div className="itemDescription">{el.description}</div>
              <span className="itemPrice">{el.price}$</span>
              {user ? (
                <button className="itemButton">BUY</button>
              ) : (
                <Link to="/Authorization-Page">
                  <button className="itemButtomSighn">Sighn in to buy</button>
                </Link>
              )}
            </div>
          </Container>
        );
      })}
    </BackGroundVideoComponent>
  );
}

export default ItemPage;
