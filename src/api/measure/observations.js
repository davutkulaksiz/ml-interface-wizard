import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import axios from "axios";

const baseURL = `http://${process.env.REACT_APP_MEASURE_BASE_URL}`;

export const fetchSingleObservation = (token, datasetName) => {
  const config = { headers: { Authorization: `${token}` } };
  return axios.get(`${baseURL}/${datasetName}`, config);
};

export const fetchConfig = (datasetName) => {
  return axios.get(`${baseURL}/${datasetName}/config`);
};

export const postSingleObservationResult = (data, token, datasetName) => {
  const config = { headers: { Authorization: `${token}` } };
  return axios.post(`${baseURL}/${datasetName}`, data, config);
};

export const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
