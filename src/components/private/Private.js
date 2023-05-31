import { useEffect, useState, useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { GetUserInfo } from "../GetUserInfo/GetUserInfo";
// TODO
// if token does not exist in browser storage, and the url does not contain a token parameter, block the access
// if token exist in browser storage and in the url, show the pages
// if token exist in url but does not exist in browser storage, meaning the user is clicking the invite link for the first time
// so navigate to user info pages and save the user info to the storage

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const Private = ({ children }) => {
  const [tokenExistsInTheStorage, setTokenExistsInTheStorage] = useState(false);
  const [tokenExistsInTheUrl, setTokenExistsInTheUrl] = useState(null);
  const history = useHistory();
  let query = useQuery();

  useEffect(() => {
    //token exists in the storage -> navigate to model page
    const authTokenStorage = localStorage.getItem("ml_measure_auth_token");
    if (authTokenStorage) {
      setTokenExistsInTheStorage(true);
      return;
    }

    //token exists in the url bot does not exist in the storage -> set token and navigate to user info page
    const authTokenUrl = query.get("authToken");
    if (authTokenUrl) {
      setTokenExistsInTheUrl(authTokenUrl);
    }

    //token does not exists nor in the storage neither in the url block access
  }, [tokenExistsInTheUrl, tokenExistsInTheStorage]);

  return tokenExistsInTheStorage ? (
    { children }
  ) : tokenExistsInTheUrl ? (
    <GetUserInfo
      urlToken={tokenExistsInTheUrl}
      setTokenExistsInTheStorageCallback={setTokenExistsInTheStorage}
    />
  ) : (
    <div>Blocked</div>
  );
};

export default Private;
