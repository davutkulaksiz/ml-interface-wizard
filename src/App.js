import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
