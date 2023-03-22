import { Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import "./FileUploadButton.css"

const FileUploadButton = ({ headerText, buttonText, onClick, variant="contained" }) => {
  return (
    <>
      <div className="container">
        <p className="text">{headerText}</p>
        <Button
          variant={variant}
          size="large" //This should be bigger
          endIcon={<CloudUpload />}
          onClick={() => {
            onClick();
          }}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default FileUploadButton;
