import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
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
            <p className="landing-header">ML Tools Overview</p>
          </div>
          <div className="landing-divider"></div>
          <div className="landing-lower-area">
            <div className="project-container">
              <ProjectCard
                projectName={"ML Interface Wizard"}
                description={
                  "An application that generates input forms for any machine learning model."
                }
                imagePath={
                  "https://cdn.dribbble.com/users/331265/screenshots/5415177/1015-abtestinguxcomponent-luke_dribbble.png"
                }
              />
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
              <ProjectCard
                projectName={"ML Measure"}
                description={
                  "Allows you to make predictions for classificaiton problems for any dataset."
                }
                imagePath={"https://i.hizliresim.com/93oshlf.jpg"}
              />
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
              <ProjectCard
                projectName={"ML Contribute"}
                description={"ML contribute project description."}
                imagePath={""}
              />
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
