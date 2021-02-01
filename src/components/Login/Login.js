import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import operationsUser from '../redux/users/user-operations';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0, 1),
      width: '35ch',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  btn: {
    width: '20ch',
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('edc@ukr.net');
  const [password, setPassword] = useState('qwer4321');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    console.log(email, password);

    dispatch(operationsUser.loginUser({ email, password }));
    resetForm();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default:
        return;
    }
  };
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h1>Login to system</h1>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <FormControl className={classes.root}>
          <TextField
            name="email"
            onChange={handleChange}
            required
            id="email"
            label="E-mail"
            value={email}
            variant="outlined"
            placeholder="Enter your Email"
            size="small"
            type="email"
          />

          <TextField
            name="password"
            onChange={handleChange}
            required
            id="password"
            label="Password"
            value={password}
            variant="outlined"
            placeholder="Enter your Password"
            type="password"
            size="small"
          />
          <Button
            type="submit"
            className={classes.btn}
            size="small"
            fullWidth
            variant="outlined"
            color="primary"
          >
            Login
          </Button>
        </FormControl>
      </form>
    </>
  );
}
