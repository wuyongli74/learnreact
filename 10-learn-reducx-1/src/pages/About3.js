import { decAction, subAction } from '../store/actionCreators'
// import { connect } from '../untils/connect.js'
import { connect } from 'react-redux'

function About(props) {
  console.log("About页面重新渲染");
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <h1>banner</h1>
      <ul>
        {props.banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>
        })}
      </ul>
      <h1>recommend</h1>
      <ul>
        {props.recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
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

// connect(参数1，参数2)
export default connect(mapStateToProps, mapDispatchToProps)(About)
