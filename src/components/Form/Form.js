import React from "react";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";
import RadioButtons from "../RadioButtons/RadioButtons";

import { top100Films } from "../mockData";

import "./Form.css";

const Form = (props) => {
  const [dropdownValue, setDropdownValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("Cat");

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
          <span className="model-name">{props.name}</span>
        </div>
        <div className="form-divider"></div>
        <div className="lower-form-area">
          <div className="form-components">
            <Dropdown options={top100Films} onChange={handleDropdownChange} />
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
          </div>
          <div className="output-area">{/* TOAST */}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
