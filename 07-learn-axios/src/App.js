import React, { PureComponent } from 'react'
import axios from 'axios'
import request from './service/request'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  // es7语法-- 同步代码写异步请求
  // 4.async/await
  // async componentDidMount() {
  //   // 用try.catch获取错误请求
  //   try {
  //     const result = await axios.get('https://httpbin.org/get', {
  //       params: {
  //         name: 'why',
  //         age: 19,
  //       },
  //     })
  //     console.log(result)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  componentDidMount() {
    // 1.真实开发逻辑：拿取数据
    // this.setState({
    //   products: [...this.state.products, ...res],
    // })

    // 2.axios发送基本的网络请求
    // axios({
    //   url: 'https://httpbin.org/get',
    //   params: {
    //     name: 'why',
    //     age: 19,
    //   },
    //   // get请求可写可不写
    //   method: 'get',
    // })
    //   .then(res => {
    //     // 请求成功
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     // 请求失败
    //     console.error(err)
    //   })

    // axios({
    //   url: 'https://httpbin.org/post',
    //   data: {
    //     name: 'kobe',
    //     age: 17,
    //   },
    //   method: 'post',
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })

    // 3.axios发送get/post
    // axios
    //   .get('https://httpbin.org/get', {
    //     params: {
    //       name: 'lucy',
    //       age: 30,
    //     },
    //   })
    //   .then(console.log)
    // axios
    //   .post('https://httpbin.org/post', {
    //     name: 'liLei',
    //     age: 28,
    //   })
    //   .then(console.log)

    // 5.axios.all
    // const request1 = axios({
    //   url: '/get',
    //   params: { name: 'why', age: 14 },
    // })

    // const request2 = axios({
    //   url: '/post',
    //   params: { name: 'kobo', age: 13 },
    //   method: 'post',
    // })

    // axios
    //   .all([request1, request2])
    //   .then(([res1, res2]) => {
    //     console.log(res1, res2)
    //   })
    //   .catch(err => {})

    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise1')
    //   }, 1000)
    // })
    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('promise2')
    //   }, 3000)
    // })

    // Promise.all([promise1, promise2]).then(res => {
    //   console.log(res)
    // })

    // 7.创建新的实例
    // const instance1 = axios.create({
    //   baseURL: 'http://coderwhy.xyz',
    //   timeout: 5000,
    //   headers: {},
    // })

    // const instance2 = axios.create({
    //   baseURL: 'http://baidu.xyz',
    //   timeout: 10000,
    //   headers: {},
    // })

    // 8.请求和响应拦截
    // 请求拦截
    // axios.interceptors.request.use(
    //   config => {
    //     // 1.发送网络请求时，在界面的中间位置显示loading的组件

    //     // 2.某一些请求要求用户必须携带token，如果没有携带，那么直接跳转到登陆页面

    //     // 3.params/data序列化的操作
    //     console.log('请求拦截')
    //     return config
    //   },
    //   err => {
    //     // 在此处很少有操作
    //   }
    // )
    // // 响应拦截
    // axios.interceptors.response.use(
    //   res => {
    //     // console.log(res.data)
    //     return res.data
    //   },
    //   err => {
    //     // 判断err是否有值
    //     if (err && err.response) {
    //       switch (err.response.status) {
    //         case 400:
    //           console.log('请求错误')
    //           break
    //         case 401:
    //           console.log('未授权访问')
    //           break

    //         default:
    //           console.log('其他错误信息')
    //           break
    //       }
    //     }
    //     return err
    //   }
    // )

    // axios
    //   .get('https://httpbin.org/get', {
    //     params: {
    //       name: 'why',
    //     },
    //   })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    request({
      url: '/get',
      params: {
        name: 'why',
        age: 19,
      },
    }).then(console.log)
  }

  render() {
    return <div>App</div>
  }
}
