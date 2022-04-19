import axios from 'axios'
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'
import { changeBannersAction, changeRecommendAction } from './actionCreators'
import { FETCH_HOME_MULTIDATA } from './constants'

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  yield all([yield put(changeBannersAction(banners)), yield put(changeRecommendAction(recommends))])

  console.log(res)
}

// export default 生成器函数;
function* mySaga() {
  yield all([takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)])
}
export default mySaga
