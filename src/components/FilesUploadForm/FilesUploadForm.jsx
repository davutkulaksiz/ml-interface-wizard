import { useContext } from "react";
import styles from "./FilesUploadForm.module.css";
import WizardOptionalFile from "../WizardOptionalFile/WizardOptionalFile";
import WizardUploadButton from "../WizardUploadButton/WizardUploadButton";
import {
  WizardDispatchContext,
  WizardStateContext,
} from "../../stores/wizardStore/wizardContext";

const FilesUploadForm = () => {
  const state = useContext(WizardStateContext);
  const dispatch = useContext(WizardDispatchContext);

  const handleFileChange = (e, type) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const action = {
        type: type,
        file: e.target.files,
      };
      dispatch(action);
      console.log(`action invoked with ${action}`);
    }
  };

  const onClearFile = (type) => {
    const action = {
      type: type,
      file: null,
    };
    dispatch(action);
  };

  const modelName = state.model ? state.model[0].name : "";
  const configName = state.config ? state.config[0].name : "";
  const inTsfName = state.intsf ? state.intsf[0].name : "";
  const outTsfName = state.outtsf ? state.outtsf[0].name : "";

  return (
    <>
      <div className={styles.container}>
        <WizardUploadButton
          mainText={"Click here to upload the Model."}
          hintText={"Mandatory. File format is pkl."}
          fileName={modelName}
          onClick={() => { }}
          onChange={(e) => {
            console.log("change invoked");
            handleFileChange(e, "model");
          }}
          onClearClick={() => {
            onClearFile("model");
          }}
        />
        <WizardUploadButton
          mainText={"Click here to upload the Configuration."}
          hintText={"Mandatory. File format is json."}
          fileName={configName}
          onClick={() => { }}
          onChange={(e) => {
            handleFileChange(e, "config");
          }}
          onClearClick={() => {
            onClearFile("config");
          }}
        />
        <WizardOptionalFile
          name={"Input Transformer"}
          fileName={inTsfName}
          onChange={(e) => {
            handleFileChange(e, "intsf");
          }}
          onClick={() => { }}
          onClearClick={() => {
            onClearFile("intsf");
          }}
        />
        <WizardOptionalFile
          name={"Output Transformer"}
          fileName={outTsfName}
          onChange={(e) => {
            handleFileChange(e, "outtsf");
          }}
          onClick={() => { }}
          onClearClick={() => {
            onClearFile("outtsf");
          }}
        />
      </div>
    </>
  );
};

export default FilesUploadForm;
