import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ClassificationForm from "../ClassificationForm/ClassificationForm";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";

import "./ClassificationModel.css";

const ClassificationModel = () => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);

  /*   useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
 */
  const loadModel = async () => {
    setLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="model-wrapper">
          <div className="model-container">
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
            <ClassificationForm
              name="Mobilenet: Image Classification Model"
              model={model}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ClassificationModel;
