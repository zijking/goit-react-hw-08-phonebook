import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactOperations from './contacts-operations';
import actions from './contacts-actions';

const items = createReducer([], {
  [contactOperations.addContacts.fulfilled]: (state, { payload }) => {
    // console.log(payload);

    const updateState = [...state, payload];

    return updateState;
  },
  [contactOperations.deleteContacts.fulfilled]: (state, { payload }) => {
    console.log('delete:', payload);
    const updateState = state.filter(({ id }) => id !== payload);

    return updateState;
  },
  [contactOperations.loadContacts.fulfilled]: (_, { payload }) => {
    // console.log(payload);
    return payload;
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => {
    return payload;
  },
});

const load = createReducer(false, {
  [contactOperations.addContacts.pending]: () => true,
  [contactOperations.addContacts.fulfilled]: () => false,
  [contactOperations.addContacts.rejected]: () => false,

  [contactOperations.deleteContacts.pending]: () => true,
  [contactOperations.deleteContacts.fulfilled]: () => false,
  [contactOperations.deleteContacts.rejected]: () => false,

  [contactOperations.loadContacts.pending]: () => true,
  [contactOperations.loadContacts.fulfilled]: () => false,
  [contactOperations.loadContacts.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  load,
});
