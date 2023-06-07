import axios from "axios";

const endpoint = "http://localhost:5000";

export const fetchSingleObservation = () => {
  return axios.get(`${endpoint}/diabetes`);
};

export const fetchConfig = () => {
  return axios.get(`${endpoint}/diabetes/config`);
};

export const postSingleObservationResult = (data, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return axios.post(`${endpoint}/diabetes`, data);
};
