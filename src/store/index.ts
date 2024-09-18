import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quoteSlice } from "./quoteSlice";
import storage from "redux-persist/lib/storage"; // для использования localStorage
import userReducer from "./userSlice/index";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  [quoteSlice.name]: quoteSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
