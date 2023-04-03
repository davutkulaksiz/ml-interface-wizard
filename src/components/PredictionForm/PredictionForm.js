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

const PredictionForm = ({ parsedConfig, modelId }) => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState(null);

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  const onSubmitClicked = () => {};

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleDropdownChange = (event, newValue) => {
    setDropdownValue(newValue);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
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
                    onChange={() => {
                      console.log("kedy");
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
                    onChange={() => {
                      console.log("kedy");
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
                      onChange={handleDropdownChange}
                      defaultValue={feature.default_value}
                      multiple={false}
                    />
                  ) : (
                    <RadioButtons
                      value={feature.default_value}
                      label={feature.name}
                      key={feature.name}
                      handleChange={handleRadioChange}
                      options={feature.values}
                    />
                  ))}
                {feature.type === "multi-select" && (
                  <Dropdown
                    options={feature.values}
                    label={feature.name}
                    onChange={handleDropdownChange}
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
            />
          </div>
          <div className="output-area">{/* TOAST */}</div>
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
