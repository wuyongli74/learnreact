import axios from 'axios'
import {
  ADD_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  DECREMENT,
  FETCH_HOME_MULTIDATA,
  INCREMENT,
  SUB_NUMBER,
} from './constans.js'

// 导出
// export function addAction(num) {
//   return {
//     type: 'ADD_NUMBER',
//     num,
//   }
// }

// export const addAction = num => {
//   return {
//     type: 'ADD_NUMBER',
//     num,
//   }
// }

// 上述的简写
export const addAction = num => ({
  type: ADD_NUMBER,
  num,
})

export const subAction = num => ({
  type: SUB_NUMBER,
  num,
})

export const incAction = num => ({
  type: INCREMENT,
  num,
})

export const decAction = num => ({
  type: DECREMENT,
  num,
})

// 轮播图和推荐
export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners,
})

export const changeRecommendAction = recommends => ({
  type: CHANGE_RECOMMEND,
  recommends,
})

// redux-thunk中定义的action函数
export const getHomeMultidataAction = dispatch => {
  console.log(dispatch, 'fghj')
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  }).then(res => {
    const data = res.data.data
    dispatch(changeBannersAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })
}

// redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA,
}
