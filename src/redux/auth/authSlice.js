import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [authOperations.logIn.fulfilled](state, action) {
      setData(state, action);
    },
    [authOperations.register.fulfilled](state, action) {
      setData(state, action);
    },
    [authOperations.logOut.fulfilled](state, _) {
      unSetData(state);
    },

    [authOperations.getCurrentUser.fulfilled](state, action) {
      refreshUser(state, action);
    },
    [authOperations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
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

function unSetData(state) {
  state.user = initialState.user;
  state.token = initialState.token;
  state.isAuth = initialState.isAuth;
}

function refreshUser(state, action) {
  console.log(action.payload);
  state.user = action.payload.user;
  state.isAuth = true;
  state.isRefreshing = false;
  console.log(' after refreshUser' + state.user);
}

export default userSlice.reducer;
