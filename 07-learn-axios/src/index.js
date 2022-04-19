import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

// 6.默认配置
axios.defaults.baseURL = 'https://httpbin.org'
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/text'
axios.defaults.headers.common['token'] = 'dafafafafafffafs'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
