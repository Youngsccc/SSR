import axios from 'axios';
import { BASE_URL, AXIOS_TIMEOUT, TOKEN_KEY } from '@/constant/index';
import errorHandler from './errorHandler';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: AXIOS_TIMEOUT,
  withCredentials: false,
});

axiosInstance.interceptors.request // 添加请求拦截器
  .use(
    (config) => {
      if (config?.headers) {
        const token = localStorage.getItem(TOKEN_KEY);
        config.headers['Authorization'] = token || '';
      }
      // 在发送请求之前做些什么
      return config;
    },
    (error) => {
      errorHandler(error);
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    errorHandler(error);
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default axiosInstance;
