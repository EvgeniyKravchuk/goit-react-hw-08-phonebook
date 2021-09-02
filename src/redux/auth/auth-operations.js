import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../../axios/default-options";

export const register = createAsyncThunk("auth/register", async (userData) => {
  try {
    const { data } = await axios.post("/users/signup", userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return console.log(error.message);
  }
});

export const logIn = createAsyncThunk("auth/logIn", async (userData) => {
  try {
    const { data } = await axios.post("/users/login", userData);
    token.set(data.token);
    return data;
  } catch (error) {
    return console.log(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
    return;
  } catch (error) {
    return console.log(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const persistedToken = getState().auth.token;

    if (persistedToken !== null) {
      token.set(persistedToken);
      try {
        const { data } = await axios.get("/users/current");
        return data;
      } catch (error) {
        return console.log(error.message);
      }
    }
    return rejectWithValue(alert("Упс, нужно авторизироваться🙃"));
  }
);
