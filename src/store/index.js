import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/index";
import { quoteSlice } from "./quoteSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    [quoteSlice.name]: quoteSlice.reducer,
  },
});

export default store;
