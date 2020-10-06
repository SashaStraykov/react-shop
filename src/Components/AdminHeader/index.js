import React, { useContext } from "react";
import { NavBar, NavButton, Block } from "./Styled";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { Link } from "react-router-dom";
import { RoutesPath } from "../../RoutesPath";
import { AppContext } from "../../App/Context/Index";

const AdminHeader = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  if (user && user.role === "admin") {
    return (
      <NavBar>
        <Block>
          <Link to={RoutesPath.adminPage}>
            <NavButton>
              <SupervisorAccountIcon fontSize="large" />
            </NavButton>
          </Link>
        </Block>
      </NavBar>
    );
  }
  return null;
};

export default AdminHeader;
