import React, { forwardRef, useRef } from 'react'

const HYInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />
})

export default function ForwardRefDemo() {
  const inputRef = useRef()

  return (
    <div>
      <h2>ForwardRefDemo</h2>

      <HYInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
