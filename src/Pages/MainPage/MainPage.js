import React from "react";
import BackGroundVideoMainPage from "../../Components/BackGroundVideoComponent/BackGroundVideoComponent";
import Container from "../../Components/Container/Container";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import night from "../../Components/BackGroundVideoComponent/night.mp4";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MAINPAGE() {
  return (
    <BackGroundVideoMainPage video={night}>
      <Container>
        <h1 className="typsShop">DataArt typ's shop</h1>
        <h2 className="typsShoph2">What do you want?</h2>
        <div className="buttonContainer">
          <Link className="link" to="/Person-Page">
            <ButtonCustom>SELL</ButtonCustom>
          </Link>
          <Link className="link" to="/Products-Category-Page">
            <ButtonCustom>BUY</ButtonCustom>
          </Link>
        </div>
      </Container>
    </BackGroundVideoMainPage>
  );
}

export default MAINPAGE;
