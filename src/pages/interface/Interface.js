import React, { useReducer } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import WizardGuide from "../../components/WizardGuide/WizardGuide";
import "./Interface.css";
import { Switch, Route } from "react-router-dom";
import Wizard from "../../components/Wizard/Wizard";
import WizardFileForm from "../../components/WizardFileForm/WizardFileForm";
import {
  filesStateReducer,
  initialState,
} from "../../components/FilesUploadForm/filesUploadState";
import {
  FilesUploadContext,
  FilesUploadDispatchContext,
} from "../../components/FilesUploadForm/filesUploadContext";

const Interface = () => {
  const [filesState, dispatch] = useReducer(filesStateReducer, initialState);

  return (
    <>
      <Navbar />
      <div className="interface-container">
        <Sidebar />
        <FilesUploadContext.Provider value={filesState}>
          <FilesUploadDispatchContext.Provider value={dispatch}>
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
          </FilesUploadDispatchContext.Provider>
        </FilesUploadContext.Provider>
      </div>
    </>
  );
};

export default Interface;
