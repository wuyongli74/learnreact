import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

// import saga from './saga'
import reducer from './reducer.js'

// composeEnhancers函数
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose

// 应用一些中间件
// 1.引入thunkMiddleware中间件(上面)
// 2.创建sagaMiddleware中间件
// const sagaMiddleware = createSagaMiddleware(thunkMiddleware)

// const storeEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(reducer)

// sagaMiddleware.run(saga)

export default store
