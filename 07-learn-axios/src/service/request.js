import axios from 'axios'
// 导入封装的请求库
import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

// 8.请求和响应拦截
// 请求拦截
instance.interceptors.request.use(
  config => {
    // 1.发送网络请求时，在界面的中间位置显示loading的组件

    // 2.某一些请求要求用户必须携带token，如果没有携带，那么直接跳转到登陆页面

    // 3.params/data序列化的操作
    console.log('请求拦截')
    return config
  },
  err => {
    // 在此处很少有操作
  }
)
// 响应拦截
instance.interceptors.response.use(
  res => {
    // console.log(res.data)
    return res.data
  },
  err => {
    // 判断err是否有值
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break

        default:
          console.log('其他错误信息')
          break
      }
    }
    return err
  }
)

export default instance
