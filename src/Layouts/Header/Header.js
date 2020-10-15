import React, { useContext, useEffect, useState } from 'react';
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
import dataArtLogo from '../../assets/images/LogoWhite.png';
import { AppContext } from '../../App/Context/Index';
import {
  HOME_PAGE, PERSON_PAGE, AUTHORIZATION_PAGE, CHECKOUT_PAGE,
} from '../../constants/routes';

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

function Header() {
  const { contextData } = useContext(AppContext);
  const { user, setUser, cart } = contextData;
  const [amountItemsinBucket, setAmountItemsinBucket] = useState(0);

  useEffect(() => {
    if (user) {
      const getLS = localStorage.getItem(user.id).split(',');
      if (getLS[0] === '') {
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
              typs
            </NavLi>
            <NavLiSign>
              <Link to={AUTHORIZATION_PAGE}>
                {user ? (
                  <SignBox onClick={() => setUser(null)}>Sign out</SignBox>
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

export default Header;
