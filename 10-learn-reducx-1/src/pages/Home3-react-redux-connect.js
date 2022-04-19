import React, { PureComponent } from 'react'
import {
  addAction,
  changeBannersAction,
  changeRecommendAction,
  incAction,
} from '../store/actionCreators'
// import { connect } from '../untils/connect'
import { connect } from 'react-redux'
import axios from 'axios'

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata',
    }).then(res => {
      const data = res.data.data
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommend(data.recommend.list)
      console.log(res)
      console.log(data)
    })
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
    changeBanners(banners) {
      dispatch(changeBannersAction(banners))
    },
    changeRecommend(recommends) {
      dispatch(changeRecommendAction(recommends))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
