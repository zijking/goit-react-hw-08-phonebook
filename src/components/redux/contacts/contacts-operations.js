import axios from 'axios';
// import actions from './contacts-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

/**добавлення онтакту */

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async newContact => {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  },
);

const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async idcontact => {
    // eslint-disable-next-line no-unused-vars
    const _ = await axios.delete(`/contacts/${idcontact}`);
    return idcontact;
  },
);

/**завантаження контактів з БД */
const loadContacts = createAsyncThunk('contacts/loadContacts', async () => {
  const res = await axios.get(`/contacts`);
  return res.data;
});

const obj = {
  addContacts,
  deleteContacts,
  loadContacts,
};

export default obj;
