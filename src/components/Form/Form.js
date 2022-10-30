import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="form">
      <div className="form-body">
        <div className="upper-form-area">
          <span className="model-name">{props.name}</span>
        </div>
        <div className="form-divider"></div>
        <div className="lower-form-area"></div>
      </div>
    </div>
  );
};

export default Form;
