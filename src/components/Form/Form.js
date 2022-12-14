import React from "react";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Dropdown from "../Dropdown/Dropdown";
import Checkbox from "../Checkbox/Checkbox";

import "./Form.css";

const Form = (props) => {
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
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
            {" "}
            <Dropdown />
            <Checkbox
              checked={checkboxChecked}
              label="Label"
              onChange={handleCheckboxChange}
            />
          </div>
          <div className="output-area">{/* TOAST */}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
