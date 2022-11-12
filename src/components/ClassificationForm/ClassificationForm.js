import React, { useState, useRef } from "react";
import "./ClassificationForm.css";

const ClassificationForm = (props) => {
  const [imageURL, setImageURL] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const imageRef = useRef();

  console.log(props.model);

  const handleUpload = (e) => {
    console.log(e);
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
      console.log(url);
    } else {
      setImageURL(null);
    }
  };

  const runModel = async () => {
    const predictions = await props.model.classify(imageRef.current);
    setPredictions(predictions);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="upper-form-area">
          <span className="model-name">{props.name}</span>
        </div>
        <div className="form-divider"></div>
        <div className="lower-form-area">
          <div className="form-components">
            <div className="upload-area">
              <input
                type="file"
                accept="image/*"
                className="upload-file"
                onChange={handleUpload}
              />
              {imageURL && <button onClick={runModel}>Run the Model</button>}
            </div>
            <div className="image-container">
              <img
                src={imageURL}
                alt=""
                crossOrigin="anonymous"
                className="uploaded-image"
                ref={imageRef}
              />
            </div>
          </div>
          <div className="output-area">
            {predictions.length > 0 && (
              <div className="predictions-area">
                {predictions.map((prediction) => {
                  return (
                    <div className="prediction" key={prediction.className}>
                      <span>{prediction.className}</span>
                      <span>
                        Probability: {(prediction.probability * 100).toFixed(2)}
                        %
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassificationForm;
