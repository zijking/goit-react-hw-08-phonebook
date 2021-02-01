import { createAction } from '@reduxjs/toolkit';

// const addContactsSuccess = createAction('contacts/addContactsSeccess');
// const addContactsRequest = createAction('contacts/addContactsRequest');
// const addContactsError = createAction('contacts/addContactsError');

// const deleteContactsSuccess = createAction('contacts/deleteContactsSeccess');
// const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
// const deleteContactsError = createAction('contacts/deleteContactsError');

// const loadContactsRequest = createAction('contacts/loadContactsRequest');
// const loadContactsSuccess = createAction('contacts/loadContactsSuccess');
// const loadContactsError = createAction('contacts/loadContactsError');

const changeFilter = createAction('contacts/changeFilter');

const obj = {
  // addContactsSuccess,
  // addContactsRequest,
  // addContactsError,
  // deleteContactsSuccess,
  // deleteContactsRequest,
  // deleteContactsError,

  // loadContactsRequest,
  // loadContactsSuccess,
  // loadContactsError,
  changeFilter,
};

export default obj;
