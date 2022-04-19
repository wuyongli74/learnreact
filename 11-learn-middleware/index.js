import { addAction, subAction } from './store/actionCreators.js'
import store from './store/index.js'

// 1.基本做法
// console.log('dispatch前--dispatching action:', addAction(10))
// store.dispatch(addAction(10))
// console.log('dispatch后--new store:', store.getState())

// console.log('dispatch前--dispatching action:', addAction(12))
// store.dispatch(addAction(12))
// console.log('dispatch后--new store:', store.getState())

// 2.封装一个函数
// function dispatchAndLogging(action) {
//   console.log('dispatch前--dispatching action:', action)
//   store.dispatch(action)
//   console.log('dispatch后--new store:', store.getState())
// }

// dispatchAndLogging(addAction(10))
// dispatchAndLogging(addAction(20))

// 3.函数的基础之上进行优化：修改原有的dispatch
// hack技术：monkeyingpath
// const next = store.dispatch
// function dispatchAndLogging(action) {
//   console.log('dispatch前--dispatching action:', action)
//   next(action)
//   console.log('dispatch后--new store:', store.getState())
// }

// store.dispatch = dispatchAndLogging

// store.dispatch(addAction(10))
// store.dispatch(addAction(13))

// 4.将之前的操作进行封装
// 封装patchLogging
function patchLogging(store) {
  const next = store.dispatch
  function dispatchAndLogging(action) {
    console.log('dispatch前--dispatching action:', action)
    next(action)
    console.log('dispatch后--new store:', store.getState())
  }
  // store.dispatch = dispatchAndLogging
  return dispatchAndLogging
}

// 封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch
  function dispatchAndThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState)
    } else {
      next(action)
    }
  }
  // store.dispatch = dispatchAndThunk
  return dispatchAndThunk
}

patchLogging(store)
patchThunk(store)

// store.dispatch(addAction(10))
// store.dispatch(addAction(13))

// function foo(dispatch, getState) {
//   dispatch(subAction(10))
// }
// store.dispatch(foo)

// 5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
  // const newMiddleware = [...middlewares];
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

applyMiddlewares(patchLogging, patchThunk)
