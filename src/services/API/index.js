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

export const getUser = async () => {
  const { data } = await Axios.get('/current-user');
  return data.responseBody;
};

export const getTechnicalTests = async () => {
  try {
    const { data } = await Axios.get('/tests/technical');
    return data.requestBody;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTheoreticalTests = async () => {
  try {
    const { data } = await Axios.get('/tests/theoretical');
    return data.requestBody;
  } catch (error) {
    throw new Error(error);
  }
};

export const sendAnswersTechnical = async answerData => {
  try {
    const { data } = await Axios.post('/tests/technical', answerData);
    return data.requestBody;
  } catch (error) {
    throw new Error(error);
  }
};

export const sendAnswersTheoretical = async answerData => {
  try {
    const { data } = await Axios.post('/tests/theoretical', answerData);
    return data.requestBody;
  } catch (error) {
    throw new Error(error);
  }
};

export const getQuote = async () => {
  try {
    const { data } = await Axios.get('/quotes');
    return data.responseBody;
  } catch (error) {
    return {
      quote:
        "Regression testing. What is it? If the system compiles, that's good, if it boots, that's great!",
      author: 'Linus Torvalds',
    };
  }
};

export const changePassword = async data => {
  try {
    const response = await Axios.post('/change-password', data);
    return response?.status === 201;
  } catch (e) {
    return false;
  }
};
