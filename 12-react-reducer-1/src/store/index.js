import { applyMiddleware, createStore, compose } from 'redux'
import reducer from './reducer.js'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

// composeEnhancers函数
const composeEnhancers = compose

// 应用一些中间件
// 1.引入thunkMiddleware中间件--applyMiddleware(中间1，中间2)
// 2.创建中间件
const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(storeEnhancer))

sagaMiddleware.run(saga)

export default store
