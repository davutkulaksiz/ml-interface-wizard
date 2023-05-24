import { Switch } from "@mui/material";
import { useState, useRef } from "react";
import styles from "./WizardOptionalFile.module.css";

function CloseIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={styles.closeIcon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </>
  );
}

function UploadIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={styles.closeIcon}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>
    </>
  );
}

export default function WizardOptionalFile({
  name,
  fileName,
  onClick,
  onChange,
  onClearClick,
}) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    onClearClick();
    setChecked((prev) => !prev);
  };

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
    onClick();
  };

  return (
    <>
      <div className={styles.label}>
        <p>{name}</p>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      {checked ? (
        <>
          {fileName ? (
            <div onClick={onClearClick} className={styles.uploadFile}>
              <span>{fileName}</span>
              <CloseIcon />
            </div>
          ) : (
            <>
              <div onClick={handleButtonClick} className={styles.uploadFile}>
                <span>Click here to upload.</span>
                <UploadIcon />
              </div>

              <input
                id="fileInput"
                ref={fileInputRef}
                type="file"
                hidden
                onChange={onChange}
              />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
