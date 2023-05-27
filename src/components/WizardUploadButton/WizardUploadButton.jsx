import { useRef } from "react";
import styles from "./WizardUploadButton.module.css";

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
        className={styles.uploadIcon}
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

export default function WizardUploadButton({
  mainText,
  hintText,
  fileName,
  onClick,
  onChange,
  onClearClick,
}) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
    onClick();
  };

  return (
    <>
      {fileName ? (
        <>
          <div onClick={onClearClick} className={styles.uploadFile}>
            <span>{fileName}</span>
            <CloseIcon />
          </div>
        </>
      ) : (
        <>
          <button onClick={handleButtonClick} className={styles.uploadArea}>
            <UploadIcon />
            <span className={styles.mainText}>{mainText}</span>
            <p className={styles.hintText}>{hintText}</p>
          </button>
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
  );
}
