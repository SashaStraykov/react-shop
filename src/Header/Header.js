import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dataArtLogo from "../images/LogoWhite.png";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Nav,
  Img,
  Container,
  ContainerRight,
  NavLiSign,
  NavUl,
  NavLi,
  PersonItem,
  SignBox,
  BucketItem,
  NavUlBucket,
  AmountItems,
} from "./Styled.js";
import { makeStyles } from "@material-ui/core/styles";
import { RoutesPath } from "../RoutesPath";
import { AppContext } from "../App/Context/Index";

const useStyles = makeStyles({
  icon: {
    color: "inherit",
    fontSize: "3em",
    transition: "0.5s",
  },
  iconBucket: {
    color: "inherit",
    fontSize: "2.8em",
    transition: "0.5s",
  },
});

function Header() {
  const { contextData } = useContext(AppContext);
  const { user, setUser, cart } = contextData;
  const [amountItemsinBucket, setAmountItemsinBucket] = useState(0);

  useEffect(() => {
    if (user) {
      const getLS = localStorage.getItem(user.id).split(",");
      if (getLS[0] === "") {
        setAmountItemsinBucket(0);
      } else {
        setAmountItemsinBucket(getLS.length);
      }
    }
  }, [cart, user]);

  const classes = useStyles();
  return (
    <Nav>
      <Container>
        <Link to={RoutesPath.mainPage}>
          <Img src={dataArtLogo} />
        </Link>
      </Container>
      <ContainerRight>
        <PersonItem>
          <PersonIcon className={classes.icon} />
          <NavUl>
            <Link to={RoutesPath.personPage}>
              <NavLi>Person Page</NavLi>
            </Link>
            <NavLi>{user ? user.typs : 0} typs</NavLi>
            <NavLiSign>
              {user ? (
                <Link to={RoutesPath.authorizationPage}>
                  <SignBox onClick={() => setUser(null)}>Sign out</SignBox>
                </Link>
              ) : (
                <Link to={RoutesPath.authorizationPage}>
                  <SignBox>Sign</SignBox>
                </Link>
              )}
            </NavLiSign>
          </NavUl>
        </PersonItem>
        <BucketItem>
          {user ? <AmountItems>{amountItemsinBucket}</AmountItems> : null}
          <ShoppingCartIcon className={classes.iconBucket} />
          <NavUlBucket>
            <Link to={RoutesPath.checkoutPage}>
              <NavLi>Check out Page</NavLi>
            </Link>
          </NavUlBucket>
        </BucketItem>
      </ContainerRight>
    </Nav>
  );
}

export default Header;
