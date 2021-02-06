import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import phoneBook from './contacts/contacts-reducer';
import userData from './users/users-reducer';

// const store = createStore(rootReducer, composeWithDevTools());
const middleWare = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: phoneBook,
    auth: persistReducer(authPersistConfig, userData),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: middleWare,
});

// export default store;
export const persistor = persistStore(store);
