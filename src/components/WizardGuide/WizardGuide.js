import {
  Button,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
import "./WizardGuide.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import UseExistingModelDialog from "../UseExistingModelDialog/UseExistingModelDialog";
import { Box } from "@mui/system";

const steps = [
  {
    label: "Upload Form",
    description: `Open the Upload Form and provide the necessary files. Model and
                configuration files are mandatory.`,
  },
  {
    label: "Optional - Transformers",
    description: `If your model comes with transformers, you can use the
                appropriate buttons indicated on the form. These are optional.`,
  },
  {
    label: "Fill out the generated form.",
    description: ``,
  },
  {
    label: "Make a prediction by clicking on the Predict button.",
    description: ``,
  },
  {
    label: `Alternatively, click the Use An Existing One button to connect
                to an existing model.`,
    description:
      "If you've done this before, this is a quicker option. Just use the configuration file and the Model ID.",
  },
];

const WizardStepper = () => {
  return (
    <>
      <Box>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} active={true}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};

const WizardGuide = ({ }) => {
  const history = useHistory();
  const [useExistingOpen, setExistingOpen] = useState(false);

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
            <WizardStepper />
            <div className="upload-container">
              <Button
                variant="outlined"
                size="large"
                onClick={onUseExistingClick}
              >
                Use an existing one
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardGuide;
