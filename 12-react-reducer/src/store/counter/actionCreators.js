import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants.js'

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

export const incAction = () => ({
  type: INCREMENT,
})

export const decAction = () => ({
  type: DECREMENT,
})
