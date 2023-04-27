import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import "./UseExistingModelDialog.css";
import { Alert, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  WizardDispatchContext,
  WizardStateContext,
} from "../../stores/wizardStore/wizardContext";

const UseExistingModelDialog = ({ open, onCloseClicked }) => {
  const history = useHistory();
  const state = useContext(WizardStateContext);
  const dispatch = useContext(WizardDispatchContext);
  const [modelId, setModelId] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    if (state.message) {
      setSnackOpen(true);
    }
  }, [state.message]);

  const onFileChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const action = {
        type: "config",
        file: e.target.files,
      };
      dispatch(action);
    }
  };

  const onGenerateClicked = () => {
    history.push(`interface-wizard/form/${modelId}`);
  };

  const onClearFile = () => {
    const action = {
      type: "config",
      file: null,
    };
    dispatch(action);
  };

  const invalidState =
    state.config == null || modelId.length !== 24 || state.message != null;

  return (
    <>
      <Snackbar
        message={state.message}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={() => setSnackOpen(false)}
        open={snackOpen}
      >
        <Alert severity="error" onClose={() => setSnackOpen(false)}>
          {state.message}
        </Alert>
      </Snackbar>
      <Dialog open={open} onClose={onCloseClicked}>
        <DialogTitle>Use an Existing Model</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you have already uploaded a model before, you can type in the
            Model ID and upload the relevant configuration file. Then, you can
            generate the form.
          </DialogContentText>

          {invalidState && (
            <div>
              <DialogContentText sx={{ color: "red" }}>
                * You need to provide a configuration file and the Model ID.
              </DialogContentText>
              <DialogContentText sx={{ color: "red" }}>
                * Model ID's are exactly 24 characters long.
              </DialogContentText>
            </div>
          )}
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
          {state.config && (
            <div className="uploaded-file-area">
              <p>{state.config[0].name}</p>
              <IconButton
                aria-label="delete"
                size="medium"
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
            disabled={invalidState}
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
