import axios from 'axios';

export const BASE_URL = 'https://little-bitch.herokuapp.com';

const Axios = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(tokenID) {
    Axios.defaults.headers.common.Authorization = `Bearer ${tokenID}`;
  },
  unset() {
    Axios.defaults.headers.common.Authorization = '';
  },
};

export const authSingUp = async userInfo => {
  const { data } = await Axios.post('/registration', userInfo);
  return data;
};

export const authLogIn = async authData => {
  const response = await Axios.post('/login', authData);
  return response;
};

export const authLogOut = async () => {
  const response = await Axios.post('/logout');
  return response;
};

export const getTechnicalTests = async () => {
  try {
    const { data } = await Axios.get('/tests/technical');
    return data.requestBody;
  } catch (error) {
    return error;
  }
};

export const getTheoreticalTests = async () => {
  try {
    const { data } = await Axios.get('/tests/theoretical');
    return data.requestBody;
  } catch (error) {
    return error;
  }
};

export const sendAnswersTechnical = async answerData => {
  try {
    const { data } = await Axios.post('/tests/technical', answerData);
    return data.requestBody;
  } catch (error) {
    return error;
  }
};

export const sendAnswersTheoretical = async answerData => {
  try {
    const { data } = await Axios.post('/tests/theoretical', answerData);
    return data.requestBody;
  } catch (error) {
    return error;
  }
};

export const getUser = async () => {
  try {
    const { data } = await Axios.get('/current-user');
    return data.responseBody;
  } catch (e) {
    return e;
  }
};
