import React, { useMemo, useState } from 'react'

const HYInfo = props => {
  console.log('HYInfo重新渲染')
  return (
    <h2>
      名字: {props.info.name} 年龄： {props.info.age}
    </h2>
  )
}

export default function MemoHookDemo02() {
  console.log('MemoHookDemo02重新渲染')

  const [show, setShow] = useState(true)

  // const info = { name: 'why', age: 19 }
  const info = useMemo(() => {
    return { name: 'why', age: 19 }
  }, [])

  return (
    <div>
      <h2>MemoHookDemo02</h2>
      <HYInfo info={info} />
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  )
}
