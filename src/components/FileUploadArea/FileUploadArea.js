import React from "react";
import { useState } from "react";
import { CloudUpload } from "@mui/icons-material";
import "./FileUploadArea.css";

const FileUploadArea = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files);
    }
  };

  const handleUpload = (selectedFiles) => {
    console.log(selectedFiles);
  };

  return (
    <div className="upload-model-area">
      <input
        type="file"
        className="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <p className="upload-model-text">Upload Model and Config Files</p>
      <span>
        <CloudUpload fontSize="large" />
      </span>
    </div>
  );
};

export default FileUploadArea;
