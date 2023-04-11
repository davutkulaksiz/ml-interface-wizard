import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import "./WizardGuide.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import UseExistingModelDialog from "../UseExistingModelDialog/UseExistingModelDialog";

const WizardGuide = ({}) => {
  const history = useHistory();
  const [useExistingOpen, setExistingOpen] = useState(false);
  const onOpenUploadFormClick = () => {
    console.log("navigate to /upload clicked");
    history.push("interface-wizard/upload");
  };
  const onUseExistingClick = () => {
    console.log("Existing clicked.");
    setExistingOpen(true);
  };

  return (
    <div className="guide-wrapper">
      <UseExistingModelDialog
        open={useExistingOpen}
        onCloseClicked={() => setExistingOpen(false)}
      />
      <div className="guide-container">
        <div className="guide-body">
          <div className="guide-upper-area">
            {/**Head component */}
            <p className="guide-header"> How to Use?</p>
          </div>
          <div className="guide-divider"></div>
          <div className="guide-lower-area">
            {/**Body */}
            <ol className="guide-step-list">
              <li>
                Open the Upload Form and provide the necessary files. Model and
                configuration files are mandatory.
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
            <div className="upload-container">
              <Button
                variant="outlined"
                size="large"
                onClick={onUseExistingClick}
              >
                Use an existing one
              </Button>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => {
                  onOpenUploadFormClick();
                }}
              >
                Open Upload Form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardGuide;
