import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import MeasureSubmitArea from "../MeasureSubmitArea/MeasureSubmitArea";
import RadioButtons from "../RadioButtons/RadioButtons";
import MUITextField from "../MUITextField/MUITextField";
import {
  fetchSingleObservationTest,
  fetchSingleObservation,
} from "../../actions/observations";
import { componentConstants as constants } from "../../constants/component-constants";
import "./FormAlternative.css";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { postSingleObservationResult } from "../../actions/observations";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import PopupMessage from "../PopupMessage/PopupMessage";

const getHtmlForFeature = (feature, value, index) => {
  switch (feature.component) {
    case constants.numericInput:
      return (
        <div key={index}>
          <MUITextField
            label={feature.label}
            helperText={feature.description}
            onChange={() => {}}
            defaultValue={value}
            disabled={true}
          />
        </div>
      );
    case constants.radioButton:
      return (
        <div key={index}>
          <RadioButtons
            value={value}
            handleChange={() => {}}
            label={feature.label}
            options={feature.values}
            disabled={true}
          />
        </div>
      );
    case constants.dropdown:
      return (
        <div key={index}>
          <Dropdown
            value={value}
            disabled={true}
            label={feature.label}
            options={feature.values}
            sx={"100%"}
          />
        </div>
      );
    case constants.label:
      return (
        <div key={index}>
          <Checkbox
            checked={isTrue}
            label={feature.description}
            disabled={true}
          />
        </div>
      );
  }
};

const FormAlternative = ({ formName, initializedConfig, targetValues }) => {
  const [observationData, setObservationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  const [popupMessages, setPopupMessages] = useState([
    false,
    false,
    false,
    false,
  ]);

  const onSubmit = async (answerValue) => {
    //make the form disapper slowly
    const formBody = document.getElementsByClassName("form-wrapper")[0];
    formBody.className = "form-wrapper-disappear";

    const waitForDisappear = setTimeout(() => {
      setIsLoading(true);
    }, 2500);

    //submit and fetch new data
    await postSingleObservationResult({
      prediction: answerValue,
      objectId: observationData?._id,
    });

    //show successfully submitted popup
    await getObservationData();

    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
    clearTimeout(waitForDisappear);
    setIsLoading(false);

    //show one success popup
    for (let i = 0; i < 5; i++) {
      if (!popupMessages[i]) {
        setPopupMessages((popupMessages) => {
          let popupCopy = [...popupMessages];
          popupCopy[i] = true;
          return popupCopy;
        });
        setTimeout(() => {
          setPopupMessages((popupMessages) => {
            let popupCopy = [...popupMessages];
            popupCopy[i] = false;
            return popupCopy;
          });
        }, 4000);
        break;
      }
    }

    formBody.className = "form-wrapper";
  };

  const getObservationData = useCallback(async () => {
    const { data } = await fetchSingleObservation();
    setObservationData(data);
    setIsLoading(false);
  });

  useEffect(() => {
    setUseEffectCounter((useEffectCounter) => (useEffectCounter = 1));
    console.log(`useEffect is called: ${useEffectCounter}`);
    getObservationData();
  }, []);

  return (
    <div className="form-wrapper">
      {popupMessages.map((element, index) => {
        return element ? (
          <PopupMessage messageIndex={index} key={index} />
        ) : null;
      })}
      <div className="form-upper">{formName}</div>
      <div className="form-divider"></div>
      <div className="form-lower-wrapper">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <div className="form-lower">
            {initializedConfig?.map((element, index) => {
              return getHtmlForFeature(
                element,
                observationData[element.name],
                index
              );
            })}
          </div>
        )}
        {isLoading ? null : (
          <MeasureSubmitArea options={targetValues} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default FormAlternative;
