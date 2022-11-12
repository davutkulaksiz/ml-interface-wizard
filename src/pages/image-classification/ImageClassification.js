import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClassificationModel from "../../components/ClassificationModel/ClassificationModel";

import "./ImageClassification.css";

const ImageClassification = () => {
  return (
    <>
      <Navbar />
      <div className="image-classification-container">
        <Sidebar />
        <ClassificationModel />
      </div>
    </>
  );
};

export default ImageClassification;
