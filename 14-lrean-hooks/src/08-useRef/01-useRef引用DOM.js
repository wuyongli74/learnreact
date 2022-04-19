import React, { useRef } from 'react'

class TestCpn extends React.Component {
  render() {
    return (
      <div>
        <h2>TestCpn</h2>
      </div>
    )
  }
}

function TestCpn2(props) {
  return (
    <div>
      <h2>TestCpn2</h2>
    </div>
  )
}

export default function RefHookDemo01() {
  const titleRef = useRef()
  const inputRef = useRef()
  const testRef = useRef()
  const testRef2 = useRef()

  function changeDOM() {
    titleRef.current.innerHTML = 'hello world'
    inputRef.current.focus()
    console.log(testRef.current)
    console.log(testRef2.current)
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} text="text" />

      <TestCpn ref={testRef} />
      <TestCpn2 ref={testRef2} />
      <button onClick={e => changeDOM()}>修改DOM</button>
    </div>
  )
}
