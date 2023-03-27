import React, { useEffect, useReducer, useState } from "react";
import Card from "../Card/Card";
import {
  FilesUploadContext,
  FilesUploadDispatchContext,
} from "../FilesUploadForm/filesUploadContext";
import {
  filesStateReducer,
  initialState,
} from "../FilesUploadForm/filesUploadState";
import Form from "../Form/Form";
import Guide from "../Guide/Guide";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { Snackbar, Alert } from "@mui/material";
import "./Wizard.css";

const Wizard = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const [parsedConfig, setParsedConfig] = useState({});

  const [filesState, dispatch] = useReducer(filesStateReducer, initialState);

  const onGenerateFormClick = () => {
    if(!filesState.config && !filesState.model) {
      dispatch({
        type: 'setMessage',
        message: 'Provide both mandatory files!'
      })
      return
    }
    setLoading(true)
    handleConfigFileChange(filesState.config)
    setIsGuideOpen(false)
  }

  const handleConfigFileChange = (configFile) => {
    const reader = new FileReader();

    reader.onload = () => {
      setParsedConfig(JSON.parse(reader.result));
    };

    reader.readAsText(configFile[0]);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    
    dispatch({type: 'clearMessage'})
  };

  const SnackbarError = (
    <Snackbar
      open={filesState.message !== null}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity="error"
        sx={{ width: "100%" }}
      >
        {filesState.message}
      </Alert>
    </Snackbar>
  );

  return (
    <FilesUploadContext.Provider value={filesState}>
      <FilesUploadDispatchContext.Provider value={dispatch}>
        <>
          {isGuideOpen ? (
            <>
            {SnackbarError}
             <Guide
              project="interface-wizard"
              onGenerateFormClick={() => {
                console.log("generate form clicked");
                onGenerateFormClick()
              }}
            />
            </>
          ) : loading ? (
            <SkeletonLoader />
          ) : (
            <div className="wizard-wrapper">
              <div className="wizard-container">
                <div className="info-container">
                  <div className="info-group">
                    <Card type="model" heading="Regression" />
                    <Card type="metadata" heading="JSON" />
                  </div>
                  <div className="info-group">
                    <Card type="version" heading="Version" text="1.0.2" />
                    <Card type="date" heading="Created at" text="22.10.2022" />
                  </div>
                </div>
                <Form parsedConfig={parsedConfig} />
              </div>
            </div>
          )}
        </>
      </FilesUploadDispatchContext.Provider>
    </FilesUploadContext.Provider>
  );
};

export default Wizard;
