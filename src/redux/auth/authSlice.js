import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isRefreshing: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [authOperations.logIn.pending](state, _) {
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      setData(state, action);
    },
    [authOperations.logIn.rejected](state, action) {
      setError(state, action);
    },

    [authOperations.register.pending](state, _) {
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      setData(state, action);
    },
    [authOperations.register.rejected](state, action) {
      setError(state, action);
    },

    [authOperations.authByGoogle.fulfilled](state, action) {
      state.token = action.payload;
      state.isAuth = true;
    },

    [authOperations.logOut.pending](state, _) {
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state, _) {
      unSetData(state);
    },
    [authOperations.logOut.rejected](state, action) {
      setError(state, action);
    },

    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [authOperations.getCurrentUser.fulfilled](state, action) {
      refreshUser(state, action);
    },
    [authOperations.getCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

function setData(state, action) {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isAuth = true;
}

function setError(state, action) {
  state.error = action.payload;
  state.user = null;
  state.token = null;
  state.isAuth = false;
}

function unSetData(state) {
  state.user = initialState.user;
  state.token = initialState.token;
  state.isAuth = initialState.isAuth;
}

function refreshUser(state, action) {
  state.user = action.payload;
  state.isAuth = true;
  state.isRefreshing = false;
}

export default userSlice.reducer;
