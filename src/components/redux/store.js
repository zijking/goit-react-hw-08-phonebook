import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import phoneBook from './contacts/contacts-reducer';

// const store = createStore(rootReducer, composeWithDevTools());
const middleWare = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: phoneBook,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

export default store;
