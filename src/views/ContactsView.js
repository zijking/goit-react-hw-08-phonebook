import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/FormAdd';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import contactsOperation from '../components/redux/contacts/contacts-operations';
import userSelectors from '../components/redux/users/user-selectors';

function ContactsView() {
  const dispatch = useDispatch();
  const isloggIn = useSelector(userSelectors.getIsLoggenIn);

  useEffect(() => {
    dispatch(contactsOperation.loadContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isloggIn && <ContactList />}
    </>
  );
}

export default ContactsView;
