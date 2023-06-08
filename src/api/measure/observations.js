import axios from "axios";

const endpoint = "http://localhost:5000";

export const fetchSingleObservation = (token) => {
  const config = { headers: { Authorization: `${token}` } };
  return axios.get(`${endpoint}/diabetes`, config);
};

export const fetchConfig = () => {
  return axios.get(`${endpoint}/diabetes/config`);
};

export const postSingleObservationResult = (data, token) => {
  const config = { headers: { Authorization: `${token}` } };
  return axios.post(`${endpoint}/diabetes`, data, config);
};
