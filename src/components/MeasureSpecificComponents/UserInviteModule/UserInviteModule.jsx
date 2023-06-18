import Button from "../../Button/Button";
import MUITextField from "../../MUITextField/MUITextField";
import styles from "./UserInviteModule.module.css";
import { useCallback, useEffect, useState } from "react";
import {
  fetchUserInviteModuleConfig,
  inviteUser,
} from "../../../api/measure/invites";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { Alert } from "@mui/material";
import PopupMessage from "../PopupMessage/PopupMessage";

const UserInviteModule = () => {
  const [mail, setMail] = useState("");
  const [selectedDataset, setSelectedDataset] = useState("");
  const [possibleDatasets, setPossibleDatasets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isErroneous, setIsErroneous] = useState(false);

  const handleDatasetButtonClick = (datasetName) => {
    setSelectedDataset(datasetName);
  };

  const handleInviteClick = async () => {
    try {
      await inviteUser(mail, selectedDataset);
      //show one success popup
      setIsErroneous(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
      //navigate to the previos page
    } catch (err) {
      setIsErroneous(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    }
  };

  const getUserInviteModuelConfigs = useCallback(async () => {
    const { data } = await fetchUserInviteModuleConfig();
    setPossibleDatasets(data.possibleDatasets);
    setIsLoading(false);
  });

  useEffect(() => {
    getUserInviteModuelConfigs();
  });

  return (
    <div className={styles["form-wrapper"]}>
      {showPopup ? (
        <PopupMessage
          isErroneous={isErroneous}
          message={
            isErroneous ? "Error while inviting." : "Successfully invited."
          }
        />
      ) : null}
      <div className={styles["form-upper"]}>User Invite Module</div>
      {isLoading ? (
        <LoadingComponent />
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
