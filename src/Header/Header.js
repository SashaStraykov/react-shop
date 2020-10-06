import React from "react";
import { Link } from "react-router-dom";
import dataArtLogo from "../images/dataArtLogo.png";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import { Nav, Img, Container, ContainerRight } from "./Styled.js";
import { makeStyles } from "@material-ui/core/styles";
import { RoutesPath } from "../RoutesPath";
const useStyles = makeStyles({
  icon: {
    color: "black",
    fontSize: "3em",
    "&:hover": {
      color: "rgb(245,245,245)",
    },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Nav>
      <Container>
        <Link to={RoutesPath.mainPage}>
          <Img src={dataArtLogo} />
        </Link>

        <ContainerRight>
          <Link to={RoutesPath.personPage}>
            <PersonIcon className={classes.icon} />
          </Link>
          <Link to={RoutesPath.checkoutPage}>
            <WorkIcon className={classes.icon} />
          </Link>
        </ContainerRight>
      </Container>
    </Nav>
  );
}

export default Header;
