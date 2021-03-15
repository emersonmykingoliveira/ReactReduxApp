import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { fetchUsers } from "./features/users/usersSlice";
import store from "./store";

store.dispatch(fetchUsers());

//wrap the application inside the store by using Redux's provider wrapper
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);