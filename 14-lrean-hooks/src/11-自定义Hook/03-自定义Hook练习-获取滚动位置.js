import React from 'react'
import useScrollPosition from '../hooks/scroll-position-hook'

export default function CustomScrollPostionHook() {
  const postion = useScrollPosition()

  return (
    <div style={{ padding: '500px 0' }}>
      <h2 style={{ position: 'fixed', left: 0, top: 0 }}>CustomScrollPostionHook:{postion}</h2>
    </div>
  )
}
