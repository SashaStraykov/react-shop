import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
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
} from './Styled';
import dataArtLogo from '../../../assets/images/LogoWhite.png';
import { AppContext } from '../../../App/Context/Index';
import {
  HOME_PAGE, PERSON_PAGE, AUTHORIZATION_PAGE, CHECKOUT_PAGE,
} from '../../../constants/routes';
import { HeaderContext } from '../context';

const useStyles = makeStyles({
  icon: {
    color: 'inherit',
    fontSize: '3em',
    transition: '0.5s',
  },
  iconBucket: {
    color: 'inherit',
    fontSize: '2.8em',
    transition: '0.5s',
  },
});

function HeaderContent() {
  const { contextData } = useContext(AppContext);
  const { user, setUser, signOut } = contextData;

  const { headerContextData } = useContext(HeaderContext);
  const { amountItemsinBucket } = headerContextData;

  const classes = useStyles();
  return (
    <Nav>
      <Container>
        <Link to={HOME_PAGE}>
          <Img src={dataArtLogo} />
        </Link>
      </Container>
      <ContainerRight>
        <PersonItem>
          <PersonIcon className={classes.icon} />
          <NavUl>
            <Link to={PERSON_PAGE}>
              <NavLi>Person Page</NavLi>
            </Link>
            <NavLi>
              {user ? user.typs : 0}
              {' '}
              typs
            </NavLi>
            <NavLiSign>
              <Link to={AUTHORIZATION_PAGE}>
                {user ? (
                  <SignBox onClick={() => signOut()}>Sign out</SignBox>
                ) : (
                  <SignBox>Sign</SignBox>
                )}
              </Link>
            </NavLiSign>
          </NavUl>
        </PersonItem>
        <BucketItem>
          {user ? <AmountItems>{amountItemsinBucket}</AmountItems> : null}
          <ShoppingCartIcon className={classes.iconBucket} />
          <NavUlBucket>
            <Link to={`${PERSON_PAGE}${CHECKOUT_PAGE}`}>
              <NavLi>Check out Page</NavLi>
            </Link>
          </NavUlBucket>
        </BucketItem>
      </ContainerRight>
    </Nav>
  );
}

export default HeaderContent;
