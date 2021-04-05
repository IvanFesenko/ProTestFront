import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:5050',
});

export const setAuthToken = token => {
  Axios.defaults.headers.common['Authorization'] = token;
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
    return [];
  }
};

export const getTheoreticalTests = async () => {
  try {
    const { data } = await Axios.get('/tests/theoretical');
    return data.requestBody;
  } catch (error) {
    return [];
  }
};
