import React, { useState, useContext } from "react";
import {
  SignInBox,
  LoginPasswordSignIn,
  ErrorSignIn,
  ButtonSignIn,
  InputC,
  PasswordBox,
  PasswordBoxIcon,
  InputP,
} from "./Styled";
import { AuthorizationPageContext } from "../../../AuthorizationPage/context";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

function SignIn() {
  const [vissiblePasword, setVissiblePassword] = useState(true);
  const { authorizationContextData } = useContext(AuthorizationPageContext);
  const {
    loginSignIn,
    setLoginSignIn,
    password,
    setPassword,
    checkAuthorization,
    pasError,
  } = authorizationContextData;
  return (
    <SignInBox>
      <form onSubmit={checkAuthorization}>
        <LoginPasswordSignIn>Login</LoginPasswordSignIn>
        <InputC
          value={loginSignIn}
          onChange={(e) => setLoginSignIn(e.target.value)}
        />
        <LoginPasswordSignIn>Password</LoginPasswordSignIn>
        <PasswordBox>
          <InputP
            type={vissiblePasword ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordBoxIcon
            onClick={() => setVissiblePassword(!vissiblePasword)}
          >
            {vissiblePasword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </PasswordBoxIcon>
        </PasswordBox>

        <ErrorSignIn>{pasError && `*incorrect password`}</ErrorSignIn>
        <ButtonSignIn>SIGN IN</ButtonSignIn>
      </form>
    </SignInBox>
  );
}

export default SignIn;
