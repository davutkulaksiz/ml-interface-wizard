import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ClassificationForm from "../ClassificationForm/ClassificationForm";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as mobilenet from "@tensorflow-models/mobilenet";

import * as tf from "@tensorflow/tfjs";

import "./ClassificationModel.css";

const ClassificationModel = () => {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);

  const loadModel = async () => {
    setLoading(true);
    try {
      const model = await mobilenet.load();
      const model_json = await tf.loadLayersModel(
        "https://hkinsley.com/static/tfjsmodel/model.json"
      );

      /*       const model = await tf.loadLayersModel(
        "https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/model.json"
      ); */
      //const model_json = tf.to_json(model);
      //console.log(model_json);

      setModel(model);
      setLoading(false);
      console.log(model);
      console.log(model_json);
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
