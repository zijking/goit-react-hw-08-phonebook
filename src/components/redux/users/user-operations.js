import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//вхід користувача
const loginUser = createAsyncThunk('loginUser', async credentials => {
  try {
    // console.log('Login credentials:', credentials);

    const res = await axios.post('/users/login', credentials);

    // console.log('Login response: ', res);
    // console.log('Login tokin: ', res.token);

    token.set(res.data.token);
    return res.data;
  } catch (error) {
    console.log('error state: ', error);
    // return rejectWithValue(error.response.data);
    throw error;
  }
});

//створення користувача
const registrationUser = createAsyncThunk(
  'registrationUser',

  async credentials => {
    try {
      //   console.log('Registration credentials', credentials);
      const res = await axios.post('/users/signup', credentials);
      //   console.log('Registration response', res.data);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      console.log('Registration response error', error.message);
      throw error;
    }
  },
);

const getCurrentUser = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkAPI) => {
    try {
      // const res = await axios.post('/users/login', token);
      // token.set(res.data.token);
      // return res.data;
      const state = thunkAPI.getState();
      // console.log('state getCurrentUser:', state);
      const tokenPersister = state.auth.token;
      // console.log(tokenPersister);

      if (tokenPersister === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(tokenPersister);

      try {
        const res = await await axios.get('/users/current');
        // console.log('res currentUser: ', res);
        return res.data;
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  },
);

const logOutUser = createAsyncThunk('logoutUser', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    throw error;
  }
});

const operations = {
  loginUser,
  registrationUser,
  logOutUser,
  getCurrentUser,
};

export default operations;
