import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogIn: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLogIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = null;
      state.token = null;
      state.isLogIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLogIn = true;
      state.isFetchingUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
