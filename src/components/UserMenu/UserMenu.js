import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import userSelectors from '../redux/users/user-selectors';

import operationsUser from '../redux/users/user-operations';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: `flex`,
    alignItems: 'baseline',
    '& :nth-child(n)': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

export default function UserMenu() {
  const userName = useSelector(userSelectors.getLogin);
  const dispatch = useDispatch();

  const s = useStyles();

  return (
    <div className={s.root}>
      <Avatar>
        {userName[0]} {userName[1]}
      </Avatar>

      <Typography display="block">{userName}</Typography>

      <Button
        onClick={() => {
          dispatch(operationsUser.logOutUser());
        }}
        size="small"
        variant="contained"
      >
        Exit
      </Button>
    </div>
  );
}
