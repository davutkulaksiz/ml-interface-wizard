import "../../pages/interface/Interface.css";
import "../WizardGuide/WizardGuide.css";
import "./WizardFileForm.css";
import { ArrowBack } from "@mui/icons-material";
import { Alert, Button, Snackbar } from "@mui/material";
import FilesUploadForm from "../FilesUploadForm/FilesUploadForm";
import { useContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  FilesUploadContext,
  FilesUploadDispatchContext,
} from "../FilesUploadForm/filesUploadContext";
import { useHistory } from "react-router-dom";
import { uploadModelWrapper } from "../../api/predictionsApi";

const WizardFileForm = ({}) => {
  const history = useHistory();
  const filesState = useContext(FilesUploadContext);
  const dispatch = useContext(FilesUploadDispatchContext);
  const [parsedConfig, setParsedConfig] = useLocalStorage("config", null);

  const onBackClicked = () => {
    history.goBack();
  };

  const handleConfigFileChange = async (configFile) => {
    try {
      const reader = new FileReader();

      reader.onload = () => {
        const result = JSON.parse(reader.result);
        setParsedConfig(result);
        upload();
      };

      reader.readAsText(configFile[0]);
    } catch (e) {
      console.error(e);
      dispatchError("Invalid configuration format.");
    }
  };

  async function upload() {
    try {
      const args = {
        model: filesState.model[0],
        config: parsedConfig,
        intsf: filesState.intsf?.[0],
        outtsf: filesState.outtsf?.[0],
      };
      const result = await uploadModelWrapper(args);
      console.log(result);
      history.push(`/interface-wizard/form/${result.model_id}`);
    } catch (e) {
      console.error(e);
      dispatchError("Upload failed. Please try again.");
    }
  }

  const onGenerateFormClick = async () => {
    if (!filesState.config || !filesState.model) {
      dispatchError("Please provide both mandatory files.");
      return;
    }
    console.log(filesState);
    handleConfigFileChange(filesState.config);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "clearMessage" });
  };

  const dispatchError = (message) => {
    dispatch({
      type: "setMessage",
      message: message,
    });
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
