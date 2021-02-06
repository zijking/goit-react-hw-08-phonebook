import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import operationsUser from './user-operations';

const initUser = {
  name: '',
  email: '',
};

const user = createReducer(initUser, {
  [operationsUser.loginUser.fulfilled]: (state, { payload }) => {
    return { ...payload.user };
  },

  [operationsUser.registrationUser.fulfilled]: (state, { payload }) => {
    // console.log('payload', payload);
    return { ...payload.user };
  },

  [operationsUser.getCurrentUser.fulfilled]: (state, { payload }) => {
    // console.log('payloadCurrent: ', payload);
    return { ...payload };
  },

  [operationsUser.loginUser.rejected]: (state, payload) => {
    // console.log('operationsUser.loginUser.rejected');
    return state;
  },
  [operationsUser.logOutUser.fulfilled]: (state, action) => {
    return { ...initUser };
  },
});

const token = createReducer(null, {
  [operationsUser.loginUser.fulfilled]: (state, { payload }) => {
    return payload.token;
  },
  [operationsUser.registrationUser.fulfilled]: (state, { payload }) => {
    return payload.token;
  },
  [operationsUser.logOutUser.fulfilled]: (state, action) => {
    return null;
  },
  [operationsUser.getCurrentUser.fulfilled]: (s, p) => {
    return s;
  },
});

const isLoggedIn = createReducer(false, {
  [operationsUser.loginUser.fulfilled]: (state, payload) => {
    return true;
  },
  [operationsUser.loginUser.rejected]: (state, payload) => {
    return false;
  },
  [operationsUser.registrationUser.fulfilled]: (state, payload) => {
    return true;
  },
  [operationsUser.registrationUser.rejected]: (state, payload) => {
    return false;
  },
  [operationsUser.logOutUser.fulfilled]: (state, payload) => {
    return false;
  },
  [operationsUser.getCurrentUser.fulfilled]: (state, payload) => true,
});

export default combineReducers({
  user,
  token,
  isLoggedIn,
});
