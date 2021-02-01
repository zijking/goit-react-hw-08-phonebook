import React from 'react';

import { useSelector } from 'react-redux';
import userSelectors from '../redux/users/user-selectors';

import { NavLink, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import UserMenu from '../UserMenu';
import Typography from '@material-ui/core/Typography';

import s from './AppBar.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { url } = useRouteMatch();

  const isLoggIn = useSelector(userSelectors.getIsLoggenIn);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="button" className={classes.title}>
            <NavLink className={s.navLink} to={`${url}`}>
              Home
            </NavLink>
            <NavLink className={s.navLink} to={`${url}contacts`}>
              Contacts
            </NavLink>
          </Typography>
          {isLoggIn ? (
            <div>
              <UserMenu />
            </div>
          ) : (
            <Typography
              align="right"
              variant="button"
              className={classes.title}
            >
              <NavLink className={s.navLink} to={`${url}login`}>
                Login
              </NavLink>
              <NavLink className={s.navLink} to={`${url}registration`}>
                Registration
              </NavLink>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
