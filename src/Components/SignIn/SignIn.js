import React, { useState, useContext } from "react";
import {
  SignInBox,
  LoginPasswordSignIn,
  ErrorSignIn,
  InputCheckBox,
  ButtonSignIn,
  InputC,
} from "./Styled";
import { AuthorizationPageContext } from "../../Pages/AuthorizationPage/context";

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
        <InputC
          type={vissiblePasword ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <ErrorSignIn>{pasError ? `*incorrect password` : null}</ErrorSignIn>
        <br></br>
        <InputCheckBox
          onChange={() => setVissiblePassword(!vissiblePasword)}
          id="password"
          type="checkbox"
        />
        <label htmlFor="password"> Vissible password</label>
        <br></br>
        <ButtonSignIn>SIGN IN</ButtonSignIn>
      </form>
    </SignInBox>
  );
}

export default SignIn;
