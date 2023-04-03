import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import RadioButtons from "../RadioButtons/RadioButtons";
import Tooltip from "@mui/material/Tooltip";
import TextField from "../MUITextField/MUITextField";
import "./PredictionForm.css";
import { Alert, Snackbar } from "@mui/material";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { predictionsWsUrl } from "../../api/predictionsApi";
import { ReadyState } from "react-use-websocket";

//TODO: We don't have `createdAt` info in the config, so what to do with createdAt chip?
//TODO: JSON.stringify() can throw, that should be handled.
//TODO: Testing form with other models.
//TODO: Implement output area as permanent toast
//TODO: Show toast when connection is made -> onOpen..
//TODO: Wire up the other comopnents to use stateful values, dropdown checkbox etc
const PredictionForm = ({ parsedConfig, modelId }) => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState(null);

  const [formDataMap, setFormDataMap] = useState(new Map());
  const [loading, setLoading] = useState(false);

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `${predictionsWsUrl}?model_id=${modelId}`,
    {
      onOpen: () => {
        //loading states etc..
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
    if (readyState === ReadyState.OPEN) {
      const payload = JSON.stringify({
        features: values,
      });
      sendMessage(payload);
    }
  };

  const onNumericTextFieldChange = (event, featureName) => {
    const value = +event.target.value; //JS is so cool
    formDataMap.set(featureName, value);
  };

  const onTextFieldChange = (event, featureName) => {
    const value = event.target.value;
    formDataMap.set(featureName, value);
  };

  const handleCheckboxChange = (event, featureName) => {
    setCheckboxChecked(event.target.checked);
    formDataMap.set(featureName, event.target.checked);
  };

  const handleDropdownChange = (event, newValue, featureName) => {
    setDropdownValue(newValue);
    formDataMap.set(featureName, newValue);
  };

  const handleRadioChange = (event, featureName) => {
    setRadioValue(event.target.value);
    formDataMap.set(featureName, event.target.value);
  };

  const SnackbarNotify = (
    <Snackbar>
      <Alert></Alert>
    </Snackbar>
  );

  return (
    <div className="form">
      {/* {SnackbarNotify} */}
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
            {parsedConfig.features.map((feature) => (
              <form className="form-components">
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
                      value={feature.default_value}
                      label={feature.name}
                      key={feature.name}
                      handleChange={(event) => {
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
              </form>
            ))}
          </form>
          <div className="form-submit-button">
            <Button
              type="submit"
              onClick={onSubmitClicked}
              buttonType="success lg"
              text={loading ? <Loader type="tiny" /> : "Predict"}
              disabled={readyState !== ReadyState.OPEN}
            />
          </div>
          {lastMessage && <div className="output-area">{lastMessage.data}</div>}
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
