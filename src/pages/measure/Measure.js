import Navbar from "../../components/Navbar/Navbar";
import FormAlternative from "../../components//MeasureSpecificComponents/FormAlternative/FormAlternative";
import "./Measure.css";
import Private from "../../components/MeasureSpecificComponents/Private/Private";
import { Switch, Route } from "react-router-dom";
import MeasureHome from "../../components/MeasureSpecificComponents/MeasureHome/MeasureHome";
import UserInviteModule from "../../components/MeasureSpecificComponents/UserInviteModule/UserInviteModule";
import Analytics from "../../components/MeasureSpecificComponents/Analytics/Analytics";
import PopupMessage from "../../components/MeasureSpecificComponents/PopupMessage/PopupMessage";
import { useState } from "react";

const Measure = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isErroneous, setIsErroneous] = useState(false);

  const throwPopupRemoveTimeout = () => {
    return setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <>
      {showPopup ? (
        <PopupMessage
          isErroneous={isErroneous}
          message={
            isErroneous ? "Error while inviting." : "Successfully invited."
          }
        />
      ) : null}
      <Navbar />
      <div className="measure-container">
        <div className="main-wrapper">
          <Switch>
            <Route
              path="/measure/analytics"
              render={(props) => <Analytics />}
            />
            <Route
              path="/measure/invite"
              render={(props) => (
                <UserInviteModule
                  setIsErroneousCallback={setIsErroneous}
                  setShowPopupCallback={setShowPopup}
                  throwPopupRemoveTimeout={throwPopupRemoveTimeout}
                />
              )}
            />
            <Route
              path="/measure/predict"
              render={(props) => (
                <Private>
                  <FormAlternative />
                </Private>
              )}
            />
            <Route Path="/measure" render={(props) => <MeasureHome />} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Measure;
