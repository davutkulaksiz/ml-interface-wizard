import React from "react";
import { Cloud, CloudUpload } from "@mui/icons-material";

import "./Guide.css";

const Guide = ({ project }) => {
  return (
    <div className="guide-wrapper">
      <div className="guide-container">
        <div className="guide-body">
          <div className="guide-upper-area">
            <p className="guide-header">How to Use?</p>
          </div>
          <div className="guide-divider"></div>
          <div className="guide-lower-area">
            <ol className="guide-step-list">
              {project === "interface-wizard" && (
                <>
                  <li>uno</li>
                  <li>due</li>
                  <li>tre</li>
                  <li>quattro</li>
                  <li>cinque</li>
                </>
              )}
              {project === "measure" && (
                <>
                  {/* TODO */}
                  <li>uno</li>
                  <li>due</li>
                  <li>tre</li>
                  <li>quattro</li>
                  <li>cinque</li>
                </>
              )}
              {project === "contribute" && (
                <>
                  {/* TODO */}
                  <li>uno</li>
                  <li>due</li>
                  <li>tre</li>
                  <li>quattro</li>
                  <li>cinque</li>
                </>
              )}
            </ol>
            {project === "interface-wizard" && (
              <div className="upload-container">
                <div className="upload-model-area">
                  <p className="upload-model-text">
                    Upload Model and Config Files
                  </p>
                  <span>
                    <CloudUpload fontSize="large" />
                  </span>
                </div>
                <div className="existing-model-area">Use an existing one.</div>
                {/* TODO */}
              </div>
            )}
            {project === "measure" && <>{/* TODO */}</>}
            {project === "contribute" && <>{/* TODO */}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
