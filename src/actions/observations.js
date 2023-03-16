import axios from 'axios';

const endpoint = "example.heroku";

export const fetchSingleObservation = () => {
    return axios.get(`${endpoint}/single`);
}

export const submitPredictionForSingleObservation = (observationId, prediction) => {
    return axios.post(`${endpoint}/submit_prediction`, {observationId, prediction});
}