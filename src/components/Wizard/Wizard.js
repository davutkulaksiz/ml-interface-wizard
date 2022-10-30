import React from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import "./Wizard.css";

const Wizard = () => {
  return (
    <div className="wizard-wrapper">
      <div className="wizard-container">
        <div className="info-container">
          <div className="info-group">
            <Card type="model" heading="Regression" text="" />
            <Card type="metadata" heading="JSON" text="" />
          </div>
          <div className="info-group">
            <Card type="version" heading="Version" text="1.0.2" />
            <Card type="date" heading="Created at" text="22.10.2022" />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Wizard;
