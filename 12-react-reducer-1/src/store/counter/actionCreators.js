import { ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER } from './constans.js'

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
