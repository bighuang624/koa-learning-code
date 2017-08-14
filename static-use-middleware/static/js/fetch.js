import axios from 'axios';
import { Message } from 'element-ui';

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.BASE_API,  // api的base_url
  baseURL: 'http://119.29.13.86:8080/tanfang/',
  // baseURL: 'https://www.easy-mock.com/mock/5971a631a1d30433d839a792/',
  timeout: 5000                   // 请求超时时间
});

// request 拦截器
service.interceptors.request.use(config => config, (error) => {
  console.log(error);
  return Promise.reject(error);
});

// response 拦截器
service.interceptors.response.use(response => response.data, (error) => {
  console.log(`err${error}`);
  Message.error({
    message: error.message,
    duration: 5 * 1000
  });
  return Promise.reject(error);
});

export default service;
