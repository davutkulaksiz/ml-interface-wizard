import React from "react";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import RadioButtons from "../RadioButtons/RadioButtons";
import Tooltip from "@mui/material/Tooltip";

import { top100Films } from "../mockData";

import "./Form.css";

const Form = ({ modelData }) => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("Cat");

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
            <Dropdown options={top100Films} onChange={handleDropdownChange} />
            <Dropdown options={top100Films} onChange={handleDropdownChange} />
            <Dropdown options={top100Films} onChange={handleDropdownChange} />
            <Checkbox
              checked={checkboxChecked}
              label="Label"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={checkboxChecked}
              label="Label"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={checkboxChecked}
              label="Label"
              onChange={handleCheckboxChange}
            />
            <RadioButtons
              value={radioValue}
              label="Favorite Pet"
              handleChange={handleRadioChange}
              options={["Cat", "Dog"]}
            />
            <RadioButtons
              value={radioValue}
              label="Favorite Pet"
              handleChange={handleRadioChange}
              options={["Cat", "Dog"]}
            />
            <RadioButtons
              value={radioValue}
              label="Favorite Pet"
              handleChange={handleRadioChange}
              options={["Cat", "Dog"]}
            />
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
