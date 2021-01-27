import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperation from '../redux/contacts/contacts-operations';
import * as contactsSelector from '../redux/contacts/contacts-selectors';
import s from './form.module.css';

function FormAddContact() {
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
    dispatch(contactsOperation.addContacts(name, number));

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
      <label className={s.input}>
        Name:<br></br>
        <input type="text" onChange={onChange} value={name} name="name" />
      </label>
      <label className={s.input}>
        Number:<br></br>
        <input type="text" name="number" onChange={onChange} value={number} />
      </label>
      <input className="btn" type="submit" value="Add contact" />
    </form>
  );
}

export default FormAddContact;
