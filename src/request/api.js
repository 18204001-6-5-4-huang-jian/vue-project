/*
  @description Api接口
  @author jhuang
  @date 2018-5-28
*/
import axios from 'axios'
import qs from 'qs'
// import qs from 'querystring'

// 开发环境需要加前缀api，测试和生产不需要加，故在base_url中添加api
const base_url = process.env.NODE_ENV === 'development' ? 'http://localhost:9999/api':process.env.NODE_ENV === 'production' ? '':''
/**
 * @description 将路径编辑成路由
 * @param {*} regex
 * @param {*} params
 * @private
 */
const instance = axios.create({
  timeout: 5000,
  baseURL: base_url,
  withCredentials:false,//跨域不需要凭证
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

//携带token
instance.interceptors.request.use(function (config) {
  config.headers['token'] = localStorage.getItem('token');
  return config;
}, function (error) {
  return Promise.reject(error);
})

//判断error设置拦截器
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    message.error('您未经授权,请重新登录');
    this.$router.push('/login');
  }
})

/**
 * @description 用户登录
 * @param {Object} userinfo 用戶信息
 * @return {Promise}
 */
export const userLogin = function (userinfo) {
  return instance.request({
    method: 'POST',
    url: '/airui/v1/account/login',
    data: qs.stringify(userinfo)
  })
}
