import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import { fetchConfig } from "../../api/measure/observations";
import Navbar from "../../components/Navbar/Navbar";
import FormAlternative from "../../components/FormAlternative/FormAlternative";
import "./Measure.css";
import { componentConstants as constants } from "../../constants/component-constants";
import Private from "../../components/Private/Private";

//read config iterate over features, save names and type to an array
//for every feature in the array, read the related field from data object
// and create read only form

const configInitializer = (config) => {
  let extractedConfigData = [];

  for (let feature of config.features) {
    let extractedFeature = {
      name: feature.data_label,
      label: feature.description,
    };
    switch (feature.type) {
      case "numeric":
        extractedFeature.component = constants.numericInput;
        break;
      case "single-select":
        //pass the values to be used as options
        extractedFeature.values = feature.values;
        //check if number of options is more than 2, 3 or more
        if (feature.values.length <= 3) {
          extractedFeature.component = constants.radioButton;
        } else {
          extractedFeature.component = constants.dropdown;
        }
        break;
      default:
        extractedFeature.component = constants.textField;
    }
    // add extracted feature to array
    extractedConfigData.push(extractedFeature);
  }

  return extractedConfigData;
};

const Measure = () => {
  const [formName, setFormName] = useState("Fetching Data...");
  const [initializedConfig, setInitializedConfig] = useState(null);
  const [targetValues, setTargetValues] = useState([]);

  const getConfig = useCallback(async () => {
    let { data } = await fetchConfig();
    setFormName(data.presentation.title);
    setTargetValues(data.model.values);

    const config = configInitializer(data);
    setInitializedConfig(config);
  });

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <>
      <Navbar />
      <div className="measure-container">
        <div className="main-wrapper">
          <Private>
            <FormAlternative
              initializedConfig={initializedConfig}
              formName={formName}
              targetValues={targetValues}
            />
          </Private>
        </div>
      </div>
    </>
  );
};

export default Measure;
