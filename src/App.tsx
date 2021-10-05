import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import history from "./routerHistory";

function App() {
  return (
    <Router history={history}>
        <Switch>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
