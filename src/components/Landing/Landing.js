import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import "./Landing.css";

const Landing = () => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <div className="landing-body">
          <div className="landing-upper-area">
            <span className="landing-header">Welcome Page</span>
          </div>
          <div className="landing-divider"></div>
          <div className="landing-lower-area">
            <div className="project-container">
              <h2 className="project-header">ML Interface Wizard</h2>
              <p className="project-description">
                An application that generates front-ends to any input machine
                learning models.
                {/*TODO: improve the description*/}
              </p>
              <Button
                type="submit"
                onClick={() => {
                  redirectTo("/interface-wizard");
                  window.scrollTo(0, 0);
                }}
                buttonType="success"
                text="Go to the Project 🚀"
              />
            </div>
            <div className="project-container">
              <h2 className="project-header">ML Measure</h2>
              <p>
                Project Description
                {/*TODO: write description for ML Measure*/}
              </p>
              <Button
                type="submit"
                onClick={() => {
                  redirectTo("/measure");
                  window.scrollTo(0, 0);
                }}
                buttonType="success"
                text="Go to the Project 🚀"
              />
            </div>
            <div className="project-container">
              <h2 className="project-header">ML Contribute</h2>
              <p>
                Project Description
                {/*TODO: write description for ML Contribute*/}
              </p>
              <Button
                type="submit"
                onClick={() => {
                  redirectTo("/contribute");
                  window.scrollTo(0, 0);
                }}
                buttonType="success"
                text="Go to the Project 🚀"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
