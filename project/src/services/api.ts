import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { SERVER_URL, REQUEST_TIMEOUT } from '../contants';
import { getToken } from './token';

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: REQUEST_TIMEOUT
  });
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};

export default createAPI;
