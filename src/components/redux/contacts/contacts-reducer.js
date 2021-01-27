import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContactsSuccess]: (state, { payload }) => {
    // console.log(payload);

    const updateState = [...state, payload];

    return updateState;
  },
  [actions.deleteContactsSuccess]: (state, { payload }) => {
    // console.log('delete:', payload);
    const updateState = state.filter(({ id }) => id !== payload);

    return updateState;
  },
  [actions.loadContactsSuccess]: (_, { payload }) => {
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
  [actions.addContactsRequest]: () => true,
  [actions.addContactsSuccess]: () => false,
  [actions.addContactsError]: () => false,

  [actions.deleteContactsRequest]: () => true,
  [actions.deleteContactsSuccess]: () => false,
  [actions.deleteContactsError]: () => false,

  [actions.loadContactsRequest]: () => true,
  [actions.loadContactsSuccess]: () => false,
  [actions.loadContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  load,
});
