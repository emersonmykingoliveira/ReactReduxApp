//package to handle our different pages as a development dependency
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import { UserList } from "./features/users/UserList";
import React from "react";

//Application Structure
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}