import axios from "axios";

const baseURL = `http://${process.env.REACT_APP_MEASURE_BASE_URL}`;

export const fetchUserInviteModuleConfig = () => {
  return axios.get(`${baseURL}/invite/config`);
};

export const inviteUser = (mail, dataset, adminToken) => {
  return axios.get(
    `${baseURL}/invite?dataset=${dataset}&mail=${mail}&adminToken=${adminToken}`
  );
};

export const fetchDatasetNameForUser = (token) => {
  return axios.get(`${baseURL}/invite/user_dataset?authToken=${token}`);
};

export const verifyAdminCredentials = (credential) => {
  return axios.get(`${baseURL}/invite/admin?credentials=${credential}`);
};
