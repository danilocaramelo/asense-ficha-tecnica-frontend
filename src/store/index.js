import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./ducks/auth";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
