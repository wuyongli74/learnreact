import React from 'react'
import { subAction, decAction } from '../store/actionCreators'
import { connect } from '../untils/connect'

function About(props) {
  return (
    <div>
      <div>
        <h1>About</h1>
        <h2>当前计数：{props.counter}</h2>
        <button onClick={e => props.decrement()}>-1</button>
        <button onClick={e => props.subNumber(5)}>-5</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrement: function () {
      dispatch(decAction())
    },
    subNumber: function (num) {
      dispatch(subAction(num))
    },
  }
}

// connect(参数1, 参数2)(About)
export default connect(mapStateToProps, mapDispatchToProps)(About)
