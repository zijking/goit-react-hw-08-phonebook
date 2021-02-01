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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    // console.log(login, password, email);
    const objUser = {
      name: login,
      password,
      email,
    };
    dispatch(operationsUser.registrationUser(objUser));
    resetForm();
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'login': {
        setLogin(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      default:
        return;
    }
  };

  const resetForm = () => {
    setPassword('');
    setLogin('');
    setEmail('');
  };

  return (
    <>
      <h1>Registration to System Phonebook</h1>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <FormControl className={classes.root}>
          <TextField
            name="login"
            onChange={handleChange}
            required
            id="login"
            label="Login"
            value={login}
            variant="outlined"
            placeholder="Enter your Login"
            size="small"
          />

          <TextField
            name="email"
            onChange={handleChange}
            required
            id="email"
            label="E-mail"
            value={email}
            variant="outlined"
            placeholder="Enter your E-mail"
            size="small"
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
            Registration
          </Button>
        </FormControl>
      </form>
    </>
  );
}
