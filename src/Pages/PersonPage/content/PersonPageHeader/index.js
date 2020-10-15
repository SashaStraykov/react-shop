import React, { useState, useContext } from 'react';
import {
  Link, Switch, Route, useRouteMatch,
} from 'react-router-dom';
import WorkIcon from '@material-ui/icons/Work';
import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { makeStyles } from '@material-ui/core/styles';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonPageInfo from '../PersonPageInfo';
import PersonPageRejectedItems from '../PersonPageRejectedItems';
import CheckoutPage from '../../../CheckoutPage';
import AddItemPage from '../../../AddItemPage';
import { Nav, NavUl, NavLi } from './Styled';
import { AppContext } from '../../../../App/Context/Index';
import PrivateLayoutAdminPage from '../../../../Layouts/PrivateLayoutAdminPage';
import {
  ADMIN_PAGE, CHECKOUT_PAGE, ADD_ANNOUNCMENT_PAGE, REJECT_ITEMS_PAGE,
} from '../../../../constants/routes';

const useStyles = makeStyles({
  icon: {
    color: 'inherit',
    fontSize: '2.5em',
  },
  iconPlus: {
    color: 'inherit',
    fontSize: '3em',
  },
});

const PersonPageHeader = () => {
  const { contextData } = useContext(AppContext);
  const { user } = contextData;
  const [active, setActive] = useState({
    dash: true,
    bucket: false,
    add: false,
    cancel: false,
    admin: false,
  });
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  return (
    <>
      <Nav>
        <NavUl>
          {user && user.role === 'admin' ? (
            <Link to={`${url}${ADMIN_PAGE}`}>
              <NavLi
                active={active.admin}
                onClick={() => setActive({
                  dash: false,
                  bucket: false,
                  add: false,
                  cancel: false,
                  admin: true,
                })}
              >
                <SupervisorAccountIcon className={classes.iconPlus} />
              </NavLi>
            </Link>
          ) : null}

          <Link to={`${url}`}>
            <NavLi
              active={active.dash}
              onClick={() => setActive({
                dash: true,
                bucket: false,
                add: false,
                cancel: false,
              })}
            >
              <DashboardIcon className={classes.icon} />
            </NavLi>
          </Link>
          <Link to={`${url}${CHECKOUT_PAGE}`}>
            <NavLi
              active={active.bucket}
              onClick={() => setActive({
                dash: false,
                bucket: true,
                add: false,
                cancel: false,
              })}
            >
              <WorkIcon className={classes.icon} />
            </NavLi>
          </Link>
          <Link to={`${url}${ADD_ANNOUNCMENT_PAGE}`}>
            <NavLi
              active={active.add}
              onClick={() => setActive({
                dash: false,
                bucket: false,
                add: true,
                cancel: false,
              })}
            >
              <AddIcon className={classes.iconPlus} />
            </NavLi>
          </Link>
          <Link to={`${url}${REJECT_ITEMS_PAGE}`}>
            <NavLi
              active={active.cancel}
              onClick={() => setActive({
                dash: false,
                bucket: false,
                add: false,
                cancel: true,
              })}
            >
              <CancelPresentationIcon className={classes.iconPlus} />
            </NavLi>
          </Link>
        </NavUl>
      </Nav>

      <Switch>
        <Route path={`${path}${CHECKOUT_PAGE}`}>
          <CheckoutPage />
        </Route>
        <Route path={`${path}${ADD_ANNOUNCMENT_PAGE}`}>
          <AddItemPage />
        </Route>
        <Route path={`${path}${REJECT_ITEMS_PAGE}`}>
          <PersonPageRejectedItems />
        </Route>
        <Route path={`${path}${ADMIN_PAGE}`}>
          <PrivateLayoutAdminPage />
        </Route>
        <Route path={`${path}`}>
          <PersonPageInfo user={user} />
        </Route>
      </Switch>
    </>
  );
};

export default PersonPageHeader;
