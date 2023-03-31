import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { FilesUploadContext } from "../FilesUploadForm/filesUploadContext";
import PredictionForm from "../PredictionForm/PredictionForm";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./Wizard.css";

const Wizard = () => {
  const filesState = useContext(FilesUploadContext);
  const [loading, setLoading] = useState(false);

  const [parsedConfig, setParsedConfig] = useState(null);

  useEffect(() => {
    setLoading(true);
    handleConfigFileChange(filesState.config);
    console.log(filesState);
  }, []);

  const handleConfigFileChange = (configFile) => {
    const reader = new FileReader();

    reader.onload = () => {
      setParsedConfig(JSON.parse(reader.result));
    };

    reader.readAsText(configFile[0]);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="wizard-wrapper">
          <div className="wizard-container">
            <div className="info-container">
              <div className="info-group">
                <Card type="model" heading="Regression" />
                <Card type="metadata" heading="JSON" />
              </div>
              <div className="info-group">
                <Card type="version" heading="Version" text="1.0.2" />
                <Card type="date" heading="Created at" text="22.10.2022" />
              </div>
            </div>
            {parsedConfig && <PredictionForm parsedConfig={parsedConfig} />}
          </div>
        </div>
      )}
    </>
  );
};

export default Wizard;
