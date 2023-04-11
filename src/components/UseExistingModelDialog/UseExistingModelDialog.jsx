import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import "./UseExistingModelDialog.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const UseExistingModelDialog = ({ open, onCloseClicked }) => {
  const history = useHistory();
  const [config, setConfig] = useState(null);
  const [parsedConfig, setParsedConfig] = useLocalStorage("config", null);
  const [modelId, setModelId] = useState("");

  const onFileChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setConfig(e.target.files);
      handleConfigFileChange(e.target.files);
    }
  };

  const handleConfigFileChange = (configFile) => {
    try {
      const reader = new FileReader();

      reader.onload = () => {
        const result = JSON.parse(reader.result);
        setParsedConfig(result);
      };

      reader.readAsText(configFile[0]);
    } catch (e) {
      console.error(e);
    }
  };

  const onGenerateClicked = () => {
    history.push(`interface-wizard/form/${modelId}`);
  };

  const onClearFile = () => {
    setConfig(null);
  };

  return (
    <>
      <Dialog open={open} onClose={onCloseClicked}>
        <DialogTitle>Use an Existing Model</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you have already uploaded a model before, you can type in the
            Model ID and upload the relevant configuration file. Then, you can
            generate the form.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="model_id"
            label="Model ID"
            type="text"
            fullWidth
            variant="outlined"
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
          />
          <FileUploadButton
            headerText={""}
            buttonText="Configuration File"
            onClick={() => {}}
            onChange={onFileChange}
          />
          {config && (
            <div className="uploaded-file-area">
              <p>{config[0].name}</p>
              <IconButton
                aria-label="delete"
                size="small"
                color="secondary"
                onClick={onClearFile}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseClicked}>Cancel</Button>
          <Button
            variant="contained"
            size="large"
            color="success"
            disabled={config == null || modelId.length !== 24}
            onClick={onGenerateClicked}
          >
            Generate the Form
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UseExistingModelDialog;
