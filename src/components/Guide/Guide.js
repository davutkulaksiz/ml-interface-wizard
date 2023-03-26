import { useState } from "react";
import FileUploadArea from "../FileUploadArea/FileUploadArea";
import { Alert, Button, Snackbar } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import ModelUploadForm from "../ModelUploadForm/ModelUploadForm";

import "./Guide.css";

const Guide = ({
  project,
  existingModels,
  setExistingModels,
  setIsGuideOpen,
  setCurrentModel,
  setCurrentConfigFile,
  setCurrentInputTSF,
  setCurrentOutputTSF,
}) => {
  const [uploadedModel, setUploadedModel] = useState(null);
  const [uploadedConfig, setUploadedConfig] = useState(null);
  const [uploadedInputTSF, setUploadedInputTSF] = useState(null);
  const [uploadedOutputTSF, setUploadedOutputTSF] = useState(null);
  const [showInterfaceUploadArea, setShowInterfaceUploadArea] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const checkForm = () => {
    if (!uploadedModel) {
      setOpenSnackbar(true);
      return false;
    }
    if (!uploadedConfig) {
      setOpenSnackbar(true);
      return false;
    }
    return true;
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleGenerateForm = () => {
    if (!checkForm()) {
      return;
    }
    setCurrentModel(uploadedModel);
    setCurrentConfigFile(uploadedConfig);
    setCurrentInputTSF(uploadedInputTSF);
    setCurrentOutputTSF(uploadedOutputTSF);
  };

  const SnackbarError = (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity="error"
        sx={{ width: "100%" }}
      >
        Provide both mandatory files!
      </Alert>
    </Snackbar>
  );

  return (
    <div className="guide-wrapper">
      {SnackbarError}
      <div className="guide-container">
        <div className="guide-body">
          <div className="guide-upper-area">
            <p className="guide-header">
              {project === "interface-wizard" && showInterfaceUploadArea
                ? "File Upload Area"
                : "How to Use?"}
            </p>
          </div>
          <div className="guide-divider"></div>
          <div className="guide-lower-area">
            {project === "interface-wizard" && !showInterfaceUploadArea ? (
              <ol className="guide-step-list">
                <li>
                  Open the Upload Form and provide the necessary files. Model
                  and configuration files are mandatory.
                </li>
                <li>
                  If your model comes with transformers, you can use the
                  appropriate buttons indicated on the form. These are optional.
                </li>
                <li>Fill out the generated form.</li>
                <li>Make a prediction by clicking on the Predict button.</li>
                <li>
                  Alternatively, click the Use An Existing One button to connect
                  to an existing model.
                </li>
              </ol>
            ) : (
              <ModelUploadForm
                setCurrentModel={setUploadedModel}
                setCurrentConfigFile={setUploadedConfig}
                setCurrentInputTSF={setUploadedInputTSF}
                setCurrentOutputTSF={setUploadedOutputTSF}
              />
            )}
            {project === "measure" && (
              <ol className="guide-step-list">
                {/* TODO */}
                <li>uno</li>
                <li>due</li>
                <li>tre</li>
                <li>quattro</li>
                <li>cinque</li>
              </ol>
            )}
            {project === "contribute" && (
              <ol className="guide-step-list">
                {/* TODO */}
                <li>uno</li>
                <li>due</li>
                <li>tre</li>
                <li>quattro</li>
                <li>cinque</li>
              </ol>
            )}
            {project === "interface-wizard" && (
              <div className="upload-container">
                {showInterfaceUploadArea ? (
                  <>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={showInterfaceUploadArea && <ArrowBack />}
                      onClick={() =>
                        setShowInterfaceUploadArea(!showInterfaceUploadArea)
                      }
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      color="success"
                      onClick={() => {
                        handleGenerateForm();
                      }}
                    >
                      Generate the Form
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => console.log("Clicked on the button")}
                    >
                      Use an existing one
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={!showInterfaceUploadArea && <ArrowForward />}
                      startIcon={showInterfaceUploadArea && <ArrowBack />}
                      onClick={() =>
                        setShowInterfaceUploadArea(!showInterfaceUploadArea)
                      }
                    >
                      {showInterfaceUploadArea ? "Back" : "Open Upload Form"}
                    </Button>
                  </>
                )}
                
              </div>
            )}
            {project === "measure" && <>{/* TODO */}</>}
            {project === "contribute" && <>{/* TODO */}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
