import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const HYInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus()
        console.log('useImperativeHandle中回调函数返回对象的focus')
      },
    }),
    [inputRef.current]
  )

  return <input ref={inputRef} type="text" />
})

export default function UseImperativeHandleDemo() {
  const inputRef = useRef()
  return (
    <div>
      <h2>ForwardRefDemo</h2>

      <HYInput ref={inputRef} />
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
