import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/home/Home";
import Measure from "./pages/measure/Measure";
import Contribute from "./pages/contribute/Contribute";
import Interface from "./pages/interface/Interface";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};
const theme = createTheme(themeOptions);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/home" render={(props) => <Home {...props} />} />
            <Route path="/measure" render={(props) => <Measure {...props} />} />
            <Route
              path="/contribute"
              render={(props) => <Contribute {...props} />}
            />
            <Route
              path="/interface-wizard"
              render={(props) => <Interface {...props} />}
            />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
