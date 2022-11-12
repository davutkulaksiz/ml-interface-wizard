import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Measure from "./pages/measure/Measure";
import Contribute from "./pages/contribute/Contribute";
import ImageClassification from "./pages/image-classification/ImageClassification";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Route path="/measure" render={(props) => <Measure {...props} />} />
          <Route
            path="/contribute"
            render={(props) => <Contribute {...props} />}
          />
          <Route
            path="/image-classification"
            render={(props) => <ImageClassification {...props} />}
          />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
