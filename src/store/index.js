import { applyMiddleware, combineReducers, createStore } from "redux";
import { quoteReducer } from "./quoteReducer/quoteReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  quote: quoteReducer,
  // task: taskReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
