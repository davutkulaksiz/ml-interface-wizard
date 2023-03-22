import "./ModelUploadForm.css";
import FileUploadButton from "../FileUploadButton/FileUploadButton";

const ModelUploadForm = ({}) => {
  return (
    <>
      <div className="upload-area">
        <div className="mandatory-area">
          <p className="file-upload-header">File Upload Area</p>
        </div>
        <div className="mandatory-area">
          <FileUploadButton
            headerText={"Model file (as .pkl)"}
            buttonText={"Model File"}
            onClick={() => {}}
          />

          <FileUploadButton
            headerText={"Provide a configuration file (as .json)"}
            buttonText={"Configuration File"}
            onClick={() => {}}
          />
        </div>
        <div className="optional-area">
          <FileUploadButton
            headerText={"Input Transformer (as .pkl)"}
            buttonText={"Input TSF file"}
            onClick={() => {}}
            variant={"outlined"}
          />
          <FileUploadButton
            headerText={"Output Transformer (as .pkl)"}
            buttonText={"Output TSF file"}
            onClick={() => {}}
            variant={"outlined"}
          />
        </div>
      </div>
    </>
  );
};

export default ModelUploadForm;
