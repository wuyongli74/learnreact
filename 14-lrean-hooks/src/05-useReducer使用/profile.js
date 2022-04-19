import React, { useReducer, useState } from 'react'
import reducer from './reducer'

export default function Profile() {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <div>
      <h2>当前计数: {state.counter}</h2>
      <button onClick={e => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  )
}
