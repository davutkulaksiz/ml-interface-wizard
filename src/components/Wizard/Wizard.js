import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { FilesUploadContext } from "../FilesUploadForm/filesUploadContext";
import PredictionForm from "../PredictionForm/PredictionForm";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./Wizard.css";
import { uploadModelWrapper } from "../../api/predictionsApi";

//TODO: Use a way to persist the parsedConfig, so that on page refresh the form can stay.
//TODO: Create an error page when the data upload fails. Retry mechanism?
const Wizard = () => {
  const filesState = useContext(FilesUploadContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modelId, setModelId] = useState(0);
  const [parsedConfig, setParsedConfig] = useState(null);

  useEffect(() => {
    if (!parsedConfig) {
      setLoading(true);
      handleConfigFileChange(filesState.config);
    }
  }, []);

  useEffect(() => {
    if (!parsedConfig) {
      return;
    }
    async function upload() {
      try {
        const args = {
          model: filesState.model[0],
          config: parsedConfig,
          intsf: filesState.intsf?.[0],
          outtsf: filesState.outtsf?.[0],
        };
        const result = await uploadModelWrapper(args);
        console.log(result);
        setModelId(result.model_id);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }
    upload();
  }, [parsedConfig]);

  const handleConfigFileChange = (configFile) => {
    try {
      const reader = new FileReader();

      reader.onload = () => {
        const result = JSON.parse(reader.result);
        setParsedConfig(result);
      };

      reader.readAsText(configFile[0]);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

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
