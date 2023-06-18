import React, { useEffect } from "react";
import { useCallback, useState } from "react";
import { fetchConfig } from "../../api/measure/observations";
import Navbar from "../../components/Navbar/Navbar";
import FormAlternative from "../../components//MeasureSpecificComponents/FormAlternative/FormAlternative";
import "./Measure.css";
import Private from "../../components/MeasureSpecificComponents/Private/Private";
import { useQuery } from "../../api/measure/observations";
import { Switch, Route } from "react-router-dom";
import MeasureHome from "../../components/MeasureSpecificComponents/MeasureHome/MeasureHome";
import UserInviteModule from "../../components/MeasureSpecificComponents/UserInviteModule/UserInviteModule";

const Measure = () => {
  const [formName, setFormName] = useState("Fetching Data...");
  const [configFeatures, setConfigFeatures] = useState(null);
  const [targetValues, setTargetValues] = useState([]);
  const [submitAreaQuestion, setSubmitAreaQuestion] = useState("Pick One");
  const [datasetName, setDatasetName] = useState(null);

  const query = useQuery();

  const getConfig = useCallback(async () => {
    if (!datasetName) {
      const datasetNameInUrl = query.get("dataset");
      setDatasetName(datasetNameInUrl ? datasetNameInUrl : "diabetes");
      return;
    }
    let { data } = await fetchConfig(datasetName);
    setFormName(data.presentation.title);
    setTargetValues(data.model.values);
    setSubmitAreaQuestion(data.model.question);
    setConfigFeatures(data.features);
  });

  useEffect(() => {
    getConfig();
  }, [datasetName]);

  return (
    <>
      <Navbar />
      <div className="measure-container">
        <div className="main-wrapper">
          <Switch>
            <Route
              exact
              path="/measure/invite"
              render={(props) => <UserInviteModule />}
            />
            <Route
              exact
              path="/measure/predict"
              render={(props) => (
                <Private>
                  <FormAlternative
                    configFeatures={configFeatures}
                    formName={formName}
                    targetValues={targetValues}
                    submitAreaQuestion={submitAreaQuestion}
                    datasetName={datasetName}
                  />
                </Private>
              )}
            />
            <Route exact Path="/measure" render={(props) => <MeasureHome />} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Measure;
