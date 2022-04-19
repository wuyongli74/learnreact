import React, { PureComponent } from 'react'
import { addAction, incAction } from '../store/counter/actionCreators'
import { fetchHomeMultidataAction } from '../store/home/actionCreators'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }
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
    counter: state.counterInfo.counter,
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
    getHomeMultidata() {
      // 传入的是函数
      dispatch(fetchHomeMultidataAction)
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
