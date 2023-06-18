import MeasureSubmitArea from "../MeasureSubmitArea/MeasureSubmitArea";
import "./FormAlternative.css";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import {
  fetchSingleObservation,
  postSingleObservationResult,
} from "../../../api/measure/observations";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import PopupMessage from "../PopupMessage/PopupMessage";
import DynamicHtmlGenerator from "../DynamicHtmlGenerator/DynamicHtmlGenerator";

const FormAlternative = ({
  formName,
  configFeatures,
  targetValues,
  submitAreaQuestion,
  datasetName,
}) => {
  const [observationData, setObservationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [submitButtonsDisabled, setSubmitButtonsDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isErroneous, setIsErroneous] = useState(false);
  const [userSubmitData, setUserSubmitData] = useState(
    localStorage.getItem("ml_measure_user_info")
  );
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("ml_measure_auth_token")
  );

  const onSubmit = async (answerValue) => {
    //set the submit buttons disabled to true, thus prevent multiple submissions
    setSubmitButtonsDisabled(true);

    //make the form disapper slowly
    const formBody = document.getElementsByClassName("form-wrapper")[0];
    formBody.className = "form-wrapper-disappear";

    const waitForDisappear = setTimeout(() => {
      setIsLoading(true);
    }, 2500);

    try {
      //submit the prediction
      await postSingleObservationResult(
        {
          prediction: answerValue,
          userInfo: userSubmitData,
          objectId: observationData?._id,
        },
        authToken,
        datasetName
      );
      setIsErroneous(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);

      //fetch new observation, the function getObservationData also sets isLoading to false
      await getObservationData();
    } catch (err) {
      setIsErroneous(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    }

    clearTimeout(waitForDisappear);

    //show one success popup

    formBody.className = "form-wrapper";
  };

  const getObservationData = useCallback(async () => {
    //await config to be fetched to fetch an observation
    const { data } = await fetchSingleObservation(authToken, datasetName);
    setObservationData(data);
    setIsLoading(false);
  });

  useEffect(() => {
    getObservationData();
  }, []);

  return (
    <div className="form-wrapper">
      {showPopup ? (
        <PopupMessage
          isErroneous={isErroneous}
          message={isErroneous ? "Error while saving." : "Successfully saved."}
        />
      ) : null}
      <div className="form-upper">{formName}</div>
      <div className="form-divider"></div>
      <div className="form-lower-wrapper">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <div className="form-lower">
            {configFeatures?.map((feature, index) => {
              return (
                <DynamicHtmlGenerator
                  feature={feature}
                  value={observationData[feature.data_label]}
                  key={index}
                />
              );
            })}
          </div>
        )}
        {isLoading ? null : (
          <MeasureSubmitArea
            options={targetValues}
            onSubmit={onSubmit}
            questionMessage={submitAreaQuestion}
            submitButtonsDisabled={submitButtonsDisabled}
          />
        )}
      </div>
    </div>
  );
};

export default FormAlternative;
