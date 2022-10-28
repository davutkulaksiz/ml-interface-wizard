import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Measure from "./pages/measure/Measure";
import Counter from "./pages/counter/Counter";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Route path="/measure" render={(props) => <Measure {...props} />} />
          <Route path="/counter" render={(props) => <Counter {...props} />} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
