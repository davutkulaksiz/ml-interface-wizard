import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Guide from "../Guide/Guide";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./Wizard.css";

const Wizard = () => {
  const [currentModel, setCurrentModel] = useState("");
  const [existingModels, setExistingModels] = useState([]);

  const [isGuideOpen, setIsGuideOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isGuideOpen ? (
        <Guide
          project="interface-wizard"
          existingModels={existingModels}
          setExistingModels={setExistingModels}
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
        />
      ) : loading ? (
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
            <Form name="Nikola's Magnum Opus -Graduate Model-" />
          </div>
        </div>
      )}
    </>
  );
};

export default Wizard;
