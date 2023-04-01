import { Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import "./FileUploadButton.css";

const FileUploadButton = ({
  headerText,
  buttonText,
  onClick,
  variant = "contained",
  onChange,
}) => {
  return (
    <div className="file-upload-button-container">
      <p className="file-upload-buton-text">{headerText}</p>
      <Button
        variant={variant}
        size="large"
        endIcon={<CloudUpload />}
        onClick={onClick}
        component="label"
      >
        {buttonText}
        <input type="file" hidden onChange={onChange} />
      </Button>
    </div>
  );
};

export default FileUploadButton;
