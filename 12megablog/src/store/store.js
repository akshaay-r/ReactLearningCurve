import { configureStore } from "@reduxjs/toolkit";
import { login } from "./authslice";
import authReducer from "./authslice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    // TODO post : postSlice
  },
});

export default store;
