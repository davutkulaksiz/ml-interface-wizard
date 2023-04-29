import axios from "axios";
import config from "./config.json";

const endpoint = "example.heroku";

export const fetchSingleObservation = () => {
  return axios.get(`${endpoint}/single`);
};

export const submitPredictionForSingleObservation = (
  observationId,
  prediction
) => {
  return axios.post(`${endpoint}/submit_prediction`, {
    observationId,
    prediction,
  });
};

export const fetchSingleObservationTest = () => {
  const data = {
    Sex: "male",
    Pregnancies: 6,
    Glucose: 148,
    BloodPressure: 72,
    SkinThickness: 35,
    GenHlth: "Very Good",
    Age: 50,
  };

  return new Promise((resolve, reject) => {
    resolve({ data: data });
  });
};

export const fetchConfig = () => {
  console.log(config);
  return new Promise((resolve, reject) => {
    resolve({ data: config });
  });
};
