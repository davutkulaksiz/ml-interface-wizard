import { useContext } from "react";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./FilesUploadForm.css";
import {
  WizardDispatchContext,
  WizardStateContext,
} from "../../stores/wizardStore/wizardContext";

const FilesUploadForm = () => {
  const state = useContext(WizardStateContext);
  const dispatch = useContext(WizardDispatchContext);

  const handleFileChange = (e, type) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const action = {
        type: type,
        file: e.target.files,
      };
      dispatch(action);
      console.log(`action invoked with ${action}`);
    }
  };

  const onClearFile = (type) => {
    const action = {
      type: type,
      file: null,
    };
    dispatch(action);
  };

  return (
    <>
      <div className="upload-area">
        <div className="mandatory-area">
          <FileUploadButton
            headerText={"Model file (as .pkl)"}
            buttonText={"Model File"}
            onClick={() => {}}
            onChange={(e) => {
              handleFileChange(e, "model");
            }}
          />
          {state.model && (
            <div className="uploaded-file-area">
              <p>{state.model[0].name}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  onClearFile("model");
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )}
          <FileUploadButton
            headerText={"Provide a configuration file (as .json)"}
            buttonText={"Configuration File"}
            onClick={() => {}}
            onChange={(e) => {
              handleFileChange(e, "config");
            }}
          />
          {state.config && (
            <div className="uploaded-file-area">
              <p>{state.config[0].name}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  onClearFile("config");
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
            onChange={(e) => {
              handleFileChange(e, "intsf");
            }}
          />
          {state.intsf && (
            <div className="uploaded-file-area">
              <p>{state.intsf[0].name}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  onClearFile("intsf");
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
            onChange={(e) => {
              handleFileChange(e, "outtsf");
            }}
          />
          {state.outtsf && (
            <div className="uploaded-file-area">
              <p>{state.outtsf[0].name}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={() => {
                  onClearFile("outtsf");
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

export default FilesUploadForm;
