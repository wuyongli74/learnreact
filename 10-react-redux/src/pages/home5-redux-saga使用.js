import React, { PureComponent } from 'react'
import {
  addAction,
  // changeBannersAction,
  // changeRecommendAction,
  getHomeMultidataAction,
  fetchHomeMultidataAction,
  incAction,
} from '../store/actionCreators'
// import { connect } from '../untils/connect'
import { connect } from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMulitidata()
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(incAction())
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  // changeBanners(banners) {
  //   dispatch(changeBannersAction(banners))
  // },
  // changeRecommends(recommends) {
  //   dispatch(changeRecommendAction(recommends))
  // },

  getHomeMulitidata() {
    // 传入函数
    // dispatch(getHomeMultidataAction)
    dispatch(fetchHomeMultidataAction)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
