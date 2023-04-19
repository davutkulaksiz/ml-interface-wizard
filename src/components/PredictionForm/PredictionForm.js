import { useState, useEffect } from "react";
import WizardModelIdField from "../WizardModelIdField/WizardModelIdField";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import RadioButtons from "../RadioButtons/RadioButtons";
import Tooltip from "@mui/material/Tooltip";
import TextField from "../MUITextField/MUITextField";
import "./PredictionForm.css";
import { Alert, Snackbar } from "@mui/material";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { predictionsWsUrl } from "../../api/predictionsApi";
import { ReadyState } from "react-use-websocket";

//TODO: Testing form with other models.
const PredictionForm = ({ parsedConfig, modelId }) => {
  const [snackOpen, setSnackOpen] = useState(true);
  const [errorOpen, setErrorOpen] = useState(false);
  const [formDataMap, setFormDataMap] = useState(new Map());
  const [loading, setLoading] = useState(false);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `${predictionsWsUrl}/${modelId}`,
    {
      onOpen: () => {
        setSnackOpen(false);
        setErrorOpen(false);
      },
      onError: () => {
        setErrorOpen(true);
        setSnackOpen(false);
      },
    }
  );

  useEffect(() => {
    //NOTE: Initialize values in map since the order of things is important
    parsedConfig.features.forEach((feature) => {
      formDataMap.set(feature.name, feature.default_value);
    });
  }, []);

  const onSubmitClicked = () => {
    const values = Array.from(formDataMap.values());
    console.log(values);
    if (readyState === ReadyState.OPEN) {
      const payload = JSON.stringify({
        features: values,
      });
      console.log(payload);
      sendMessage(payload);
    }
  };
  const onSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const onErrorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErrorOpen(false);
  };

  const onNumericTextFieldChange = (event, featureName) => {
    const value = +event.target.value; //JS is so cool
    formDataMap.set(featureName, value);
  };

  const onTextFieldChange = (event, featureName) => {
    const value = event.target.value;
    formDataMap.set(featureName, value);
  };

  const handleDropdownChange = (event, newValue, featureName) => {
    formDataMap.set(featureName, newValue);
  };

  const handleRadioChange = (event, featureName) => {
    formDataMap.set(featureName, event.target.value);
  };

  const SnackbarNotify = (
    <Snackbar
      open={snackOpen}
      onClose={onSnackClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="info" onClose={onSnackClose}>
        Establishing connection to the model. Please wait.
      </Alert>
    </Snackbar>
  );

  const SnackbarError = (
    <Snackbar
      open={errorOpen}
      onClose={onErrorClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="error" onClose={onErrorClose}>
        An error has occured.
      </Alert>
    </Snackbar>
  );

  return (
    <div className="form">
      {SnackbarNotify}
      {SnackbarError}
      <div className="form-body">
        <div className="upper-form-area">
          <h1 className="model-title">{parsedConfig.presentation.title}</h1>
          <Tooltip title={parsedConfig.presentation.help_text}>
            <p className="model-subtitle">
              {parsedConfig.presentation.subtitle}
            </p>
          </Tooltip>
        </div>
        <div className="form-divider"></div>
        <div className="lower-form-area">
          <form className="form-components">
            <WizardModelIdField modelId={modelId} />
            {parsedConfig.features.map((feature) => (
              <div key={feature.name}>
                {feature.type === "text" && (
                  <TextField
                    label={feature.name}
                    helperText={feature.description}
                    defaultValue={feature.default_value}
                    name={feature.name}
                    key={feature.name}
                    onChange={(event) => {
                      onTextFieldChange(event, feature.name);
                    }}
                  />
                )}
                {feature.type === "numeric" && (
                  <TextField
                    label={feature.name}
                    helperText={feature.description}
                    defaultValue={feature.default_value}
                    type="number"
                    key={feature.name}
                    name={feature.name}
                    onChange={(event) => {
                      onNumericTextFieldChange(event, feature.name);
                    }}
                    inputProps={{ min: feature.from, max: feature.to }}
                  />
                )}
                {feature.type === "single-select" &&
                  (feature.values.length > 2 ? (
                    <Dropdown
                      key={feature.name}
                      options={feature.values}
                      label={feature.name}
                      onChange={(event, newValue) => {
                        handleDropdownChange(event, newValue, feature.name);
                      }}
                      defaultValue={feature.default_value}
                      multiple={false}
                    />
                  ) : (
                    <RadioButtons
                      defaultValue={feature.default_value}
                      label={feature.name}
                      key={feature.name}
                      handleChange={(event, newValue) => {
                        handleRadioChange(event, feature.name);
                      }}
                      options={feature.values}
                    />
                  ))}
                {feature.type === "multi-select" && (
                  <Dropdown
                    options={feature.values}
                    label={feature.name}
                    onChange={(event, newValue) => {
                      handleDropdownChange(event, newValue, feature.name);
                    }}
                    defaultValue={feature.default_value}
                    multiple={true}
                    key={feature.name}
                  />
                )}
              </div>
            ))}
          </form>
          <div className="form-submit-button">
            <Button
              type="submit"
              onClick={
                readyState !== ReadyState.OPEN ? () => {} : onSubmitClicked
              }
              buttonType={
                readyState !== ReadyState.OPEN ? "disabled" : "success lg"
              }
              text={loading ? <Loader type="tiny" /> : "Predict"}
              disabled={readyState !== ReadyState.OPEN}
            />
          </div>
          {lastMessage ? (
            <div className="output-area">
              <Alert>{`[${new Date().toLocaleString()}] \n ${
                lastMessage.data
              }`}</Alert>
            </div>
          ) : (
            <div className="output-area"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
