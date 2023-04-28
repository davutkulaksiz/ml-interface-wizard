import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import { fetchConfig } from "../../actions/observations";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FormAlternative from "../../components/FormAlternative/FormAlternative";
import "./Measure.css";
import { componentConstants as constants } from "../../constants/component-constants";
import Button from "../../components/Button/Button";

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
        if (feature.values.length == 2) {
          extractedFeature.component = constants.label;
        } else if (feature.values.length == 3) {
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
  const [useEffectCounter, setUseEffectCounter] = useState(0);

  const getConfig = useCallback(async () => {
    let { data } = await fetchConfig();
    setFormName(data.presentation.title);

    const config = configInitializer(data);
    setInitializedConfig(config);
  });

  useEffect(() => {
    setUseEffectCounter((useEffectCounter) => useEffectCounter + 1);
    console.log(`UseEffect is called: ${useEffectCounter}`);
    getConfig();
  }, []);

  return (
    <>
      <Navbar />
      <div className="measure-container">
        <Sidebar />
        <div className="main-wrapper">
          <FormAlternative
            initializedConfig={initializedConfig}
            formName={formName}
          />
        </div>
      </div>
    </>
  );
};

export default Measure;
