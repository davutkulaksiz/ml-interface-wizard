import { useState } from "react";
import FileUploadArea from "../FileUploadArea/FileUploadArea";
import { Button } from "@mui/material";
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

  const handleGenerateForm = () => {
    if (uploadedModel) {
      setCurrentModel(uploadedModel);
      setCurrentConfigFile(uploadedConfig);
      setCurrentInputTSF(uploadedInputTSF);
      setCurrentOutputTSF(uploadedOutputTSF);
    } else {
      console.log("Please Upload Mandatory Files");
    }
  };

  return (
    <div className="guide-wrapper">
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
                  Use the buttons to the right to upload your model and
                  configuration. These files are mandatory.
                </li>
                <li>
                  If your model comes with transformers, you can use the
                  appropriate buttons on the right. These are optional.
                </li>
                <li>Fill out the generated form.</li>
                <li>Make a prediction by clicking on the Predict button.</li>
                <li className="">
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
