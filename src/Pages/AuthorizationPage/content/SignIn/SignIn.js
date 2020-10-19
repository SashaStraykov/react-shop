import React, { useState, useContext } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { AuthorizationPageContext } from '../../context';
import {
  SignInBox,
  LoginPasswordSignIn,
  ErrorSignIn,
  ButtonSignIn,
  InputC,
  PasswordBox,
  PasswordBoxIcon,
  InputP,
} from './styled';

const useStyles = makeStyles({
  icon: {
    color: 'var(--icon-color)',
  },
});

function SignIn() {
  const classes = useStyles();
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
            type={vissiblePasword ? 'password' : 'text'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordBoxIcon
            onClick={() => setVissiblePassword(!vissiblePasword)}
          >
            {vissiblePasword ? <VisibilityOffIcon className={classes.icon} />
              : <VisibilityIcon className={classes.icon} />}
          </PasswordBoxIcon>
        </PasswordBox>

        <ErrorSignIn>{pasError && '*incorrect password'}</ErrorSignIn>
        <ButtonSignIn>SIGN IN</ButtonSignIn>
      </form>
    </SignInBox>
  );
}

export default SignIn;
