import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <div className="landing-body">
          <div className="landing-upper-area">
            <span className="landing-header">Welcome Page</span>
          </div>
          <div className="landing-divider"></div>
          <div className="landing-lower-area">
            <div>ML Interface Wizard</div>
            <div>ML Measure</div>
            <div>ML Contribute</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
