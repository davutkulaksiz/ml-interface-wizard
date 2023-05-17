import React, { useEffect, useReducer } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import WizardGuide from "../../components/WizardGuide/WizardGuide";
import "./Interface.css";
import { Switch, Route } from "react-router-dom";
import Wizard from "../../components/Wizard/Wizard";
import WizardFileForm from "../../components/WizardFileForm/WizardFileForm";
import {
  initialState,
  readAndParseConfig,
  wizardStateReducer,
} from "../../stores/wizardStore/wizardReducer";
import {
  WizardStateContext,
  WizardDispatchContext,
} from "../../stores/wizardStore/wizardContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Interface = () => {
  const [state, dispatch] = useReducer(wizardStateReducer, initialState);
  const [parsedConfig, setParsedConfig] = useLocalStorage("config", null);

  //NOTE: Every time the config is parsed(validated) save it to localStorage.
  useEffect(() => {
    readAndParseConfig(state.config, ({ parsedConfig, message }) => {
      if (message) {
        dispatch({
          type: "setMessage",
          message: message,
        });
      } else {
        setParsedConfig(parsedConfig);
      }
    });
  }, [state.config]);

  return (
    <>
      <Navbar />
      <div className="interface-container">
        <WizardStateContext.Provider value={state}>
          <WizardDispatchContext.Provider value={dispatch}>
            <Switch>
              <Route
                path="/interface-wizard/upload"
                render={(props) => <WizardFileForm {...props} />}
              />
              <Route
                path="/interface-wizard/form/:modelId"
                render={(props) => <Wizard {...props} />}
              />
              <Route
                path="/interface-wizard/"
                render={(props) => <WizardGuide {...props} />}
              />
            </Switch>
          </WizardDispatchContext.Provider>
        </WizardStateContext.Provider>
      </div>
    </>
  );
};

export default Interface;
