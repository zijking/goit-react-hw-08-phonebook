import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/FormAdd';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import contactsOperation from '../components/redux/contacts/contacts-operations';
import userSelectors from '../components/redux/users/user-selectors';

import style from './css/ContactView.module.css';

function ContactsView() {
  const dispatch = useDispatch();
  const isloggIn = useSelector(userSelectors.getIsLoggenIn);

  useEffect(() => {
    dispatch(contactsOperation.loadContacts());
  }, [dispatch]);

  return (
    <>
      <div className={style.container}>
        <div className={style.formContainer}>
          <p className={style.title}>Phonebook</p>
          <ContactForm />
        </div>
        <div className={style.contactsContainer}>
          <p className={style.title}>Contacts</p>
          <Filter />
          {isloggIn && <ContactList />}
        </div>
      </div>
    </>
  );
}

export default ContactsView;
