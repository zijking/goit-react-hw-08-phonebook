import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/FormAdd';
import contactsOperation from './components/redux/contacts/contacts-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.loadContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
