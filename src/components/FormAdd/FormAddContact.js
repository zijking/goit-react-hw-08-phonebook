import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import contactsOperation from '../redux/contacts/contacts-operations';
import * as contactsSelector from '../redux/contacts/contacts-selectors';

import s from './form.module.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Button } from '@material-ui/core';

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

function FormAddContact() {
  const style = useStyles();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.getContacts);

  const isExistContact = name => {
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      window.alert(`${name} is alredy in contacts`);
      return true;
    }
  };
  // console.log('/-/:', contacts);

  const formSubmit = event => {
    event.preventDefault();
    if (isExistContact(name)) {
      return;
    }

    dispatch(contactsOperation.addContacts({ name, number }));

    resetForm();
  };

  /**Скидання форми */
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const onChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <FormControl className={style.root}>
        <TextField
          name="name"
          onChange={onChange}
          id="name"
          label="Name"
          value={name}
          variant="outlined"
          placeholder="Enter contact Name"
          size="small"
        />

        <TextField
          name="number"
          onChange={onChange}
          id="number"
          label="Number"
          value={number}
          variant="outlined"
          placeholder="Enter contact Number"
          size="small"
        />
        <Button
          type="submit"
          className={style.btn}
          size="small"
          fullWidth
          variant="outlined"
          color="primary"
        >
          Add Contact
        </Button>
      </FormControl>
    </form>
  );
}

export default FormAddContact;
