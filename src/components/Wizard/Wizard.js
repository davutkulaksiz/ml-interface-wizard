import React, { useContext, useEffect, useState } from "react";
import PredictionForm from "../PredictionForm/PredictionForm";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./Wizard.css";
import { useParams } from "react-router-dom";

//TODO: Create an error page when the data upload fails. Retry mechanism?
const Wizard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [parsedConfig, setParsedConfig] = useState(null);
  const { modelId } = useParams();

  useEffect(() => {
    setLoading(true);
    const config = localStorage.getItem("config");
    if (config) {
      setParsedConfig(JSON.parse(config));
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && <SkeletonLoader />}
      {modelId && (
        <div className="wizard-wrapper">
          <div className="wizard-container">
            <div className="info-container"></div>
            {parsedConfig && (
              <PredictionForm parsedConfig={parsedConfig} modelId={modelId} />
            )}
          </div>
        </div>
      )}
      {error && (
        <div className="wizard-wrapper">
          <div className="wizard-container">
            <div className="info-container">
              <p className="">Something went wrong. Try again. </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wizard;
