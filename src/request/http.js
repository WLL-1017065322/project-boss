import axios from 'axios';
import Vue from 'vue';
import QS from 'qs';
import router from '../router';

const http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/boss/api',
  // baseURL: 'http://localhost:3000/boss/api',
  baseURL: 'http://api.wanglvlong.top/boss',
  timeout: 5000,
  // headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
});

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//   http.defaults.baseURL = 'http://api.wanglvlong.top/boss';
// } else if (process.env.NODE_ENV == 'debug') {
//   http.defaults.baseURL = 'http://api.wanglvlong.top/boss';
// } else if (process.env.NODE_ENV == 'production') {
//   http.defaults.baseURL = 'http://api.wanglvlong.top/boss';
// }
// 设置请求超时
// http.defaults.timeout = 10000;
// post请求头的设置
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 拦截器 请求的拦截
http.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const { token } = localStorage;
    if (token) {
      config.headers.Authorization = token;
    }
    console.log('config', config);

    return config;
  },
  error => Promise.error(error),
);

// 拦截器 响应的拦截
http.interceptors.response.use(
  res => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误

    if (res.status === 200) {
      return Promise.resolve(res);
    }
    return Promise.reject(res);
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  err => {
    console.log(err.response.data.message);
    // ele ui
    // 用户是否存在
    if (err.response.data.message) {
      Vue.prototype.$message({
        type: 'error',
        message: err.response.data.message,
      });
      if (err.response.status === 401) {
        router.push('/login');
      }
    }
    return Promise.reject(err);
  },
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function get(url, params) {
  return new Promise((resolve, reject) => {
    http
      .get(url, {
        params,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function post(url, params) {
  return new Promise((resolve, reject) => {
    http
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

// 封装post方法

export default http;
