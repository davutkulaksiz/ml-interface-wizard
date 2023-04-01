import { useContext } from "react";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./FilesUploadForm.css";
import {
  FilesUploadContext,
  FilesUploadDispatchContext,
} from "./filesUploadContext";

const FilesUploadForm = () => {
  const fileState = useContext(FilesUploadContext);
  const dispatch = useContext(FilesUploadDispatchContext);

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
          {fileState.model && (
            <div className="uploaded-file-area">
              <p>{fileState.model[0].name}</p>
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
          {fileState.config && (
            <div className="uploaded-file-area">
              <p>{fileState.config[0].name}</p>
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
          {fileState.intsf && (
            <div className="uploaded-file-area">
              <p>{fileState.intsf[0].name}</p>
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
          {fileState.outtsf && (
            <div className="uploaded-file-area">
              <p>{fileState.outtsf[0].name}</p>
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
