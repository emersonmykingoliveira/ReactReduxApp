import { configureStore } from "@reduxjs/toolkit";//add the redux store to the application
import usersReducer from "./features/users/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});