import axios from "axios";
import { API_URL } from "../utils/constants";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

let store;

export const injectStore = (params) => {
  return (store = params);
};

axiosInstance.interceptors.request.use(
  (config) => {
    const updateConfig = { ...config };
    const token = store.getState().user.token;
    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }
    return updateConfig;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },

  (error) => {
    return Promise.reject(error);
  }
);
