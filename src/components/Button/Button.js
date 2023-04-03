import React from "react";
import "./Button.css";

const Button = ({ text, type, buttonType, onClick, disabled=false }) => {
  return (
    <button type={type} onClick={onClick} className={"btn " + buttonType} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
