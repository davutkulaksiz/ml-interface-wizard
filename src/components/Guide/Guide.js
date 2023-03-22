import { useState } from "react";
import FileUploadArea from "../FileUploadArea/FileUploadArea";
import { Button } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import FileUploadButton from "../FileUploadButton/FileUploadButton";
import ModelUploadForm from "../ModelUploadForm/ModelUploadForm"

import "./Guide.css";

const Guide = ({
  project,
  existingModels,
  setExistingModels,
  currentModel,
  setCurrentModel,
}) => {
  const [uploadAreaVisible, setUploadAreaVisible] = useState(false);

  function onOpenFormClicked(e) {
    // e.preventDefault();
    // e.stopPropagation();
    setUploadAreaVisible(!uploadAreaVisible);
  }

  let arrowIcon = <ArrowForward />;
  if (uploadAreaVisible) {
    arrowIcon = <ArrowBack />;
  }

  return (
    <div className="guide-wrapper">
      <div className="guide-container">
        <div className="guide-body">
          <div className="guide-upper-area">
            <p className="guide-header">How to Use?</p>
          </div>
          <div className="guide-divider"></div>
          <div className="guide-lower-area">
            <ol className="guide-step-list">
              {project === "interface-wizard" && (
                <>
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
                  <li className="">Alternatively, click the Use An Existing One button to connect to an existing model.</li>
                </>
              )}
              {project === "measure" && (
                <>
                  {/* TODO */}
                  <li>uno</li>
                  <li>due</li>
                  <li>tre</li>
                  <li>quattro</li>
                  <li>cinque</li>
                </>
              )}
              {project === "contribute" && (
                <>
                  {/* TODO */}
                  <li>uno</li>
                  <li>due</li>
                  <li>tre</li>
                  <li>quattro</li>
                  <li>cinque</li>
                </>
              )}
            </ol>
            {project === "interface-wizard" && (
              <div className="upload-container">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={arrowIcon}
                  onClick={(e) => onOpenFormClicked(e)}
                >
                  Open Upload Form
                </Button>
                <Button variant="outlined" size="large">
                  {" "}
                  Use an existing one{" "}
                </Button>
              </div>
            )}
            {project === "measure" && <>{/* TODO */}</>}
            {project === "contribute" && <>{/* TODO */}</>}
          </div>
        </div>
      </div>
      {uploadAreaVisible && (
        <ModelUploadForm />
      )}
    </div>
  );
};

export default Guide;
