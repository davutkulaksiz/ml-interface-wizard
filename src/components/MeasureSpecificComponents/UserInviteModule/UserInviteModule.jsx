import Button from "../../Button/Button";
import PopupMessage from "../PopupMessage/PopupMessage";
import MUITextField from "../../MUITextField/MUITextField";
import styles from "./UserInviteModule.module.css";
import { useCallback, useEffect, useState } from "react";
import {
  fetchUserInviteModuleConfig,
  inviteUser,
  verifyAdminCredentials,
} from "../../../api/measure/invites";
import { useHistory } from "react-router-dom";

const UserInviteModule = ({
  setIsErroneousCallback,
  setShowPopupCallback,
  throwPopupRemoveTimeout,
}) => {
  const [mail, setMail] = useState("");
  const [selectedDataset, setSelectedDataset] = useState("");
  const [possibleDatasets, setPossibleDatasets] = useState([]);
  const [adminToken, setAdminToken] = useState(null);
  const [credentialsInput, setCredentialsInput] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();

  const handleDatasetButtonClick = (datasetName) => {
    setSelectedDataset(datasetName);
  };

  const handleCredentialsSubmitClick = async () => {
    try {
      const token = (await verifyAdminCredentials(credentialsInput)).data
        .adminToken;
      setCredentialsError(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      setAdminToken(token);
      setMail("");
    } catch (err) {
      setCredentialsError(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  };

  const handleInviteClick = async () => {
    try {
      await inviteUser(mail, selectedDataset, adminToken);

      //show one success popup
      setIsErroneousCallback(false);
      setShowPopupCallback(true);
      throwPopupRemoveTimeout();
      //navigate to the previous page
      history.push("/measure");
    } catch (err) {
      setIsErroneousCallback(true);
      setShowPopupCallback(true);
      throwPopupRemoveTimeout();

      //navigate to the previous page
      history.push("/measure");
    }
  };

  const getUserInviteModuelConfigs = useCallback(async () => {
    const { data } = await fetchUserInviteModuleConfig();
    setPossibleDatasets(data.possibleDatasets);
  });

  useEffect(() => {
    getUserInviteModuelConfigs();
  });

  return (
    <div className={styles["form-wrapper"]}>
      {showPopup ? (
        <PopupMessage
          isErroneous={credentialsError}
          message={
            credentialsError
              ? "Invalid credentials."
              : "Successfully authenticated."
          }
        />
      ) : null}
      <div className={styles["form-upper"]}>User Invite Module</div>
      {!adminToken ? (
        <div className={styles["form-lower-wrapper"]}>
          <MUITextField
            label={"Admin Credentials:"}
            onChange={(event) => {
              setCredentialsInput(event.target.value);
            }}
            defaultValue={""}
            reset={true}
          />
          <Button
            text="Submit"
            buttonType={"success"}
            onClick={handleCredentialsSubmitClick}
          />
        </div>
      ) : (
        <div className={styles["form-lower-wrapper"]}>
          <MUITextField
            label={"User's mail you want to invite"}
            onChange={(event) => {
              setMail(event.target.value);
            }}
            defaultValue={""}
          />
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontSize: "1.3em",
                fontWeight: 500,
                marginBottom: "1.5em",
              }}
            >
              Pick one dataset below
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
            >
              {possibleDatasets.map((element, index) => (
                <Button
                  text={element}
                  key={index}
                  onClick={() => {
                    handleDatasetButtonClick(element);
                  }}
                  buttonType={
                    selectedDataset === element ? "success" : "default"
                  }
                  disabled={selectedDataset === element ? true : false}
                />
              ))}
            </div>
          </div>
          <div>
            <Button
              text="Invite"
              buttonType={"success"}
              onClick={handleInviteClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInviteModule;
