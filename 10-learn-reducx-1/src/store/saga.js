import axios from 'axios'
import { all, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { changeBannersAction, changeRecommendAction } from './actionCreators'
import { ADD_NUMBER, FETCH_HOME_MULTIDATA } from './constans'

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  console.log(res)
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  // yield put(changeBannersAction(banners))
  // yield put(changeRecommendAction(recommends))
  yield all([yield put(changeBannersAction(banners)), yield put(changeRecommendAction(recommends))])
}

function* mySaga() {
  // takeLatest && takeEvery 区别
  // takeLatest:依次只能监听一个对应的action
  // takeEvery：每一次都会被执行
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  // yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  yield all([
    takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
    // takeLatest(ADD_NUMBER, fetchHomeMultidata),
  ])
}
export default mySaga
