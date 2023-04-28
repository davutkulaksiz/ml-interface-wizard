import Checkbox from "../Checkbox/Checkbox";
import Dropdown from "../Dropdown/Dropdown";
import MeasureSubmitArea from "../MeasureSubmitArea/MeasureSubmitArea";
import RadioButtons from "../RadioButtons/RadioButtons";
import MUITextField from "../MUITextField/MUITextField";
import { fetchSingleObservationTest } from "../../actions/observations";
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
            label={feature.description}
            onChange={() => {}}
            defaultValue={value}
          />
        </div>
      );
    case constants.radioButton:
      return (
        <div key={index}>
          <RadioButtons
            value={value}
            handleChange={() => {}}
            label={feature.description}
            options={feature.values}
            disabled={true}
          />
        </div>
      );
    case constants.dropdown:
      return (
        <div key={index}>
          <Dropdown value={value} disabled={true} options={feature.values} />
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

  console.log("rendered");
  const getObservationData = useCallback(async () => {
    const { data } = await fetchSingleObservationTest();
    setObservationData(data);
  });

  useEffect(() => {
    getObservationData();
  }, []);

  return (
    <div className="form-wrapper">
      <div className="form-upper">{formName}</div>
      <div className="form-divider"></div>
      <div className="form-lower-wrapper">
        <div className="form-lower">
          {initializedConfig?.map((element, index) => {
            return getHtmlForFeature(
              element,
              observationData[element.name],
              index
            );
          })}
        </div>
        <MeasureSubmitArea
          options={["Malignant", "Benign"]}
          type={"RadioButtons"}
        />
      </div>
    </div>
  );
};

export default FormAlternative;
