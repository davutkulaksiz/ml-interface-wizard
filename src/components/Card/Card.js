import React from "react";
import { ModelTraining, Folder, Update } from "@mui/icons-material";
import "./Card.css";

const Card = ({ type, heading, text }) => {
  return (
    <div className="card-container">
      {type === "model" && (
        <>
          <div className="icon-area model">
            <span className="icon">
              <ModelTraining fontSize="large" />
            </span>
          </div>
          <div className="text-area">
            <span className="heading">{heading}</span>
          </div>
        </>
      )}
      {type === "metadata" && (
        <>
          <div className="icon-area metadata">
            <span className="icon">
              <Folder fontSize="large" />
            </span>
          </div>
          <div className="text-area">
            <span className="heading">{heading}</span>
          </div>
        </>
      )}
      {type === "version" && (
        <>
          <div className="icon-area version">
            <span className="icon">
              <Update fontSize="large" />
            </span>
          </div>
          <div className="text-area">
            <span className="heading">{heading}</span>
            <span className="text">{text}</span>
          </div>
        </>
      )}
      {type === "date" && (
        <>
          <div className="icon-area">
            <span className="icon">📅</span>
          </div>
          <div className="text-area">
            <span className="heading">{heading}</span>
            <span className="text">{text}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
