import { addAction, decAction, incAction, subAction } from './store/actionCreators.js'
import store from './store/index.js'

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addAction(10))
store.dispatch(addAction(6))
store.dispatch(subAction(11))
store.dispatch(subAction(20))
store.dispatch(incAction(2))
store.dispatch(decAction(13))
