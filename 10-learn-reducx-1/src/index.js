import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
// import { StoreContext } from './untils/context'
import { Provider } from 'react-redux'

ReactDOM.render(
  // 方法一
  // <StoreContext.Provider value={store}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </StoreContext.Provider>,
  document.getElementById('root')
)
