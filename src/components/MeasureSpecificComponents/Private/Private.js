import { useEffect, useState, useMemo } from "react";
import { GetUserInfo } from "../GetUserInfo/GetUserInfo";
import { useQuery } from "../../../api/measure/observations";

const Private = ({ children }) => {
  const [userInfoAllowed, setUserInfoAllowed] = useState(false);
  const [formAllowed, setFormAllowed] = useState(false);
  const [datasetNameForUser, setDatasetNameForUser] = useState(null);
  let query = useQuery();

  useEffect(() => {
    const authTokenUrl = query.get("authToken");
    const authTokenStorage = localStorage.getItem("ml_measure_auth_token");

    //token exists in the storage but does not in the url (not a possible case to be honest)

    //token exists in the url but does not in the storage -> first time the user click to link, navigate to user info page
    if (authTokenUrl && !authTokenStorage) {
      setUserInfoAllowed(true);
      return;
    }

    //token exists in both storage and the url but they are different -> meaning same browser but different person navigate to user info page
    if (authTokenStorage && authTokenUrl) {
      if (authTokenStorage !== authTokenUrl) {
        setUserInfoAllowed(true);
        return;
      }
    }

    //token exists in both storage and url and they are same -> navigate to the form page
    if (authTokenStorage && authTokenUrl) {
      if (authTokenStorage === authTokenUrl) {
        setFormAllowed(true);
      }
      return;
    }
  }, [formAllowed, userInfoAllowed]);

  return formAllowed ? (
    children
  ) : userInfoAllowed ? (
    <GetUserInfo
      setFormAllowedCallback={() => {
        setFormAllowed(true);
      }}
    />
  ) : (
    <div
      style={{
        fontWeight: 500,
        fontSize: 30,
        position: "absolute",
        top: "40%",
      }}
    >
      403 - Forbidden
    </div>
  );
};

export default Private;
