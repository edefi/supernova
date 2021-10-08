import React from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import history from "./routerHistory";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact strict path="/">
          <Home />
        </Route>
        <Route exact strict path="/detail/:name">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
