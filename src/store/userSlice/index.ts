import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../../api/userService";

const initialState = {
  isAuth: false,
  token: null,
  data: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.isAuth = true;
      state.data = payload.data;
    },
    // Чыгуу
    logout: (state) => {
      state.isAuth = false;
      state.token = null;
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuth = true;
        state.data = { ...action.payload.data };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isAuth = false;
        state.token = null;
        state.data = {};
        console.error("Login failed:", action.payload);
      });
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
