import React, { PureComponent } from 'react'
import { addAction, incAction } from '../store/actionCreators'
import { connect } from '../untils/connect'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(incAction())
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
