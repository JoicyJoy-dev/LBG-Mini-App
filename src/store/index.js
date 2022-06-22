import { combineReducers, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import profiles from "../reducers/profile";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: profiles,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
