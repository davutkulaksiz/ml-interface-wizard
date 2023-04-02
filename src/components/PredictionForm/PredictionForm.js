import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import RadioButtons from "../RadioButtons/RadioButtons";
import Tooltip from "@mui/material/Tooltip";
import TextField from "../MUITextField/MUITextField";

import { uploadModelWrapper as uploadModel } from "../../api/predictionsApi";
import { useAsync } from "../../hooks/useAsync";

import "./PredictionForm.css";
import { FilesUploadContext } from "../FilesUploadForm/filesUploadContext";

const PredictionForm = ({ parsedConfig }) => {
  const filesState = useContext(FilesUploadContext);

  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState(null);

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const args = {
    model: filesState.model[0],
    config: parsedConfig,
    intsf: filesState.intsf[0],
    outtsf: filesState.outtsf[0],
  };
  const { execute, status, value, error } = useAsync(uploadModel, args, false);

  useEffect(() => {
    console.log(status)
  }, [status]);

  const onSubmitClicked = () => {
    console.log(args)
    execute();
    console.log(status, value, error)
  }

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleDropdownChange = (event, newValue) => {
    setDropdownValue(newValue);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <div className="form">
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
