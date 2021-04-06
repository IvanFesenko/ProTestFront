import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5050';

const token = {
  set(tokenID) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenID}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logIn = createAsyncThunk(
  'auth/login',
  async (requestLoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login', requestLoginData);
      console.log('register  ', response.data);
      token.set(response.data.token);

      return response.data;
    } catch (e) {
      return rejectWithValue;
    }
  },
);

const register = createAsyncThunk(
  'auth/register',
  async (requestDataRegister, { rejectWithValue }) => {
    try {
      const response = await axios.post('/registration', requestDataRegister);

      token.set(response.data.token);
    } catch (e) {
      return rejectWithValue;
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/logout');
      token.unset();
    } catch (e) {
      return rejectWithValue;
    }
  },
);

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const {
      auth: { token: persistedToken },
    } = thunkAPI.getState();

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const response = await axios.get('/currentUser');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export default {
  logIn,
  register,
  logOut,
  getCurrentUser,
};
