import "../../pages/interface/Interface.css";
import "../WizardGuide/WizardGuide.css";
import "./WizardFileForm.css";
import { ArrowBack } from "@mui/icons-material";
import { Alert, Button, Snackbar } from "@mui/material";
import FilesUploadForm from "../FilesUploadForm/FilesUploadForm";
import { useContext } from "react";

import {
  FilesUploadContext,
  FilesUploadDispatchContext,
} from "../FilesUploadForm/filesUploadContext";
import { useHistory } from "react-router-dom";

const WizardFileForm = ({}) => {
  const history = useHistory();
  const filesState = useContext(FilesUploadContext);
  const dispatch = useContext(FilesUploadDispatchContext);

  const onBackClicked = () => {
    history.goBack();
  };

  const onGenerateFormClick = () => {
    if (!filesState.config && !filesState.model) {
      dispatch({
        type: "setMessage",
        message: "Provide both mandatory files!",
      });
      return;
    }
    console.log(filesState);
    history.push("/interface-wizard/form");
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "clearMessage" });
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
    <>
      <div className="guide-wrapper">
        <div className="guide-container">
          {SnackbarError}
          <div className="guide-body">
            <div className="guide-upper-area">
              {/**Head component */}
              <p className="guide-header">File Upload Area</p>
            </div>
            <div className="guide-divider"></div>
            <div className="guide-lower-area">
              {/**Body */}
              <FilesUploadForm />
              <div className="upload-container">
                <>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ArrowBack />}
                    onClick={() => {
                      onBackClicked();
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    color="success"
                    onClick={() => {
                      onGenerateFormClick();
                    }}
                  >
                    Generate the Form
                  </Button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WizardFileForm;
