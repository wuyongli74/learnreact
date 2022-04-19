import React, { useEffect, useState } from 'react'

export default function MutiEffectHookDemo() {
  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    console.log('修改DOM', count)
  }, [count])

  useEffect(() => {
    console.log('订阅事件')
  }, [])

  useEffect(() => {
    console.log('网络请求')
  }, [])

  return (
    <div>
      <h2>MutiEffectHookDemo</h2>
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <h2>{isLogin ? '登录' : '注销'}</h2>
      <button onClick={e => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  )
}
