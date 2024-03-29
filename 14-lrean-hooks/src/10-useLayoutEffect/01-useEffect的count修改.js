import React, { useEffect, useState } from 'react'

export default function EffectCountDemo() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200)
    }
  }, [count])

  return (
    <div>
      <h2>数字： {count}</h2>
      <button onClick={e => setCount(0)}>修改数字</button>
    </div>
  )
}
