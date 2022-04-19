import React, { useLayoutEffect, useState } from 'react'

export default function LayoutEffectCountDemo() {
  const [count, setCount] = useState(0)
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random())
    }
  }, [count])

  return (
    <div>
      <h2>数字： {count}</h2>
      <button onClick={e => setCount(0)}>修改数字</button>
    </div>
  )
}
