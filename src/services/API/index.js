import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://little-bitch.herokuapp.com',
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
  const response = await Axios.post('/registration', userInfo);
  return response;
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
    // const response = await Axios.get('/currentUser');
    // return response;
  } catch (e) {
    return e;
  }
};
