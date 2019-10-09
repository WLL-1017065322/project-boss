import axios from 'axios';
import Vue from 'vue';
import router from './router';

const http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/boss/api',
  // baseURL: 'http://localhost:3000/boss/api',
  baseURL: 'http://api.wanglvlong.top/boss',
});
// 拦截器 响应的拦截
http.interceptors.response.use(
  res => res,
  (err) => {
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

export default http;
