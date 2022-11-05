import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-wizard-wrapper">
      <div className="skeleton-wizard-container">
        <div className="skeleton-info-container">
          <div className="skeleton-info-group">
            <div className="skeleton skeleton-card-container">
              <>
                <div className="skeleton skeleton-icon-area model"></div>
                <div className="skeleton-text-area"></div>
              </>
            </div>
            <div className="skeleton skeleton-card-container">
              <>
                <div className="skeleton skeleton-icon-area model"></div>
                <div className="skeleton-text-area"></div>
              </>
            </div>
          </div>
          <div className="skeleton-info-group">
            <div className="skeleton skeleton-card-container">
              <>
                <div className="skeleton skeleton-icon-area model"></div>
                <div className="skeleton-text-area"></div>
              </>
            </div>
            <div className="skeleton skeleton-card-container">
              <>
                <div className="skeleton skeleton-icon-area model"></div>
                <div className="skeleton-text-area"></div>
              </>
            </div>
          </div>
        </div>
        <div className="skeleton-form">
          <div className="skeleton skeleton-form-body">
            <div className="skeleton-upper-form-area">
              <span className="skeleton-model-name"></span>
            </div>
            <div className="skeleton-form-divider"></div>
            <div className="skeleton-lower-form-area"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
