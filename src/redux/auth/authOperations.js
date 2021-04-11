import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  token,
  authSingUp,
  authLogIn,
  authLogOut,
  getUser,
} from 'services/API';

const logIn = createAsyncThunk(
  'auth/login',
  async (requestLoginData, { rejectWithValue }) => {
    try {
      const response = await authLogIn(requestLoginData);
      token.set(response.data.token);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const register = createAsyncThunk(
  'auth/register',
  async (requestDataRegister, { rejectWithValue }) => {
    try {
      const response = await authSingUp(requestDataRegister);

      token.set(response.data.token);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await authLogOut();
      token.unset();
    } catch (e) {
      return rejectWithValue(e.message);
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
      const response = getUser();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const exports = {
  logIn,
  register,
  logOut,
  getCurrentUser,
};

export default exports;
