import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import RadioButtons from "../RadioButtons/RadioButtons";
import Tooltip from "@mui/material/Tooltip";
import TextField from "../MUITextField/MUITextField";
import { top100Films } from "../mockData";

import "./Form.css";

const Form = ({ modelData }) => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState(null);

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(modelData);
  }, []);

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
          <h1 className="model-title">{modelData.presentation.title}</h1>
          <Tooltip title={modelData.presentation.help_text}>
            <p className="model-subtitle">{modelData.presentation.subtitle}</p>
          </Tooltip>
        </div>
        <div className="form-divider"></div>
        <div className="lower-form-area">
          <form className="form-components">
            {modelData.features.map((feature) => (
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
              onClick={() => {
                console.log("kedy");
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 2000);
              }}
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

export default Form;
