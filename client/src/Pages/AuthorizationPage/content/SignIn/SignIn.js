import React, { useState, useContext } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';
import { AuthorizationPageContext } from '../../context';
import {
  SignInBox,
  ErrorSignIn,
  ButtonSignIn,
  InputC,
  PasswordBox,
  PasswordBoxIcon,
  InputP,
  Form,
} from './styled';

const useStyles = makeStyles({
  icon: {
    color: 'var(--icon-color)',
    "&:hover": {
      cursor: 'pointer'
    }
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
    <SignInBox >
      <Form onSubmit={checkAuthorization}>
        <InputC
          value={loginSignIn}
          onChange={(e) => setLoginSignIn(e.target.value)}
          placeholder='Login...'

        />
        <PasswordBox>
          <InputP
            type={vissiblePasword ? 'password' : 'text'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password...'
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
      </Form>
    </SignInBox>
  );
}

export default SignIn;

