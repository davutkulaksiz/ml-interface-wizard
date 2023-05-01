import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import MeasureSubmitArea from "../MeasureSubmitArea/MeasureSubmitArea";
import RadioButtons from "../RadioButtons/RadioButtons";
import MUITextField from "../MUITextField/MUITextField";
import {
  fetchSingleObservationTest,
  fetchSingleObservation,
} from "../../actions/observations";
import { fetchConfig } from "../../actions/observations";
import { componentConstants as constants } from "../../constants/component-constants";
import "./FormAlternative.css";
import { useEffect, useState } from "react";
import { useCallback } from "react";

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

const FormAlternative = ({ formName, initializedConfig }) => {
  const [observationData, setObservationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [useEffectCounter, setUseEffectCounter] = useState(0);

  console.log("rendered");
  const getObservationData = useCallback(async () => {
    const { data } = await fetchSingleObservation();
    console.log(data);
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
      <div className="form-upper">{formName}</div>
      <div className="form-divider"></div>
      <div className="form-lower-wrapper">
        <div className="form-lower">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            initializedConfig?.map((element, index) => {
              return getHtmlForFeature(
                element,
                observationData[element.name],
                index
              );
            })
          )}
        </div>
        <MeasureSubmitArea
          options={["Malignant", "Benign"]}
          type={"RadioButtons"}
          observationId={observationData?._id}
        />
      </div>
    </div>
  );
};

export default FormAlternative;
