import axios from "axios";

const baseURL = `http://${process.env.REACT_APP_MEASURE_BASE_URL}`;

export const fetchUserInviteModuleConfig = () => {
  return axios.get(`${baseURL}/invite/config`);
};

export const inviteUser = (mail, dataset) => {
  return axios.get(`${baseURL}/invite?dataset=${dataset}&mail=${mail}`);
};
