import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import userSelectors from '../redux/users/user-selectors';

import operationsUser from '../redux/users/user-operations';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(userSelectors.getLogin);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      <Avatar>
        {userName[0]} {userName[1]}
      </Avatar>

      <Typography display="block">{userName}</Typography>

      <Button
        onClick={() => {
          dispatch(operationsUser.logOutUser());
        }}
        className={s.btnExit}
        size="small"
        variant="contained"
      >
        Exit
      </Button>
    </div>
  );
}
