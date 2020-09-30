import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dataArtLogo from "../images/dataArtLogo.png";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import { Context } from "../App/Context/Context";
import { Nav, Img, Container, ContainerRight } from "./Styled.js";
import { makeStyles } from "@material-ui/core/styles";

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
  const { user } = useContext(Context);
  const classes = useStyles();
  return (
    // <nav className="nav">
    <Nav>
      <Container>
        <Link to="/">
          <Img src={dataArtLogo} />
        </Link>

        <ContainerRight>
          <Link to={user ? "/Person-Page" : "/Authorization-Page"}>
            <PersonIcon className={classes.icon} />
          </Link>
          <Link to="/Checkout-Page">
            <WorkIcon className={classes.icon} />
          </Link>
        </ContainerRight>
      </Container>
    </Nav>

    // </nav>
  );
}

export default Header;
