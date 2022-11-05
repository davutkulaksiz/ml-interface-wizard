import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./Wizard.css";

const Wizard = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
            <Form name="Nikola's Magnum Opus -Graduate Model-" />
          </div>
        </div>
      )}
    </>
  );
};

export default Wizard;
