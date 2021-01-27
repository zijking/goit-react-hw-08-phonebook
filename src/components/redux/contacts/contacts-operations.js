import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3001';

/**добавлення онтакту */
const addContacts = (name, number) => dispatch => {
  const newContact = {
    name,
    number,
  };

  dispatch(actions.addContactsRequest());

  axios
    .post('/contacts', newContact)
    .then(({ data }) => {
      // console.log(data);
      dispatch(actions.addContactsSuccess(data));
    })
    .catch(err => dispatch(actions.addContactsError(err)));
};

/**видалення контакту */
const deleteContacts = idContact => dispatch => {
  dispatch(actions.deleteContactsRequest());

  axios
    .delete(`/contacts/${idContact}`)
    .then(data => {
      // console.log('data: ', data);
      dispatch(actions.deleteContactsSuccess(idContact));
    })
    .catch(err => dispatch(actions.deleteContactsError(err)));
};

/**завантаження контактів з БД */
const loadContacts = () => dispatch => {
  dispatch(actions.loadContactsRequest());

  axios
    .get(`/contacts`)
    .then(({ data }) => dispatch(actions.loadContactsSuccess(data)))
    .catch(err => dispatch(actions.loadContactsError(err)));
};

const obj = {
  addContacts,
  deleteContacts,
  loadContacts,
};

export default obj;
