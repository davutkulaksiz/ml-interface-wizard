import React, { useState } from "react";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ModelUploadForm.css";

const ModelUploadForm = ({
  setCurrentModel,
  setCurrentConfigFile,
  setCurrentInputTSF,
  setCurrentOutputTSF,
}) => {
  const [modelName, setModelName] = useState(null);
  const [configName, setConfigName] = useState(null);
  const [inputTSFName, setInputTSFName] = useState(null);
  const [outputTSFName, setOutputTSFName] = useState(null);

  const handleModelUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setModelName(e.target.files[0].name);
      setCurrentModel(e.target.files);
      console.log(e.target.files);
    }
  };

  const handleConfigUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setConfigName(e.target.files[0].name);
      setCurrentConfigFile(e.target.files);
      console.log(e.target.files);
    }
  };

  const handleInputTSFUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setInputTSFName(e.target.files[0].name);
      setCurrentInputTSF(e.target.files);
      console.log(e.target.files);
    }
  };

  const handleOutputTSFUpload = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setOutputTSFName(e.target.files[0].name);
      setCurrentOutputTSF(e.target.files);
      console.log(e.target.files);
    }
  };

  return (
    <>
      <div className="upload-area">
        <div className="mandatory-area">
          <FileUploadButton
            headerText={"Model file (as .pkl)"}
            buttonText={"Model File"}
            onClick={() => {}}
            onChange={handleModelUpload}
          />
          {modelName && (
            <div className="uploaded-file-area">
              <p>{modelName}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  setModelName("");
                  setCurrentModel(null);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )}
          <FileUploadButton
            headerText={"Provide a configuration file (as .json)"}
            buttonText={"Configuration File"}
            onClick={() => setCurrentConfigFile}
            onChange={handleConfigUpload}
          />
          {configName && (
            <div className="uploaded-file-area">
              <p>{configName}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  setConfigName("");
                  setCurrentConfigFile(null);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )}
        </div>
        <div className="optional-area">
          <FileUploadButton
            headerText={"Input Transformer (as .pkl)"}
            buttonText={"Input TSF file"}
            variant={"outlined"}
            onClick={() => {}}
            onChange={handleInputTSFUpload}
          />
          {inputTSFName && (
            <div className="uploaded-file-area">
              <p>{inputTSFName}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  setInputTSFName("");
                  setCurrentInputTSF(null);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )}
          <FileUploadButton
            headerText={"Output Transformer (as .pkl)"}
            buttonText={"Output TSF file"}
            variant={"outlined"}
            onClick={() => {}}
            onChange={handleOutputTSFUpload}
          />
          {outputTSFName && (
            <div className="uploaded-file-area">
              <p>{outputTSFName}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  setOutputTSFName("");
                  setCurrentOutputTSF(null);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModelUploadForm;
