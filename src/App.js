import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

// components
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/create-account" />
        </Route>
        <Route path="/create-account" component={Form} exact />
        <Route path="/table" component={Table} exact />
      </Switch>
    </div>
  );
}

export default App;
