import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dataArtLogo from "../images/dataArtLogo.png";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import "./Header.css";
import { Context } from "../App/Context/Context";

function Header() {
  const { user } = useContext(Context);
  return (
    <nav className="nav">
      <div className="navLeft">
        <Link className="navLink" to="/">
          <img className="navLogo" src={dataArtLogo} alt="dataArtLogo" />
        </Link>
      </div>
      <div className="navRight">
        <Link
          className="navLink"
          to={user ? "/Person-Page" : "/Authorization-Page"}
        >
          <div className="navLinkA">
            <PersonIcon ccolor="inherit" fontSize="large" />
          </div>
        </Link>
        <Link className="navLink" to="/Checkout-Page">
          <div className="navLinkA">
            <WorkIcon color="inherit" fontSize="large" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
